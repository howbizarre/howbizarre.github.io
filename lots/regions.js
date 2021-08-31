import unorderedList from "./components/unordered-list.vue.js";
import listOfItems from "./components/list-of-items.vue.js";
import currentRegion from "./components/current-region.vue.js";
import townsLists from "./components/towns-lists.vue.js";
import lots from "./components/lots.vue.js";
import lotsTable from "./components/lots-table.vue.js";

const ListRegions = {
    data() {
        return {
            "activeId": 0,
            "activeRegion": { "id": 5, "name": "СОФИЯ", "url": "sofia" },
            "gettingRegions": null,
        };
    },
    computed: {
        currentRegion() {
            this.activeRegion = this.gettingRegions ? this.gettingRegions[this.activeId] : this.activeRegion;
        },
    },
    mounted: function () {
        axios.get("./models/regions.json").then((response) => {
            this.gettingRegions = response.data.regions;
        });
    },
};

const app = Vue.createApp(ListRegions);

app.component("unordered-list", unorderedList);
app.component("list-of-items", listOfItems);
app.component("current-region", currentRegion);
app.component("towns-lists", townsLists);
app.component("lots", lots);
app.component("lots-table", lotsTable);

app.mount("#regions");
