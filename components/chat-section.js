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
        onSubmit(text) {
            let message = {
                user : this.user,
                id : this.messages.length+1,
                date : new Date()
            }

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