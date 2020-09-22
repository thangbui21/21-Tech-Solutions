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
          plotBackgroundColor: null,
          plotBorderWidth: null,
          plotShadow: false,
          type: "pie",
          backgroundColor: "transparent",
        },
        title: {
          text: "Top 5",
          style: {
            color: colors.textColor,
          },
        },
        tooltip: {
          pointFormat: "{series.name}: <b>{point.percentage:.1f}%</b>",
        },
        accessibility: {
          point: {
            valueSuffix: "%",
          },
        },
        plotOptions: {
          style: {
            color: colors.textColor,
          },
          pie: {
            allowPointSelect: true,
            cursor: "pointer",
            dataLabels: {
              enabled: false,
            },
            showInLegend: true,
          },
        },
        exporting: {
          enabled: false,
        },
        series: [
          {
            name: "Sales",
            //colorByPoint: true,
            colors: [colors.green, colors.blue, colors.red, colors.orange],
            // Chỉnh data.
            data: [
              {
                name: "Drink",
                y: 30,

                selected: true,
              },
              {
                name: "Snack",
                y: 30,
              },
              {
                name: "Book",
                y: 40,
              },
            ],
          },
        ],
      },
    };
  },
};
</script>