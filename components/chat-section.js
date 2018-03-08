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
        createMessage(text) {
            return {
                text, 
                date : new Date(),
                user : this.user,
                id : this.messages.length
            }
        },

        onSubmit(text) {
            this.messages.push(
                this.createMessage(text)
            );
        }
    }
});