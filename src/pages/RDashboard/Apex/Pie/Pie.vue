<template>
  <div>
    <apexchart type="pie" height="380" width="480" :options="chartOptions" :series="series"></apexchart>
  </div>
</template>

<script>
import VueApexCharts from "vue-apexcharts";
import config from "../../../../config";
const colors = config.colors;
let columnColors = [
  colors.blue,
  colors.green,
  colors.orange,
  colors.red,
  colors.default,
  colors.gray,
  colors.teal,
  colors.pink,
];
let lineColors = [colors.blue, colors.green, colors.orange];
export default {
  name: "Chart",
  components: {
    apexcharts: VueApexCharts,
  },
  data: function () {
    return {
      // Tính toán dữ liệu hay DB trả về luôn data?
      series: [44, 55, 13, 43, 22],
      chartOptions: {
        chart: {
          width: 370,
          type: "pie",
        },
        labels: ["Đồ uống", "Đồ ăn nhẹ", "Sách", "Đồ chơi", "Đồ lưu niệm"],
        responsive: [
          {
            breakpoint: 480,
            options: {
              chart: {
                width: 200,
              },
              legend: {
                position: "bottom",
              },
            },
          },
        ],
      },
    };
  },
};
</script>