export default {
    name: "listOfItems",
    props: ["item", "getactive"],
    template: `
        <li class="nav-item">
            <a data-bs-toggle="collapse" href="#foodi-regions" :title="item.name" :class="{ 'active': (item.id ===  getactive) }" class="nav-link" @click.stop="toggleActive(item.id)">
                {{ item.name }}
            </a>
        </li>
    `,
    methods: {
        toggleActive(id) {
            this.$emit("listid", id);
        },
    },
};
