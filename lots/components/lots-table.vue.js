export default {
    name: "lotsTable",
    props: ["opt"],
    template: `
        <table class="table table-hover border-top border-start align-middle text-center">
            <tbody>
                <tr v-for="(week, index) in opt.weekTemplate">
                    <th scope="row" class="table-light border-end">
                        {{ week["short-name"] }}
                    </th>
                    <td class="border-end" :class="hour.active ? 'table-active' : ''" :key="hour.active" v-for="hour in week.hours">
                        <label class="w-100">
                            {{ hour.time }}
                            <input type="checkbox" class="form-check-input" :name="opt.currentWeek + '_' + index + '_' + hour.time" :checked="hour.active" />
                        </label>
                    </td>
                </tr>
            </tbody>
        </table>
    `,
};
