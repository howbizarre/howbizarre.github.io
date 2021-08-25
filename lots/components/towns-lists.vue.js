export default {
    name: "townsLists",
    props: ["msg"],
    data() {
        return {
            activeTowns: "Зареждам...",
        };
    },
    template: `
        <div class="mb-5">
            <h3 class="m-2">Активни</h3>
            <span v-if="activeTowns.active && activeTowns.active.length > 0">
                <div v-for="town in activeTowns.active" class="badge rounded-pill bg-secondary fs-6 m-2">
                    {{ town }} <button type="button" class="btn btn-sm btn-close btn-close-white" aria-label="Close"></button>
                </div>
            </span>
            <span v-else class="m-2">Добавете региони!?</span>
            <hr />
            <h3 class="m-2">Неактивни</h3>
            <span v-if="activeTowns.inactive && activeTowns.inactive.length > 0">
                <button v-for="town in activeTowns.inactive" class="btn btn-primary badge rounded-pill fs-6 m-2">
                    {{ town }}
                </button>
            </span>
            <span v-else class="m-2">Няма неактивни региони.</span>
        </div>
    `,
    watch: {
        msg: {
            handler(newMsg, oldMsg) {
                axios
                    .get("./models/" + newMsg + ".json")
                    .then((response) => {
                        this.activeTowns = response.data[newMsg];
                    })
                    .catch((error) => {
                        this.activeTowns = "Няма дефинирани обекти!?";
                    });
            },
        },
    },
    created: function () {
        axios.get("./models/" + this.msg + ".json").then((response) => {
            this.activeTowns = response.data[this.msg];
        });
    },
};
