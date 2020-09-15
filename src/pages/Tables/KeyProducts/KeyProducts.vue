<template>
  <div>
        <!--Đồ uống lấy trong product.type-->
        <!-- -->
        <Widget
          title="<h5><span class='fw-semi-bold'></span></h5>"
          customHeader
          settings
          close
        >
          <!--Cần nhiều thông tin hơn ở 1 bảng to như này-->
          <div class="table-resposive">
            <table class="table">
              <thead>
                <tr>
                  <th class="hidden-sm-down">Mã hàng</th>
                  <th>Tên hàng</th>
                  <th class="hidden-sm-down">Giá bán</th>
                  <th class="hidden-sm-down">Đã bán</th>
                  <th class="hidden-sm-down">Trong kho</th>
                  <!-- <th class="hidden-sm-down">Tình trạng</th> -->
                </tr>
              </thead>
              <tbody v-for="(row, index) in keyproduct" v-bind:key="index">
                <tr>
                  <td>{{row.id}}</td>
                  <td>{{row.productName}}</td>
                  <td>{{row.productPrice}}</td>
                  <td>{{row.soldToday}}</td>
                  <td>{{row.inStock}}</td>
                </tr>
              </tbody>
            </table>
          </div>
          
          <div class="clearfix">
            <div class="float-right">
              <b-button variant="default" class="mr-xs" size="sm">Send to...</b-button>
              <b-dropdown variant="inverse" class="mr-xs" size="sm" text="Clear" right>
                <b-dropdown-item>Clear</b-dropdown-item>
                <b-dropdown-item>Move ...</b-dropdown-item>
                <b-dropdown-item>Something else here</b-dropdown-item>
                <b-dropdown-divider />
                <b-dropdown-item>Separated link</b-dropdown-item>
              </b-dropdown>
            </div>
            <p>Basic table with styled content</p>
          </div>
        </Widget>
  </div>
</template>

<script>
import UserService from "../../../services/user.service";
export default {
  data() {
    return {
      keyproduct: null,
    };
  },
  mounted() {
    UserService.get("/api/products").then(
      (response) => (this.keyproduct = response.data)
    );
  },
  name: "Key Products",
  methods: {},
  computed: {},
};
</script>
<style src="./KeyProducts.scss" lang="scss" scoped />