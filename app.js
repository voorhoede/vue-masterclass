import './components/app-header.js';
import './components/app-sidebar.js';
import './components/channel-list.js';
import './components/chat-section.js';
import './components/message-list.js';
import './components/message-field.js';
import './components/message.js';
import './components/search-form.js';
import './components/search-sidebar.js';
import './components/user-profile.js';

window.chat = {
    user : {
        name : "Anoniempje",
        avatar : "./images/avatar.png"
    },
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

window.app = new Vue({
    el: '.app',

    data : window.chat,

    watch : {
        newProp() {
            console.log('newProp was added/changed');
        },

        messages(newValue, oldValue) {
            console.log(`messages changed to ${newValue}`);
        }
    },

    template : `
        <div class="app app--searching">
            <app-header></app-header>
            <app-sidebar></app-sidebar>
            <chat-section></chat-section>
            <search-sidebar></search-sidebar>
        </div>
    `
});

Vue.config.devtools = true;