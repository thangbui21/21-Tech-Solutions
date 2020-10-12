<template>
  <div class="table-responsive">
    <table class="table table-bordered table-lg mt-lg mb-0">
      <thead>
        <tr class="text-uppercase">
          <th>MÃ HÀNG</th>
          <th>TÊN HÀNG</th>
          <th>SỐ LƯỢNG</th>
          <th>ĐƠN GIÁ</th>
          <th>TÌNH TRẠNG</th>
        </tr>
      </thead>
      <tbody v-for="(row, index) in info" v-bind:key="index">
        <!--Đoạn này kiểm tra == current user.-->
        <tr v-if="row.userId === 'guest'">
          <td>{{ row.productType }}</td>
          <td>{{ row.productName }}</td>
          <td>{{ row.daily }}</td>
          <td>{{ row.monthly }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import Vue from "vue";
import UserService from "../../../services/user.service";
export default {
  name: "Table",
  components: {},
  data() {
    return {
      info: null,
    };
  },

  methods: {
    Top5() {
      UserService.get("/api/best-selling").then((response) => {
        this.info = response.data;
      });
    },
  },
  created() {
    this.Top5();
  },

  mounted() {},
};
</script>

<style src="./Table.scss" lang="scss" />