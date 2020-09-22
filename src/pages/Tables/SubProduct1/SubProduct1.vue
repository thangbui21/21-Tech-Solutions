<template>
<div>
    <Widget title="<h5> <span class='fw-semi-bold'></span></h5>" customHeader ettings close>
        <h3>
            <span class="fw-semi-bold"> Food</span>
        </h3>
        <p>
            <code>Những món ăn bán chạy nhất quán.</code>
            <!-- <code>.table-bordered</code> to it. -->
        </p>
        <p>{{info.type}}</p>
        <table class="table table-bordered table-lg mt-lg mb-0">
            <thead class="text-uppercase">
                <tr>
                    <th>Product</th>
                    <th class="text-right">Price</th>
                    <th class="text-center">Sales</th>
                </tr>
            </thead>
            <tbody v-for="(row, index) in info" v-bind:key="index">
                <!--Check ở đây nhá.-->
                <tr v-if="row.type == 'food'">
                    <!-- <td >{{row.type}}</td> -->
                    <td>{{row.productName}}</td>
                    <td class="text-right">$ {{row.productPrice}}</td>
                    <td class="text-center">
                        <Sparklines :data="[{ data: [50, 43, 52, 64, 40, 44, 79] }]" :options="getRandomColor()"></Sparklines>
                    </td>
                </tr>
            </tbody>
        </table>
    </Widget>
</div>
</template>

<script>
import Vue from "vue";
import Widget from "@/components/Widget/Widget";
import Sparklines from "../../../components/Sparklines/Sparklines";
import UserService from "../../../services/user.service"

export default {
    name: "Tables",
    components: {
        Widget,
        Sparklines
    },
    data() {
        return {
            info: null,
        };
    },
    mounted() {
        UserService.get("/api/products").then(
            (response) => (this.info = response.data)
        );
    },
    methods: {
        // Data lấy về được, không cần random.
        getRandomData() {
            const result = [];
            for (let i = 0; i <= 8; i += 1) {
                result.push(Math.floor(Math.random() * 20) + 1);
            }
            return [{
                data: result
            }];
        },
        getRandomColor() {
            const colors = ["#547fff", "#9964e3", "#f55d5d", "#ffc247", "#3abf94"];
            return {
                colors: [colors[Math.floor(Math.random() * colors.length)]]
            };
        },
    },
};
</script>

<style src="./SubProduct1.scss" lang="scss" scoped />
