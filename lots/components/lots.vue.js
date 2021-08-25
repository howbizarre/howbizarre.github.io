export default {
    name: "lots",
    props: ["town"],
    data() {
        return {
            currentWeek: this.currentWeekNumber(),
            currentWeekRange: this.getDateRangeOfWeek(this.currentWeekNumber()),
            nextWeekRange: this.getDateRangeOfWeek(this.currentWeekNumber() + 1),
            futureWeekRange: this.getDateRangeOfWeek(this.currentWeekNumber() + 2),
        };
    },
    template: `
        <div class="accordion" id="threeWeekLots">
            <div class="accordion-item">
                <h2 class="accordion-header" id="weekOne">
                    <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#currentWeekRange" aria-expanded="true" aria-controls="currentWeekRange">
                        {{currentWeekRange}}
                    </button>
                </h2>
                <div id="currentWeekRange" class="accordion-collapse collapse show" aria-labelledby="weekOne" data-bs-parent="#threeWeekLots">
                    <div class="accordion-body">
                        Lots for {{town}} 
                    </div>
                </div>
            </div>
            <div class="accordion-item">
                <h2 class="accordion-header" id="weekTwo">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#nextWeekRange" aria-expanded="false" aria-controls="nextWeek">
                        {{nextWeekRange}}
                    </button>
                </h2>
                <div id="nextWeekRange" class="accordion-collapse collapse" aria-labelledby="weekTwo" data-bs-parent="#threeWeekLots">
                    <div class="accordion-body">
                        Lots for {{town}}
                    </div>
                </div>
            </div>
            <div class="accordion-item">
                <h2 class="accordion-header" id="weekThree">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#futureWeekRange" aria-expanded="false" aria-controls="futureWeek">
                        {{futureWeekRange}}
                    </button>
                </h2>
                <div id="futureWeekRange" class="accordion-collapse collapse" aria-labelledby="weekThree" data-bs-parent="#threeWeekLots">
                    <div class="accordion-body">
                        Lots for {{town}}
                    </div>
                </div>
            </div>
        </div>
    `,
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
