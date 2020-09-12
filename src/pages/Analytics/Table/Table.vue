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
      <tbody  v-for="(row, index) in data" v-bind: key="index">
        <tr>
          <td>{{row.id}}</td>
          <td>{{row.productName}}</td>
          <td>{{row.total}}</td>
          <td>{{row.productPrice}}</td>
          <td>{{row.city}}</td>
          <td>
            <b-button
              :variant="row.status === 'Pending'
                          ? 'success'
                          : row.status === 'Declined' ? 'danger' : 'info'"
              class="p-1 px-3 btn-xs"
            >{{row.status}}</b-button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
    name: 'Table',
    data() {
        return {
            
        }
    },

    methods: {
        
    },

    mounted() {
        
    },
};
</script>