Vue.component('cat-message', {
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
        }
    },

    template : `
        <message v-bind:user="user" v-bind:date="date">
            <!-- 
                use slots to display the img of an cat (tip use the cat api: http://thecatapi.com/api/images/get?format=src&type=gif)
            -->
        </message>
    `
});