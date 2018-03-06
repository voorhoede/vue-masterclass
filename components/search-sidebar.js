Vue.component('search-sidebar', {
    data : function () {
        return window.chat;
    },

    template : `
        <aside class="search-sidebar" v-if="searching">
            <button class="reset-button search-sidebar__close" v-on:click="searching = false" aria-label="Close" title="Close"></button>
            <h2 class="search-sidebar__header">0 Messages</h2>
            <!--<message-list></message-list>-->
        </aside>
    `
});