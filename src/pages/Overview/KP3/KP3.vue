<template>
  <div>
    <h6>{{book}}</h6>
    <div class="stats-row">
      <div class="stat-item">
        <h6 class="name">Overall Values</h6>
        <p class="value">1024</p>
      </div>
      <div class="stat-item">
        <h6 class="name">Montly</h6>
        <p class="value">1024</p>
      </div>
      <div class="stat-item">
        <h6 class="name">24h</h6>
        <p class="value">45</p>
      </div>
    </div>
    <b-progress variant="primary" :value="60" :max="100" class="progress-xs" />
    <p>
      <small>
        <span class="circle bg-primary text-white">
          <i class="la la-angle-up" />
        </span>
      </small>
      <span class="fw-semi-bold">&nbsp;17% higher</span>
      &nbsp;than last month 
    </p>
  </div>
</template>

<script>
export default {
    name: 'KP3',
        data() {
        return {
            book: this.sellingBook(),
        }
    },
    components: {

    },
    methods: {
        sellingBook() {
            return 'Đắc nhân tâm';
        }
    },

};
</script>