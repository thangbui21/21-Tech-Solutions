<template>
  <div class="table-responsive">
    <table class="table table-striped table-lg mb-0 requests-table">
      <thead>
        <tr class="text-muted">
          <th>NAME</th>
          <th>PRODUCT</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="row in mock.table" :key="row.id">
          <td>{{ row.name }}</td>
          <td>{{ row.product }}</td>
          <td>
            <b-button
              :variant="
                row.status === 'Pending'
                  ? 'success'
                  : row.status === 'Declined'
                  ? 'danger'
                  : 'info'
              "
              class="p-1 px-3 btn-xs"
            >
              {{ row.status }}
            </b-button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import UserService from "../../../services/user.service";
import Vue from "vue";
import User from "../../../models/user";
import mock from "./mock";
export default {
  name: "Message",
  data() {
    return {
      info: null,
      mock
    };
  },
  // methods: {
  //   getMessage() {
  //     UserService.get("/api/messages").then((response) => {
  //       this.info = response.data;
  //     });
  //   },
  // },
  // created() {
  //   this.getMessage();
  // },

  computed() {},
};
</script>