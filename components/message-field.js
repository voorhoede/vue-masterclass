Vue.component('message-field', {
    template : `<form class="message-field" v-on:submit.prevent="onSubmit">
        <input class="reset-text message-field__input" v-model="text" type="text" value="Message" autofocus>
        <input class="message-field__submit" type="submit">
    </form>`,

    data : function () {
        return {
            text : ''
        }
    },

    methods : {
        onSubmit() {
            this.$emit('submit', this.text);
            this.text = '';
        }
    }
});