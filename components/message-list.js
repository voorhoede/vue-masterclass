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
            <div class="message-list__empty">
                No messages
            </div>

            <ol class="message-list__list">
                <message></message>
            </ol>
        </div>
    `
});