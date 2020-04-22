const { reactive } = vueCompositionApi

Vue.component('chat-section', {
    template : `
        <section class="chat-section">
            <div class="chat-section__messages">
                <message-list v-bind:messages="state.messages"></message-list>
            </div> 
            <message-field v-on:submit="onSubmit" class="chat-section__field"></message-field>
        </section>
    `,

    setup() {
        return {
            ...useMessages()
        }
    },
});

function useMessages() {
    const state = reactive(window.chat)

    function createMessage() {
        return {
            date: new Date(),
            user: state.user,
            id: state.messages.length
        }
    } 

    function onSubmit(text) {
        let message = createMessage();

        if(text.indexOf('/cat') === 0) {
            message.type = 'cat';
        }
        else {
            message.type = 'text';
            message.text = text;
        }

        state.messages.push(message);
    }

    return {
       state,
       createMessage,
       onSubmit
    }
}

