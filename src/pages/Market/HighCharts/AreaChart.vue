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
          description: "Area",
        },
        title: {
          style: {
            color: colors.textColor,
          },
          // Xem xét có cần thiết không rồi hãy cho vào.
          text: "",
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
          allowDecimals: false,
          labels: {
            style: {
              color: colors.textColor,
            },
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
            text: "Số lượng bán",
          },
          labels: {
            // formatter: function () {
            //     return this.value / 1000 + 'k';
            // }
            style: {
              color: colors.textColor,
            },
          },
          gridLineColor: colors.gridLineColor,
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
            data: [
              10,
              16,
              14,
              12,
              18,
              24,
              22,
              20,
              21,
              12,
              20,
              18,
              16,
              20,
              12,
              10,
              10,
              18,
              24,
              21,
              12,
              20,
              18,
              16,
              20,
              12,
              10,
              10,
              16,
              14,
              12,
              18,
              24,
              22,
              20,
              11,
              18,
              24,
              22,
              20,
              21,
              12,
              20,
              18,
              16,
              11,
              22,
              20,
              11,
              18,
              24,
              22,
              20,
              21,
            ],
          },
          {
            name: "USSR/Russia",
            data: [
              21,
              12,
              20,
              18,
              16,
              20,
              12,
              10,
              10,
              16,
              14,
              12,
              18,
              24,
              22,
              20,
              21,
              12,
              20,
              18,
              16,
              20,
              12,
              10,
              10,
              16,
              14,
              12,
              18,
              24,
              22,
              20,
              11,
              18,
              24,
              22,
              20,
              21,
              12,
              20,
              18,
              16,
              11,
              11,
              18,
              24,
              22,
              20,
              21,
              12,
              20,
              18,
              16,
              11,
            ],
          },
        ],
      },
    };
  },
};
</script>