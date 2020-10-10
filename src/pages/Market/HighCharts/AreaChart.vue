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
          type: "area",
          backgroundColor: "transparent",
        },
        accessibility: {
          description: "Hola",
        },
        title: {
          text: "US and USSR nuclear stockpiles",
        },
        subtitle: {
          text: "Sub title",
        },
        xAxis: {
          allowDecimals: false,
          labels: {
            formatter: function () {
              return this.value; // clean, unformatted number for year
            },
          },
          accessibility: {
            rangeDescription: "Range: 2015 to 2017.",
          },
        },
        yAxis: {
          title: {
            text: "Nuclear weapon states",
          },
          labels: {
            // formatter: function () {
            //     return this.value / 1000 + 'k';
            // }
          },
        },
        tooltip: {
          pointFormat:
            "{series.name} had stockpiled <b>{point.y:,.0f}</b><br/>warheads in {point.x}",
        },
        plotOptions: {
          area: {
            pointStart: 2010,
            marker: {
              enabled: false,
              symbol: "circle",
              radius: 2,
              states: {
                hover: {
                  enabled: true,
                },
              },
            },
          },
        },
        series: [
          {
            name: "USA",
            data: [10, 16, 14, 12, 18, 24, 22, 20],
          },
          {
            name: "USSR/Russia",
            data: [21, 12, 20, 18, 16, 20, 12, 10],
          },
        ],
      },
      chartOptions1: {
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
            data: [132, 105, 92, 73, 64, 33, 21],
          },
          {
            name: "Trà Đào",
            data: [125, 110, 86, 64, 81, 87, 33],
          },
          {
            name: "Vối đá",
            data: [111, 90, 60, 62, 87, 21, 44],
          },
        ],
      },
    };
  },
};
</script>