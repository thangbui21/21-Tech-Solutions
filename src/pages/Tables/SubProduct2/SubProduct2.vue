<template>
<div>
    <Widget title="<h5> <span class='fw-semi-bold'></span></h5>" customHeader ettings close>
        <h3>
            <span class="fw-semi-bold">Sách</span>
        </h3>

        <p><code>Sách mang đến kiến thức cho mọi người.</code></p>

        <table class="table table-bordered table-lg mt-lg mb-0">
            <thead class="text-uppercase">
                <tr>
                    <th>Sản phẩm</th>
                    <th class="text-right">Giá</th>
                    <th class="text-center">Sales</th>
                </tr>
            </thead>
            <tbody v-for="(row, index) in info" v-bind:key="index">
                <tr v-if="row.productType == 'Sách'">
                    <td>{{row.productName}}</td>
                    <td class="text-right">{{row.soldPrice}}</td>
                    <td class="text-center">
                        <Sparklines :data="getRandomData()" :options="getRandomColor()"></Sparklines>
                    </td>
                </tr>
            </tbody>
        </table>
        <div style="float: right; margin-top: 15px">
        <b-pagination
          v-model="currentPage"
          :total-rows="rows"
          :per-page="perPage"
          first-text="First"
          prev-text="Prev"
          next-text="Next"
          last-text="Last"
          aria-controls="my-table"
        ></b-pagination>
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

<style src="./SubProduct2.scss" lang="scss" scoped />
