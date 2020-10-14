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
  name: "StackedColumn",
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
        legend: {
          // Chỉnh legend thành ô hình vuông
          symbolHeight: 11,
          symbolWidth: 11,
          symbolRadius: 0,
          // Chỉnh màu cho legend
          itemStyle: {
            color: colors.textColor,
          },
          //borderWidth: 2,
          //backgroundColor: colors.textColor,
        },

        pane: {
          size: "85%",
          innerSize: "20%",
          endAngle: 270,
        },
        xAxis: {
          labels: {
            style: {
              color: colors.textColor,
            },
          },
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
            'Monday <span class="f16"><span id="flag" class="flag no">' +
              "</span></span>",
            'Tuesday <span class="f16"><span id="flag" class="flag us">' +
              "</span></span>",
            'Wednesday <span class="f16"><span id="flag" class="flag de">' +
              "</span></span>",
            'Thursday <span class="f16"><span id="flag" class="flag ca">' +
              "</span></span>",
            'Friday <span class="f16"><span id="flag" class="flag at">' +
              "</span></span>",
            'Saturday <span class="f16"><span id="flag" class="flag at">' +
              "</span></span>",
            'Sunday <span class="f16"><span id="flag" class="flag at">' +
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
            name: "Trà Chanh",
            data: [21, 33, 64, 73, 92, 105, 132],
          },
          {
            name: "Trà Đào",
            data: [33, 87, 81, 64, 86, 110, 125],
          },

          {
            name: "Vối đá",
            data: [44, 21, 87, 62, 60, 90, 111]
          },
          {
            name: "Red Bull",
            data: [40, 33, 40, 40, 86, 72, 90],
          },
        ],
      },
    };
  },
};
</script>