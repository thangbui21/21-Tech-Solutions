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
import * as Variablepie from "highcharts/modules/variable-pie";
exporting(Highcharts);
exportData(Highcharts);
Variablepie(Highcharts);

import config from "../../../config";
const colors = config.colors;

export default {
  name: "PieChart",
  components: {
    highcharts: Chart,
  },
  //props:["chartOptions"],
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
          style: {
            color: colors.textColor,
          },
          text: "Doanh thu đến từ các loại mặt hàng",
        },
        tooltip: {
          pointFormat: "{series.name}: <b>{point.percentage:.1f}%</b>",
        },
        exporting: {
          enabled: false,
        },
        credits: {
          enabled: false,
        },
        accessibility: {
          point: {
            valueSuffix: "%",
          },
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

        plotOptions: {
          pie: {
            allowPointSelect: true,
            cursor: "pointer",
            dataLabels: {
              enabled: false,
            },
            showInLegend: true,
          },
        },
        series: [
          {
            name: "Doanh thu",
            colorByPoint: true,
            data: [
              {
                name: "Đồ uống",
                y: 61.41,
                //sliced: true,
                //selected: true,
              },
              {
                name: "Đồ ăn",
                y: 30.20,
              },
              {
                name: "Sách",
                y: 4.85,
              },
              {
                name: "Đồ chơi",
                y: 3.54,
              },
              
            ],
          },
        ],
      },
     };
  },
};
</script>