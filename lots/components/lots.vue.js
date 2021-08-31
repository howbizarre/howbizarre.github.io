export default {
    name: "lots",
    props: ["town", "grad"],
    data() {
        return {
            weekTemplate: null,
            currentWeek: this.currentWeekNumber(),
            currentWeekRange: this.getDateRangeOfWeek(this.currentWeekNumber()),
            nextWeekRange: this.getDateRangeOfWeek(this.currentWeekNumber() + 1),
            futureWeekRange: this.getDateRangeOfWeek(this.currentWeekNumber() + 2),
        };
    },
    template: `
        <div class="table-responsive-sm">
            <slot name="tablet" :weekTemplate="weekTemplate" :currentWeek="currentWeek"></slot>
        </div>
    `,
    created: function () {
        this.weekTemplate = "Зареждане...";

        axios.get("./models/week.json").then((response) => {
            this.weekTemplate = response.data.week;
        });
    },
    watch: {
        grad: {
            handler(newTown, oldTown) {
                this.weekTemplate = "Зареждане...";

                axios
                    .get("./models/" + newTown + "-week.json")
                    .then((response) => {
                        console.log(newTown, oldTown);
                        this.weekTemplate = response.data.week;
                    })
                    .catch((error) => {
                        this.weekTemplate = "Няма дефинирани обекти!?";
                    });
            },
        },
    },
    methods: {
        currentWeekNumber() {
            const date = new Date();
            const week1 = new Date(date.getFullYear(), 0, 4);

            date.setHours(0, 0, 0, 0);
            date.setDate(date.getDate() + 3 - ((date.getDay() + 6) % 7));

            return 1 + Math.round(((date.getTime() - week1.getTime()) / 86400000 - 3 + ((week1.getDay() + 6) % 7)) / 7);
        },
        getDateRangeOfWeek(weekNo) {
            let weekNoToday, weeksInTheFuture, rangeIsFrom, rangeIsTo;

            const d1 = new Date();
            const numOfdaysPastSinceLastMonday = d1.getDay() - 1;

            d1.setDate(d1.getDate() - numOfdaysPastSinceLastMonday);

            weekNoToday = this.currentWeekNumber();
            weeksInTheFuture = weekNo - weekNoToday;

            d1.setDate(d1.getDate() + 7 * weeksInTheFuture);
            rangeIsFrom = d1.getDate() + "." + (d1.getMonth() + 1) + "." + d1.getFullYear();

            d1.setDate(d1.getDate() + 6);
            rangeIsTo = d1.getDate() + "." + (d1.getMonth() + 1) + "." + d1.getFullYear();

            return `${weekNo} седмица от ${rangeIsFrom} до ${rangeIsTo}`;
        },
    },
};
