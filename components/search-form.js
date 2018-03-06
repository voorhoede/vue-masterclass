Vue.component('search-form', {
    data : function () {
        return window.chat;
    },

    template : `
        <form class="search-form" v-on:submit.prevent="onSubmit">
            <input type="search" v-model="searchText" placeholder="Search" class="reset-text search-field">
        </form>
    `,

    methods : {
        onSubmit() {
            this.searching = true;
        }
    }
});