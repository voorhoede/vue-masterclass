Vue.component('message-field', {
    template : `<form class="message-field">
        <input class="reset-text message-field__input" v-on:input="onInput" v-bind:value="text" type="text" value="Message" autofocus>
        <input class="message-field__submit" type="submit">
    </form>`,

    data : function () {
        return {
            text : ''
        }
    },

    methods : {
        onInput(event) {
            this.text = event.target.value;
        }
    }
});