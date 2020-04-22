// TODO:
// 1. use setup() in your component and see if it works
// 2. convert data() into state in setup()
// 3. convert the methods into functions in your setup()
// 4. seperate your messages logic into a useMessages() function outside of your component

Vue.component('chat-section', {
    data : function () {
        return window.chat;
    },

    template : `
        <section class="chat-section">
            <div class="chat-section__messages">
                <message-list v-bind:messages="messages"></message-list>
            </div> 
            <message-field v-on:submit="onSubmit" class="chat-section__field"></message-field>
        </section>
    `,

    methods : {
        createMessage() {
            return {
                date : new Date(),
                user : this.user,
                id : this.messages.length
            }
        },

        onSubmit(text) {
            let message = this.createMessage();

            if(text.indexOf('/cat') === 0) {
                message.type = 'cat';
            }
            else {
                message.type = 'text';
                message.text = text;
            }

            this.messages.push(message);
        }
    }
});