<template>
  <div>
  <apexchart type="radialBar" height="375" :options="chartOptions" :series="series"></apexchart>
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
      series: [83, 55, 67, 43],
          chartOptions: {
            chart: {
              height: 330,
              type: 'radialBar',
            },
            plotOptions: {
              radialBar: {
                dataLabels: {
                  name: {
                    fontSize: '22px',
                  },
                  value: {
                    fontSize: '16px',
                  },
                  total: {
                    show: true,
                    label: 'Tổng',
                    formatter: function (w) {
                      // By default this function returns the average of all series. The below is just an example to show the use of custom formatter function
                      return 249
                    }
                  }
                }
              }
            },
            labels: ['Trà Chanh', 'Trà Đào', 'Vối đá', 'Red Bull'],
          },
          
 };
  },
};
</script>