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
                user : this.userId
            }
        },

        onSubmit(text) {
            let message = this.createMessage();

            if(text.indexOf('/cat') === 0) {
                message.messageType = 'cat';
            }
            else {
                message.messageType = 'text';
                message.text = text;
            }

            window.api.addMessage(message);
        }
    }
});