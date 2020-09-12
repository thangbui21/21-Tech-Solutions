<template>
  <div>
    <div class="stats-row">
      <div class="stat-item">
        <h6 class="name">Tổng Số</h6>
        <p class="value">{{total}}</p>
      </div>
      <div class="stat-item">
        <h6 class="name">Tháng</h6>
        <p class="value">{{montly}}</p>
      </div>
      <div class="stat-item">
        <h6 class="name">Ngày</h6>
        <p class="value">{{day}}</p>
      </div>
    </div>
    <b-progress variant="danger" :value="8" :max="100" class="progress-xs" />
    <p>
      <small>
        <span class="circle bg-primary text-white">
          <i class="la la-angle-down" />
        </span>
      </small>
      <span class="fw-semi-bold">&nbsp;8% thấp hơn</span>
      &nbsp;so với tháng trước
    </p>
  </div>
</template>

<script>
export default {
  name: "Warehouse",
  data() {
    return {
      total: 0,
      montly: 0,
      day: 0,
    };
  },
  //Call API
  methods: {
    info() {
      return {
        total: 1253,
        montly: 352,
        day: 43,
      };
    },
  },

  computed: {},

  mounted() {
    (this.total = this.info().total),
      (this.montly = this.info().montly),
      (this.day = this.info().day);
  },
};
</script>