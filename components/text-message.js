Vue.component('text-message', {
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
        <message v-bind:user="user" v-bind:date="date">
            <template v-slot:content>{{ text }}</template>
        </message>
    `
});