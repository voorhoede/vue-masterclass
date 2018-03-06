
Vue.component('channel-list', {
    template : `
        <div class="channel-list">
            <h2 class="channel-list__header">Channels</h2>
            <ul>
                <li class="channel-list__item channel-list__item--current">
                    <span class="channel-list__bullet">#</span> Daily
                </li>
                <li class="channel-list__item">
                    <span class="channel-list__bullet">#</span> General
                </li>
            </ul>
        </div>
    `
});