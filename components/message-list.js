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
        <ol class="message-list__list">
            <message></message>
        </ol>
    `
});