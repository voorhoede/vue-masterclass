Vue.component('user-profile', {
    data : function () {
        return window.chat;
    },

    template : `
        <div class="user-profile">
            <label class="user-profile__label" for="name">Name</label>
            <input type="text" id="name" :value="userName" @change="onChangeUser" class="reset-text user-profile__name">
        </div>
    `,

    methods : {
        onChangeUser(e) {
            this.currentUser.name = e.target.value;
            window.api.updateUser( this.currentUser );
        }
    },

    computed : {
        currentUser() {
            return this.users.find(user => user._id === this.userId);
        },

        userName() {
            return this.currentUser ? this.currentUser.name : '';
        }
    }
});