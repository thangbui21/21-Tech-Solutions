<template>
  <div>
    <Widget
      title="<h5> <span class='fw-semi-bold'></span></h5>"
      customHeader
      ettings
      close
    >
      <h3>
        <span class="fw-semi-bold">Đồ uống</span>
      </h3>
      <p>
        <code>Đồ uống mang lại thương hiệu cho quán</code>
        <!-- <code>.table-bordered</code> to it. -->
      </p>

      <!--Làm sao khi chuyển page Table không bị scale. Cố định nó lại-->
      <div>
        <!--Gọi API của các loại mặt hàng rồi bind lên. Như trang overview. -->
        <table
          id="key"
          :items="info"
          :per-page="perPage"
          :current-page="currentPage"
          class="table table-bordered table-lg mt-lg mb-0"
        >
          <thead class="text-uppercase">
            <tr>
              <th>Mã</th>
              <th>Sản phẩm</th>
              <th>Giá bán</th>
              <th>Đã bán</th>
              <th>Trong kho</th>
              <th>Ngày</th>
              <th>Sales</th>
            </tr>
          </thead>
          <tbody v-for="(row, index) in info" v-bind:key="index">
            <tr v-if="row.userId == 'guest'">
              <td>{{ row.productCode }}</td>
              <td>{{ row.productName }}</td>
              <td>${{ row.soldPrice }}</td>
              <td>{{ row.sold }}</td>
              <td>{{ row.inStock }}</td>
              <td>{{ row.date }}</td>
              <td>
                <Sparklines
                  :data="[{ data: [50, 43, 52, 64, 40, 44, 79] }]"
                  :options="getRandomColor()"
                ></Sparklines>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div style="float: right; margin-top: 15px">
        <b-pagination
          v-model="currentPage"
          :total-rows="info.length"
          :per-page="perPage"
          first-text="First"
          prev-text="Prev"
          next-text="Next"
          last-text="Last"
          aria-controls="key"
        ></b-pagination>
      </div>
      <!--
      <div class="float-right" style="padding-top: 20px">
        <b-button variant="default" class="mr-xs" size="sm"
          >Send to...</b-button
        >
        
        <b-dropdown
          variant="inverse"
          class="mr-xs"
          size="sm"
          text="Clear"
          right
        >
          <b-dropdown-item>Clear</b-dropdown-item>
          <b-dropdown-item>Move ...</b-dropdown-item>
          <b-dropdown-item>Something else here</b-dropdown-item>
          <b-dropdown-divider />
          <b-dropdown-item>Separated link</b-dropdown-item>
        </b-dropdown>
    </div>
    -->
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
      perPage: 3,
      currentPage: 1,
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
      return [
        {
          data: result,
        },
      ];
    },
    getRandomColor() {
      const colors = ["#547fff", "#9964e3", "#f55d5d", "#ffc247", "#3abf94"];
      return {
        colors: [colors[Math.floor(Math.random() * colors.length)]],
      };
    },
  },

  // computed: {
  //   rows() {
  //     return this.info.length;
  //   },
  // },
};
</script>

<style src="./Tables.scss" lang="scss" scoped />
