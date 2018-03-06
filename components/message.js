Vue.component('message', {
    props : {
        user : {
            type : Object,
            required : true,
            validator : function (value) {
                return "name" in value && "avatar" in value;
            }
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
                <img v-bind:src="user.avatar" class="message__avatar"> 
                <strong>{{ user.name }}</strong> 
                <span class="message__date">{{ date.toLocaleTimeString() }}</span>
            </div>
            <div class="message__content">
                {{ text }}
            </div>
        </li>
    `
});