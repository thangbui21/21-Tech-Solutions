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
        colors: ["#FFD700", "#C0C0C0", "#CD7F32"],
        credits: {
          enabled: false,
        },
        // In ra chart
        exporting: {
          enabled: false,
        },
        chart: {
          type: "column",
          inverted: true,
          polar: true,
          backgroundColor: "transparent",
        },
        title: {
          text: "",
        },
        tooltip: {
          outside: true,
        },
        pane: {
          size: "85%",
          innerSize: "20%",
          endAngle: 270,
        },
        xAxis: {
          tickInterval: 1,
          labels: {
            align: "right",
            useHTML: true,
            allowOverlap: true,
            step: 1,
            y: 3,
            style: {
              fontSize: "13px",
            },
          },
          lineWidth: 0,
          categories: [
            'Norway <span class="f16"><span id="flag" class="flag no">' +
              "</span></span>",
            'United States <span class="f16"><span id="flag" class="flag us">' +
              "</span></span>",
            'Germany <span class="f16"><span id="flag" class="flag de">' +
              "</span></span>",
            'Canada <span class="f16"><span id="flag" class="flag ca">' +
              "</span></span>",
            'Austria <span class="f16"><span id="flag" class="flag at">' +
              "</span></span>",
          ],
        },
        yAxis: {
          labels: {
            style: {
              color: colors.textColor,
            },
          },
          crosshair: {
            enabled: true,
            color: "#333",
          },
          gridLineColor: colors.gridLineColor,
          lineWidth: 0,
          tickInterval: 25,
          reversedStacks: false,
          endOnTick: true,
          showLastLabel: true,
        },
        plotOptions: {
          column: {
            stacking: "normal",
            borderWidth: 0,
            pointPadding: 0,
            groupPadding: 0.15,
          },
        },
        series: [
          {
            name: "Gold medals",
            data: [132, 105, 92, 73, 64],
          },
          {
            name: "Silver medals",
            data: [125, 110, 86, 64, 81],
          },
          {
            name: "Bronze medals",
            data: [111, 90, 60, 62, 87],
          },
        ],
      },
    };
  },
};
</script>