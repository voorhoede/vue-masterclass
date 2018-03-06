Vue.component('message', {
    props : {
        avatar : {
            type : String,
            required : true
        },
        user : {
            type : Object,
            required : true
        },
        date : {
            type : Date,
            required : true
        },
        text : {
            type : String,
            required : true
        }
    },

    template : `
        <li class="message">
            <div class="message__header">
                <img src="images/avatar.png" class="message__avatar"> 
                <strong>Anoniempje</strong> 
                <span class="message__date">11:23:09</span>
            </div>
            <div class="message__content">
                hello world
            </div>
        </li>
    `
});