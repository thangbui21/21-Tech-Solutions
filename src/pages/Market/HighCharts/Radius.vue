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
          plotBorderWidth: 0,
          plotShadow: false,
          backgroundColor: "transparent",
        },
        title: {
          text: "Browser<br>shares<br>2017",
          align: "center",
          verticalAlign: "middle",
          y: 60,
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
          pie: {
            dataLabels: {
              enabled: true,
              distance: -50,
              style: {
                fontWeight: "bold",
                color: "white",
              },
            },
            startAngle: -90,
            endAngle: 90,
            center: ["50%", "75%"],
            size: "110%",
          },
        },
        series: [
          {
            type: "pie",
            name: "Browser share",
            innerSize: "50%",
            data: [
              ["Chrome", 58.9],
              ["Firefox", 13.29],
              ["Internet Explorer", 13],
              ["Edge", 3.78],
              ["Safari", 3.42],
              {
                name: "Other",
                y: 7.61,
                dataLabels: {
                  enabled: false,
                },
              },
            ],
          },
        ],
      },
    };
  },
};
</script>