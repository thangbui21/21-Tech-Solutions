<template>
  <div>
    <div class="d-flex justify-content-between align-items-center mb-lg">
      <h6>Đã bán</h6>
      <h1 class="d-flex align-items-center">100</h1>
        <Sparklines
          :data="[{ data: [50, 43, 52, 64, 40, 44, 79] }]"
          :options="getRandomColor()"
        ></Sparklines>
      <!-- <i class="la la-arrow-right text-primary la-lg rotate-315" /> -->
    </div>
    
    <div class="d-flex flex-wrap justify-content-between">
      <div class="mt">
        <h6>+{{ sold }}</h6>
        <p class="text-muted mb-0 mr">
          <small>Đã bán</small>
        </p>
      </div>
      <div class="mt">
        <h6>{{ inStock }}</h6>
        <p class="text-muted mb-0">
          <small>Tồn kho</small>
        </p>
      </div>
      <div class="mt">
        <h6>{{ Math.round((sold / inStock) * 100) / 100 }}%</h6>
        <p class="text-muted mb-0 mr">
          <small>Tỉ lệ</small>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import Sparklines from "../../../components/Sparklines/Sparklines";
export default {
  components: { Sparklines },
  data() {
    return {
      totalProduct: 0,
      sold: 0,
      inStock: 0,
      dic: null,
      rate: 0,
    };
  },
  methods: {
    info() {
      return {
        totalProduct: 100,
        sold: 30,
        inStock: 370,
      };
    },
  },

  computed: {},

  methods: {
    getRandomColor() {
      const colors = ["#547fff", "#9964e3", "#f55d5d", "#ffc247", "#3abf94"];
      return {
        colors: [colors[Math.floor(Math.random() * colors.length)]],
      };
    },
  },
  mounted() {
    (this.totalProduct = this.info().totalProduct),
      (this.sold = 30),
      (this.inStock = 70);
  },
};
</script>