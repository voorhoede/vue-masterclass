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
            this.messages.push({
                id : this.messages.length,
                date : new Date(),
                user : this.user,
                text,
            });
        }
    }
});