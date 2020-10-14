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
  //props:["chartOptions"],
  components: {
    highcharts: Chart,
  },
  data() {
    return {
      chartOptions: {
        chart: {
          type: "column",
          backgroundColor: "transparent",
        },

        title: {
          text: "Sales theo loại mặt hàng",
          style: {
            color: colors.textColor,
          },
        },

        subtitle: {
          text: "",
        },
        exporting: {
          enabled: false,
        },
        credits: {
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
        xAxis: {
          labels: {
            style: {
              color: colors.textColor,
            },
          },
          gridLineColor: colors.gridLineColor,
          categories: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
          crosshair: true,
        },
        yAxis: {
          labels: {
            style: {
              color: colors.textColor,
            },
          },
          gridLineColor: colors.gridLineColor,
          min: 0,
          title: {
            text: "",
          },
        },
        tooltip: {
          headerFormat:
            '<span style="font-size:10px">{point.key}</span><table>',
          pointFormat:
            '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
            '<td style="padding:0"><b>{point.y:.1f} mm</b></td></tr>',
          footerFormat: "</table>",
          shared: true,
          useHTML: true,
        },
        plotOptions: {
          column: {
            pointPadding: 0.2,
            borderWidth: 0,
          },
        },
        series: [
          {
            name: "Trà Chanh",
            data: [49.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6],
          },
          {
            name: "Trà Đào",
            data: [83.6, 78.8, 98.5, 93.4, 106.0, 84.5, 105.0],
          },
          {
            name: "Vối Đá",
            data: [48.9, 38.8, 39.3, 41.4, 47.0, 48.3, 59.0],
          },
          {
            name: "Red Bull",
            data: [42.4, 33.2, 34.5, 39.7, 52.6, 75.5, 57.4],
          },
          {
            name: "Nước sấu",
            data: [42.4, 33.2, 34.5, 39.7, 52.6, 75.5, 57.4],
          },
          {
            name: "Trà xanh",
            data: [42.4, 33.2, 34.5, 39.7, 52.6, 75.5, 57.4],
          }
        ],
      },
    };
  },
};
</script>