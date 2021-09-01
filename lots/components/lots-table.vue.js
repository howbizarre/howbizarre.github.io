export default {
    name: "lotsTable",
    props: ["model"],
    template: `
        <table class="table table-hover border-top border-start align-middle text-center">
            <tbody>
                <tr v-for="(week, index) in model.weekTemplate">
                    <th scope="row" class="table-light border-end">
                        {{ week["short-name"] }}
                    </th>
                    <td class="border-end" :class="hour.active ? 'table-active' : ''" :key="hour.active" v-for="hour in week.hours">
                        <label class="w-100">
                            {{ hour.time }}
                            <input type="checkbox" class="form-check-input" :name="'week-' + model.currentWeek + '_' + index + '_' + hour.time + '-hour'" :checked="hour.active" />
                        </label>
                    </td>
                </tr>
            </tbody>
        </table>
    `,
};
