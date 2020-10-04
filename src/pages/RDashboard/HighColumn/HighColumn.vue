<template>
  <div>
    <highcharts :options="chartOptions"></highcharts>
  </div>
</template>

<script>
// Muốn export highchart phải đủ các thông tin như dưới.
import { Chart } from "highcharts-vue";
import Highcharts from "highcharts";
import exporting from "highcharts/modules/exporting";
import exportData from "highcharts/modules/export-data";

exporting(Highcharts);
exportData(Highcharts);
import config from "../../../config";
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
  name: "LineChart",
  components: {
    highcharts: Chart,
  },
  data() {
    return {
      chartOptions: {
        chart: {
          type: "column",
          backgroundColor: "transparent",
        },

        title: {
          text: "",
          //text: "Combination chart",
          style: {
            color: colors.textColor,
          },
        },
        
        legend: {
          enabled: true,
        },
        xAxis: {
          labels: {
            style: {
              color: colors.textColor,
            },
          },
          categories: ["Trà Chanh", "Trà Đào", "Vối đá", "Chanh leo", "Trà đá"],
        },
        yAxis: {
          title: {
            enabled: false,
          },
          labels: {
            style: {
              color: colors.textColor,
            },
          },
          gridLineColor: colors.gridLineColor,
        },

        series: [
          {
            data: [176.0, 135.6, 148.5, 216.4, 194.1, ],
            pointWidth: 35,
            colorByPoint: true,
            showInLegend: false,
          },
        ],
        credits: {
          enabled: false,
        },
        exporting: {
          enabled: false, // hide button
        },
      },
    };
  },
};
</script>