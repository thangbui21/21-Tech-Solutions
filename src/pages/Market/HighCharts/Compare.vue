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
  name: "Compare",
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
          style: {
            color: colors.textColor,
          },
          text: "Efficiency Optimization by Branch",
        },
        exporting: {
          enabled: false,
        },
        credits: {
          enabled: false,
        },
        xAxis: {
          categories: ["Đồ uống", "Đồ ăn", "Sách"],
          labels: {
            style: {
              color: colors.textColor,
            },
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
        yAxis: [
          {
            labels: {
              style: {
                color: colors.textColor,
              },
            },
            gridLineColor: colors.gridLineColor,
            min: 0,
            title: {
              text: "Số lượng bán ra",
              style: {
                color: colors.textColor,
              },
            },
          },
          {
            labels: {
              style: {
                color: colors.textColor,
              },
            },
            gridLineColor: colors.gridLineColor,
            title: {
              text: "Lợi nhuận thu về (VND)",
              style: {
                color: colors.textColor,
              },
            },
            opposite: true,
          },
        ],
        tooltip: {
          shared: true,
        },
        plotOptions: {
          column: {
            grouping: false,
            shadow: false,
            borderWidth: 0,
          },
        },
        series: [
          {
            name: "(Guest) This week",
            color: "rgba(165,170,217,1)",
            data: [150, 73, 20],
            pointPadding: 0.3,
            pointPlacement: -0.2,
          },
          {
            name: "(Guest) Last week",
            color: "rgba(126,86,134,.9)",
            data: [140, 90, 40],
            pointPadding: 0.4,
            pointPlacement: -0.2,
          },
          {
            name: "(Another user) This week",
            color: "rgba(248,161,63,1)",
            data: [183.6, 178.8, 198.5],
            tooltip: {
              valuePrefix: "$",
              valueSuffix: " M",
            },
            pointPadding: 0.3,
            pointPlacement: 0.2,
            yAxis: 1,
          },
          {
            name: "(Another user) Lastweek",
            color: "rgba(186,60,61,.9)",
            data: [203.6, 198.8, 208.5],
            tooltip: {
              valuePrefix: "",
              valueSuffix: "VND",
            },
            pointPadding: 0.4,
            pointPlacement: 0.2,
            yAxis: 1,
          },
        ],
      },
    };
  },
};
</script>