Vue.component('chat-section', {
    template : `
        <section class="chat-section">
            <div class="chat-section__messages">
                <message-list></message-list>
            </div> 
            <message-field class="chat-section__field"></message-field>
        </section>
    `
});