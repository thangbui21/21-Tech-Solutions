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

export default {
  name: "PieChart",
  components: {
    highcharts: Chart,
  },
  data() {
    return {
      chartOptions: {
        chart: {
          type: "pie",
          backgroundColor: "transparent",
        },
        colors: [colors.purple, colors.blue, colors.red],
        title: {
          text: "First Chart",
          style: {
            color: colors.textColor,
          },
        },

        credits: {
          enabled: false,
        },

        series: [
          {
            colorByPoint: true,
            data: [
              ["Apples", 5],
              ["Pears", 9],
              ["Oranges", 2],
            ],
          },
        ],

        exporting: {
          enabled: false, // hide button
        },
      },
    };
  },
};
</script>