export default {
    name: "lots",
    props: ["town", "week"],
    data() {
        return {
            dateExpl: this.dateFunction(),
        };
    },
    template: `
        <p>{{dateExpl}}</p>
    `,
    methods: {
        dateFunction() {
            const currentDate = new Date();
            const getDay = currentDate.getDay();
            const weekNumber = this.currentWeekNumber();

            const first = currentDate.getDate() - (getDay - 1); // First day is the day of the month - the day of the week
            const last = first + 6; // last day is the first day + 6

            const dateFormat = { month: "numeric", day: "numeric" };
            const yearFormat = { year: "numeric" };

            const firstDayOfWeek = new Intl.DateTimeFormat("bg-BG", dateFormat).format(currentDate.setDate(first));
            const lastDayOfWeek = new Intl.DateTimeFormat("bg-BG", dateFormat).format(currentDate.setDate(last));
            const currentYear = new Intl.DateTimeFormat("bg-BG", yearFormat).format(currentDate);

            return [`Седмица ${weekNumber}`, `от ${firstDayOfWeek} до ${lastDayOfWeek}`, currentYear].join(" - ");
        },
        currentWeekNumber() {
            const currentDate = new Date();
            const getDay = currentDate.getDay();
            const oneJan = new Date(currentDate.getFullYear(), 0, 1);
            const numberOfDays = Math.floor((currentDate - oneJan) / (24 * 60 * 60 * 1000));
            const weekNumber = Math.ceil((getDay + 1 + numberOfDays) / 7);

            return weekNumber;
        },
    },
};
