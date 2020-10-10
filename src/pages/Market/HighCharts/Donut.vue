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
          renderTo: "chart",
          type: "pie",
          backgroundColor: "transparent",
        },
        credits: {
          enabled: false,
        },
        title: {
          text: "",
        },
        plotOptions: {
          pie: {
            shadow: false,
            borderWidth: 0,
          },
        },
        tooltip: {
          enabled: false,
        },
        series: [
          {
            data: [
              {
                name: "first",
                y: 23,
              },
              {
                name: "second",
                y: 8,
              },
              {
                name: "third",
                y: 11,
              },
              {
                name: "fourth",
                y: 11,
              },
              {
                name: "fifth",
                y: 47,
              },
            ],
            size: "100%",
            innerSize: "67%",
            showInLegend: true,
            dataLabels: {
              enabled: false,
            },
          },
        ],
      },
    };
  },
};
</script>