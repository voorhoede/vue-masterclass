Vue.component('message-list', {
    props : {
        messages : {
            type : Array,
            default : () => {
                return [];
            },
            required : true
        }
    },

    template : `
        <div class="message-list">
            <div v-if="messages.length === 0" class="message-list__empty">
                No messages
            </div>

            <ol class="message-list__list">
                <message 
                    v-for="message of messages" 
                    :key="message.id" 
                    :text="message.text"
                    :avatar="message.user.avatar"
                    :date="message.date"
                    :user="message.user"
                    >
                </message>
            </ol>
        </div>
    `
});