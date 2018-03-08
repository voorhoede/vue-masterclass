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

// define your data structure here
window.chat = {
    messages : []
}

window.app = new Vue({
    el: '.app',

    watch : {
        //try to add the newProp property to window.chat. Does the watcher get triggered?
        newProp() {
            console.log('newProp was added/changed');
        },

        //try to change the messages
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