<template>
  <div>
    <div><p>Hola</p></div>
    <div><p>Hola</p></div>
    <div class="d-flex justify-content-between align-items-center mb-lg">
      <h2>{{ totalProduct }}</h2>
      <i class="la la-arrow-right text-primary la-lg rotate-315" />
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
export default {
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

  mounted() {
    (this.totalProduct = this.info().totalProduct),
      (this.sold = 30),
      (this.inStock = 70);
  },
};
</script>