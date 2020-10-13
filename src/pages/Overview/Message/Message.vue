<template>
  <div>
    <div class="widget-body p-0">
      <div class="list-group list-group-lg" v-for="(row, message) in info" v-bind:key="message">
        <a class="list-group-item" href="/app/analytics">
          <span class="thumb-sm float-left mr">
            <img
              class="rounded-circle"
              src="../../../assets/people/a8.jpg"
              alt="..."
            />
            <i class="status status-bottom bg-success" />
          </span>
          <div >
            <h6 class="m-0"><b>{{row.sender}}</b></h6>
            <p class="help-block text-ellipsis m-0">{{row.content}}</p>
          </div>
        </a>
      </div>
    </div>
    <footer class="bg-widget mt">
      <input
        type="search"
        class="form-control form-control-sm"
        placeholder="Search"
      />
    </footer>
  </div>
</template>

<script>
import UserService from "../../../services/user.service";
import Vue from "vue";
import User from "../../../models/user";

export default {
  name: "Message",
  data() {
    return{
      info: null,
    }
  },
  methods: {
    getMessage() {
      UserService.get("/api/messages").then((response) => {
        this.info = response.data;
      });
    },
  },
  created() {
    this.getMessage();
  },

  computed() {},
};
</script>