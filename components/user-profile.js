Vue.component('user-profile', {
    data : function () {
        return window.chat;
    },

    template : `
        <div class="user-profile">
            <label class="user-profile__label" for="name">Name</label>
            <input type="text" id="name" value="Anoniempje" class="reset-text user-profile__name">
        </div>
    `
});