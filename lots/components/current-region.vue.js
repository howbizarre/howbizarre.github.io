export default {
    name: "currentRegion",
    props: ["town", "id", "slug"],
    template: `
        <div class="nav nav-tabs">
            <h1 class="h4 me-3">{{ town }}</h1>
            <button class="nav-link active" data-bs-toggle="tab" :data-bs-target="'#towns-' + slug">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16">
                    <path fill="none" d="M0 0h24v24H0z"/>
                    <path fill="currentColor" d="M21 19h2v2H1v-2h2V4a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v15h4v-8h-2V9h3a1 1 0 0 1 1 1v9zM5 5v14h8V5H5zm2 6h4v2H7v-2zm0-4h4v2H7V7z"/>
                </svg>
                <span class="ms-1 d-none d-sm-inline-block">ГРАДОВЕ</span>
            </button>
            <button class="nav-link" data-bs-toggle="tab" :data-bs-target="'#lots-' + slug">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16">
                    <path fill="none" d="M0 0h24v24H0z"/>
                    <path fill="currentColor" d="M17 3h4a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h4V1h2v2h6V1h2v2zM4 9v10h16V9H4zm2 2h2v2H6v-2zm0 4h2v2H6v-2zm4-4h8v2h-8v-2zm0 4h5v2h-5v-2z"/>
                </svg>
                <span class="ms-1 d-none d-sm-inline-block">ЛОТОВЕ</span>
            </button>
        </div>
        <div class="tab-content mt-3">
            <div class="tab-pane fade show active" :id="'towns-' + slug">
                <slot name="towns"></slot>
            </div>
            <div class="tab-pane fade" :id="'lots-' + slug">
                <slot name="lots"></slot>
            </div>
        </div>
    `,
};
