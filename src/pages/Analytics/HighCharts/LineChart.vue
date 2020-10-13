<template>
  <div>
    <highcharts :options="chartOptions.mixed"></highcharts>
  </div>
</template>

<script>
// Muốn export highchart phải đủ các thông tin như dưới.
import Highcharts from "highcharts";
import exporting from "highcharts/modules/exporting";
import exportData from "highcharts/modules/export-data";
import { Chart } from "highcharts-vue";
import config from "../../../config";
exporting(Highcharts);
exportData(Highcharts);

const colors = config.colors;

export default {
  name: "Charts",
  components: {
    highcharts: Chart,
  },
  data() {
    return {
      chartOptions: {
        mixed: {
          chart: {
            type: "spline",
            height: 350,
            backgroundColor: "transparent",
          },
          
          exporting: {
            enabled: false,
          },
          
          title: {
            text: "",
            style: {
              color: colors.textColor,
            },
          },
          
          credits: {
            enabled: false,
          },
          
          xAxis: {
            type: "datetime",
            dateTimeLabelFormats: {
              month: "%e. %b",
              year: "%b",
            },
            labels: {
              style: {
                color: colors.textColor,
              },
            },
          },
          
          yAxis: {
            min: 0,
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
          
          tooltip: {
            headerFormat: "<b>{series.name}</b><br>",
            pointFormat: "{point.x:%e. %b}: {point.y:.2f} m",
          },

          legend: {
            enabled: true,
            align: "center",

            symbolHeight: 11,
            symbolWidth: 11,
            symbolRadius: 0,

            verticalAlign: "top",
            
            itemStyle: {
              color: colors.textColor,
            },
          },

          plotOptions: {
            series: {
              marker: {
                enabled: false,
                symbol: "circle",
              },
            },
          },
          
          colors: [colors.red, colors.green, colors.blue],

          series: [
            {
              name: "Đồ uống",
              type: "areaspline",

              fillColor: {
                linearGradient: {
                  x1: 0,
                  y1: 0,
                  x2: 0,
                  y2: 1,
                },
                stops: [
                  [0, Highcharts.getOptions().colors[0]],
                  [
                    1,
                    Highcharts.color(Highcharts.getOptions().colors[0])
                      .setOpacity(0)
                      .get("rgba"),
                  ],
                ],
              },
              
              data: [
                [Date.UTC(2020, 9, 1), 30],
                [Date.UTC(2020, 9, 2), 23],
                [Date.UTC(2020, 9, 3), 24],
                [Date.UTC(2020, 9, 4), 11],
                [Date.UTC(2020, 9, 5), 40],
                [Date.UTC(2020, 9, 6), 44],
                [Date.UTC(2020, 9, 7), 5],
                [Date.UTC(2020, 9, 8), 33],
                [Date.UTC(2020, 9, 9), 33],
                [Date.UTC(2020, 9, 10), 11],
                [Date.UTC(2020, 9, 11), 22],
                [Date.UTC(2020, 9, 12), 33],
                [Date.UTC(2020, 9, 13), 34],
                [Date.UTC(2020, 9, 14), 45],
                [Date.UTC(2020, 9, 15), 47],
                [Date.UTC(2020, 9, 16), 60],
                [Date.UTC(2020, 9, 17), 44],
                [Date.UTC(2020, 9, 18), 56],
                [Date.UTC(2020, 9, 19), 43],
                [Date.UTC(2020, 9, 20), 32],
                [Date.UTC(2020, 9, 21), 25],
                [Date.UTC(2020, 9, 22), 18],
                [Date.UTC(2020, 9, 23), 37],
                [Date.UTC(2020, 9, 24), 66],
                [Date.UTC(2020, 9, 25), 33],
                [Date.UTC(2020, 9, 26), 38],
                [Date.UTC(2020, 9, 27), 40],
              ],
            },
            {
              name: "Đồ ăn",
              //dashStyle: 'ShortDash',
              type: "spline",
              data: [
                [Date.UTC(2020, 9, 1), 12],
                [Date.UTC(2020, 9, 2), 23],
                [Date.UTC(2020, 9, 3), 14],
                [Date.UTC(2020, 9, 4), 27],
                [Date.UTC(2020, 9, 5), 17],
                [Date.UTC(2020, 9, 6), 11],
                [Date.UTC(2020, 9, 7), 11],
                [Date.UTC(2020, 9, 8), 10],
                [Date.UTC(2020, 9, 9), 9],
                [Date.UTC(2020, 9, 10), 11],
                [Date.UTC(2020, 9, 11), 17],
                [Date.UTC(2020, 9, 12), 16],
                [Date.UTC(2020, 9, 13), 18],
                [Date.UTC(2020, 9, 14), 14],
                [Date.UTC(2020, 9, 15), 25],
                [Date.UTC(2020, 9, 16), 32],
                [Date.UTC(2020, 9, 17), 11],
                [Date.UTC(2020, 9, 18), 15],
                [Date.UTC(2020, 9, 19), 16],
                [Date.UTC(2020, 9, 20), 18],
                [Date.UTC(2020, 9, 21), 22],
                [Date.UTC(2020, 9, 22), 35],
                [Date.UTC(2020, 9, 23), 32],
                [Date.UTC(2020, 9, 24), 11],
                [Date.UTC(2020, 9, 25), 15],
                [Date.UTC(2020, 9, 26), 18],
                [Date.UTC(2020, 9, 27), 16],
              ],
            },
            {
              name: "Sách",
              type: "spline",
              data: [
                [Date.UTC(2020, 9, 1), 5],
                [Date.UTC(2020, 9, 2), 7],
                [Date.UTC(2020, 9, 3), 12],
                [Date.UTC(2020, 9, 4), 20],
                [Date.UTC(2020, 9, 5), 13],
                [Date.UTC(2020, 9, 6), 0],
                [Date.UTC(2020, 9, 7), 2],
                [Date.UTC(2020, 9, 8), 3],
                [Date.UTC(2020, 9, 9), 6],
                [Date.UTC(2020, 9, 10), 6],
                [Date.UTC(2020, 9, 11), 2],
                [Date.UTC(2020, 9, 12), 1],
                [Date.UTC(2020, 9, 13), 0],
                [Date.UTC(2020, 9, 14), 20],
                [Date.UTC(2020, 9, 15), 10],
                [Date.UTC(2020, 9, 16), 5],
                [Date.UTC(2020, 9, 17), 3],
                [Date.UTC(2020, 9, 18), 4],
                [Date.UTC(2020, 9, 19), 1],
                [Date.UTC(2020, 9, 20), 2],
                [Date.UTC(2020, 9, 21), 6],
                [Date.UTC(2020, 9, 22), 3],
                [Date.UTC(2020, 9, 23), 3],
                [Date.UTC(2020, 9, 24), 4],
                [Date.UTC(2020, 9, 25), 2],
                [Date.UTC(2020, 9, 26), 1],
                [Date.UTC(2020, 9, 27), 0],
              ],
            },
          ],
        },
      },
    };
  },
};
</script>
