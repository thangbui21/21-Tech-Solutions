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
  name: "LineChart",
  components: {
    highcharts: Chart,
  },
  data() {
    return {
      chartOptions: {
        chart: {
            type: 'spline',
          backgroundColor: "transparent",
        },
        title: {
          text: "",
        },

        subtitle: {
          text: "",
        },

        yAxis: {
          title: {
            text: "",
          },
          gridLineColor: colors.gridLineColor,
        },

        xAxis: {
          accessibility: {
            rangeDescription: "Range: 2010 to 2017",
          },
          gridLineColor: colors.gridLineColor,
        },

        legend: {
          layout: "vertical",
          align: "right",
          verticalAlign: "middle",
        },
        plotOptions: {
          series: {
            label: {
              connectorAllowed: false,
            },
            pointStart: 2010,
          },
        },

        series: [
          {
            name: "Installation",
            type: 'spline',
            data: [43934, 52503, 57177, 69658, 97031, 119931, 137133, 154175],
          },
          {
            name: "Manufacturing",
            type: 'spline',
            data: [24916, 24064, 29742, 29851, 32490, 30282, 38121, 40434],
          },
          {
            name: "Sales & Distribution",
            type: 'spline',
            data: [11744, 17722, 16005, 19771, 20185, 24377, 32147, 39387],
          },
          {
            name: "Project Development",
            type: 'spline',
            data: [null, null, 7988, 12169, 15112, 22452, 34400, 34227],
          },
          {
            name: "Other",
            type: 'spline',
            data: [12908, 5948, 8105, 11248, 8989, 11816, 18274, 18111],
          },
        ],

        // responsive: {
        //   rules: [
        //     {
        //       condition: {
        //         maxWidth: 500,
        //       },
        //       chartOptions: {
        //         legend: {
        //           layout: "horizontal",
        //           align: "center",
        //           verticalAlign: "bottom",
        //         },
        //       },
        //     },
        //   ],
        // },

      },
    };
  },
};
</script>