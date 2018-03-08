import './components/app-header.js';
import './components/app-sidebar.js';
import './components/channel-list.js';
import './components/chat-section.js';
import './components/message-list.js';
import './components/message-field.js';
import './components/search-form.js';
import './components/search-sidebar.js';
import './components/user-profile.js';

import './components/message.js';
import './components/text-message.js';
import './components/cat-message.js';

import Api from './api/index.js';

window.api = new Api();

/*
    Look at the ui in the browser and determine the data structure for your slack clone.
    Make the data "reactive".

    Try the following things:
    - Add or remove an item from the message array. Either through the browser console or the devtools
    - Change an item in the message array. What happens?
    - Add a new property called 'newProp' through the browser console. What happens?
*/

window.chat = {
    userId : null,
    users : [],
    channels : [
        {
            name : 'Daily'
        },
        {
            name : 'General'
        }
    ],
    currentChannel : 'Daily',
    messages : [],
    searching : false,
    searchText : ''
}

function patchArray(arr, doc) {
    const existingIndex = arr.findIndex(message => message._id === doc._id);
    if(doc._deleted) {
        arr.splice(existingIndex, 1);
    }
    else if(existingIndex > -1) {
        Object.assign(arr[existingIndex], doc);
    }
    else {
        arr.push(doc);
    }
}

window.app = new Vue({
    el: '.app',

    data : window.chat,

    created() {
        window.api.init()
            .then(({userId, users, messages}) => {
                this.users = users;
                this.userId = userId;
                this.messages = messages.map(message => {
                    return Object.assign({}, message, {
                        user : this.users.find(user => user._id === message.user)
                    });
                });

                window.api.startStream(doc => {
                    if(doc.type === 'message') {
                        doc.user = this.users.find(user => user._id === doc.user);
                        patchArray(this.messages, doc);
                    }
                    else {
                        patchArray(this.users, doc);
                    }
                });
            });
    },

    watch : {
        newProp() {
            console.log('newProp was added/changed');
        },

        messages(newValue, oldValue) {
            console.log(`messages changed to ${newValue}`);
        }
    },

    template : `
        <div class="app" :class="{'app--searching' : searching}">
            <app-header></app-header>
            <app-sidebar></app-sidebar>
            <chat-section></chat-section>
            <search-sidebar></search-sidebar>
        </div>
    `
});

Vue.config.devtools = true;