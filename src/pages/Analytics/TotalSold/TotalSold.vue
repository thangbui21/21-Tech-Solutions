<template>
  <div>
    <div class="stats-row">
      <div class="stat-item">
        <h6 class="name">Tổng số</h6>
        <p class="value">{{total}}</p>
      </div>
      <div class="stat-item">
        <h6 class="name">Tháng</h6>
        <p class="value">{{month}}</p>
      </div>
      <div class="stat-item">
        <h6 class="name">Ngày</h6>
        <p class="value">{{day}}</p>
      </div>
    </div>
    <b-progress variant="success" :value="17" :max="100" class="progress-xs" />
    <p>
      <small>
        <span class="circle bg-primary text-white">
          <i class="la la-angle-up" />
        </span>
      </small>
      <span class="fw-semi-bold">&nbsp;17% cao hơn</span>
      &nbsp;so với tháng trước
    </p>
  </div>
</template>

<script>
export default {
  name: "TotalSold",
  data() {
    return {
      total: 0,
      month: 0,
      day: 0,
    };
  },
  //Call API
  methods: {
    info() {
      return {
        total: 1253,
        month: 352,
        day: 43,
      };
    },
  },

  computed: {},

  mounted() {
    (this.total = this.info().total),
      (this.month = this.info().month),
      (this.day = this.info().day);
  },
};
</script>