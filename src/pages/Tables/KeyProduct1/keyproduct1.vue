<template>
<div>
    <Widget title="<h5> <span class='fw-semi-bold'></span></h5>" customHeader ettings close>
        <h3>
            <span class="fw-semi-bold">Drink</span>
        </h3>
        <p>
            <code>Đồ uống mang lại thương hiệu cho quán</code>
            <!-- <code>.table-bordered</code> to it. -->
        </p>
        <p>{{info.type}}</p>
        <div>
            <table class="table table-bordered table-lg mt-lg mb-0">
                <thead class="text-uppercase">
                    <tr>
                        <th>
                            <div class="abc-checkbox">
                                <input type="checkbox" id="checkbox10" :checked="checkboxes2[0]" @change="event => checkAll(event, 'checkboxes2')" />
                                <label for="checkbox10" />
                            </div>
                        </th>
                        <th>code</th>
                        <th>Product</th>
                        <th>Price</th>
                        <th>Sold</th>
                        <th>In stock</th>
                        <th>Sales</th>
                    </tr>
                </thead>
                <tbody v-for="(row, index) in info" v-bind:key="index">
                    <!--Check ở đây nhá.-->
                    <tr v-if="row.type == 'drink'">
                        <td>
                            <div class="abc-checkbox">
                                <input type="checkbox" id="checkbox11" :checked="checkboxes2[1]" @change="event => changeCheck(event, 'checkboxes2', 1)" />
                                <label for="checkbox11" />
                            </div>
                        </td>
                        <!-- <td >{{row.type}}</td> -->
                        <td>{{row.id}}</td>
                        <td>{{row.productName}}</td>
                        <td>${{row.productPrice}}</td>
                        <td>{{row.soldToday}}</td>
                        <td>{{row.inStock}}</td>
                        <td>
                            <Sparklines :data="[{ data: [50, 43, 52, 64, 40, 44, 79] }]" :options="getRandomColor()"></Sparklines>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>

        <div class="float-right" style="padding-top: 20px">
            <b-button variant="default" class="mr-xs" size="sm">Send to...</b-button>
            <b-dropdown variant="inverse" class="mr-xs" size="sm" text="Clear" right>
                <b-dropdown-item>Clear</b-dropdown-item>
                <b-dropdown-item>Move ...</b-dropdown-item>
                <b-dropdown-item>Something else here</b-dropdown-item>
                <b-dropdown-divider />
                <b-dropdown-item>Separated link</b-dropdown-item>
            </b-dropdown>
        </div>
    </Widget>
</div>
</template>

<script>
import Vue from "vue";
import Widget from "@/components/Widget/Widget";
import Sparklines from "../../../components/Sparklines/Sparklines";
import UserService from "../../../services/user.service";

export default {
    name: "Tables",
    components: {
        Widget,
        Sparklines,
    },
    data() {
        return {
            info: null,
            checkboxes1: [false, false, false, false],
            checkboxes2: [false, false, false, false, false, false],
            checkboxes3: [false, false, false, false, false, false],
        };
    },
    mounted() {
        UserService.get("/api/products").then(
            (response) => (this.info = response.data)
        );
    },
    methods: {
        checkAll(ev, checkbox) {
            const checkboxArr = new Array(this[checkbox].length).fill(
                ev.target.checked
            );
            Vue.set(this, checkbox, checkboxArr);
        },
        changeCheck(ev, checkbox, id) {
            this[checkbox][id] = ev.target.checked;
            if (!ev.target.checked) {
                this[checkbox][0] = false;
            }
        },
        // Data lấy về được, không cần random.
        getRandomData() {
            const result = [];
            for (let i = 0; i <= 8; i += 1) {
                result.push(Math.floor(Math.random() * 20) + 1);
            }
            return [{
                data: result,
            }, ];
        },
        getRandomColor() {
            const colors = ["#547fff", "#9964e3", "#f55d5d", "#ffc247", "#3abf94"];
            return {
                colors: [colors[Math.floor(Math.random() * colors.length)]],
            };
        },
    },
};
</script>

<style src="./Tables.scss" lang="scss" scoped />
