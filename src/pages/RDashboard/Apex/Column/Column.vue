<template>
  <div>
    <apexchart type="bar" height="350" :options="chartOptions" :series="series"></apexchart>
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

      series: [
        {
          name: 'series1',
          data: [31, 40, 28, 51, 42, 109, 100],
        },
      ],
      
      chartOptions: {
        chart: {
          height: 350,
          type: "bar",
        },
                plotOptions: {
          bar: {
            columnWidth: '45%',
            distributed: false
          }
        },
        colors: columnColors,
        dataLabels: {
          enabled: false,
        },
        // stroke: {
        //   curve: "smooth",
        // },
        xaxis: {
          categories: [
            "John",
            "Joe",
            "Jake",
            "Amber",
            "Peter",
            "Mary",
            "David",
            "Lily",
          ],
          labels: {
            style: {
              colors: columnColors,
              fontSize: "14px",
            },
          },
          axisBorder: {
            show: false,
          },
          axisTicks: {
            show: false,
          },
        },

        yaxis: {
          labels: {
            style: {
              color: colors.textColor,
            },
          },
        },

        tooltip: {
          theme: "dark",
        },
        grid: {
          borderColor: colors.gridLineColor,
        },
      },
    };
  },
};
</script>