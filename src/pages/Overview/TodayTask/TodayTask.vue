<template>
  <div>
    <div class="widget-body p-0">
      <div
        class="list-group list-group-lg"
        v-for="(row, task) in todayTask"
        v-bind:key="task"
      >
        <a class="list-group-item">
          <span class="thumb-sm float-left mr">
            <b-form-checkbox
              id="checkbox"
              v-model="taskSelected"
              name="checkbox"
              value="selected"
              unchecked-value="not_selected"
            >
            </b-form-checkbox>
          </span>
          <div>
            <h6 class="m-0"><b>{{ row.title }}</b></h6>
            <p class="help-block text-ellipsis m-0">{{ row.content }}</p>
          </div>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import UserService from "../../../services/user.service";
export default {
  name: "TodayTask",
  data() {
    return {
      taskSelected: [],
      todayTask: null,
    };
  },
  methods: {
    calColumnSize: function (noCol) {
      return Math.floor(12 / noCol);
    },

    getTodayTask() {
      UserService.get("/api/todaytask").then((response) => {
        this.todayTask = response.data;
      });
    },
  },
  created() {
    this.getTodayTask();
  },
};
</script>