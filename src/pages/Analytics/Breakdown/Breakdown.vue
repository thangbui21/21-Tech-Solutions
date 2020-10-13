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
          height: 350,
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
        exporting: {
          enabled: false,
        },
        tooltip: {
          enabled: false,
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
        series: [
          {
            data: [
              {
                name: "Trà",
                y: 23,
              },
              {
                name: "Nước ngọt",
                y: 8,
              },
              {
                name: "Cà phê",
                y: 11,
              },
              {
                name: "Đồ ăn vặt",
                y: 11,
              },
              {
                name: "Hoa quả",
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