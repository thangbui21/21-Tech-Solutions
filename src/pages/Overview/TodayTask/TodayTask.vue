<template>
  <div>
    <div class="widget-body p-0">
      <div class="list-group list-group-lg">
        <a class="list-group-item">
          <span class="thumb-sm float-left mr">
            <b-form-checkbox
              id="checkbox"
              v-model="task"
              name="today-task"
              value="accepted"
              unchecked-value="not_accepted"
            >
            </b-form-checkbox>
          </span>
          <div style="">
            <h6 class="m-0">Today Task 1</h6>
            <p class="help-block text-ellipsis m-0">Làm xong Market</p>
          </div>
        </a>
        <a class="list-group-item">
          <span class="thumb-sm float-left mr">
            <b-form-checkbox
              id="checkbox1"
              v-model="task"
              name="today-task"
              value="accepted"
              unchecked-value="not_accepted"
            >
            </b-form-checkbox>
          </span>
          <div style="">
            <h6 class="m-0">Today Task 1</h6>
            <p class="help-block text-ellipsis m-0">Làm xong Market</p>
          </div>
        </a>
        <a class="list-group-item">
          <span class="thumb-sm float-left mr">
            <b-form-checkbox
              id="checkbox2"
              v-model="task"
              name="today-task"
              value="accepted"
              unchecked-value="not_accepted"
            >
            </b-form-checkbox>
          </span>
          <div style="">
            <h6 class="m-0">Today Task 1</h6>
            <p class="help-block text-ellipsis m-0">Làm xong Market</p>
          </div>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TodayTask",
  data() {
    return {};
  },
  methods: {},
};
</script>