<template>
  <div class="table-responsive">
    <table class="table table-striped table-lg mb-0 requests-table">
      <thead>
        <tr class="text-muted">
          <th>MÃ HÀNG</th>
          <th>TÊN HÀNG</th>
          <th>SỐ LƯỢNG</th>
          <th>ĐƠN GIÁ</th>
          <th>TÌNH TRẠNG</th>
        </tr>
      </thead>
      <tbody v-for="(row, index) in data" v-bind:key="index">
        <tr>
          <td>{{row.id}}</td>
          <td>{{row.productName}}</td>
          <td>{{row.total}}</td>
          <td>{{row.productPrice}}</td>
          <td>{{row.sold}}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "Table",
  data() {
    return {
      data: [
        {
          id: "H1",
          productName: "Trà Chanh",
          total: 500,
          productPrice: 300,
          sold: 200
        },
      ],
    };
  },

  methods: {},

  mounted() {},
};
</script>

<style src="./Table.scss" lang="scss" />