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
          text: "Browser market shares in January, 2018",
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
            name: "Brands",
            colorByPoint: true,
            data: [
              {
                name: "Chrome",
                y: 61.41,
                //sliced: true,
                //selected: true,
              },
              {
                name: "Internet Explorer",
                y: 11.84,
              },
              {
                name: "Firefox",
                y: 10.85,
              },
              {
                name: "Edge",
                y: 4.67,
              },
              {
                name: "Safari",
                y: 4.18,
              },
              {
                name: "Other",
                y: 7.05,
              },
            ],
          },
        ],
      },
      chartOptions2: {
        chart: {
          type: "variablepie",
          backgroundColor: "transparent",
        },
        title: {
          style: {
            color: colors.textColor,
          },
          text: "Countries compared by population density and total area.",
        },
        exporting: {
          enabled: false,
        },
        credits: {
          enabled: false,
        },
        tooltip: {
          headerFormat: "",
          pointFormat:
            '<span style="color:{point.color}">\u25CF</span> <b> {point.name}</b><br/>' +
            "Area (square km): <b>{point.y}</b><br/>" +
            "Population density (people per square km): <b>{point.z}</b><br/>",
        },
        series: [
          {
            minPointSize: 10,
            innerSize: "20%",
            zMin: 0,
            name: "countries",
            data: [
              {
                name: "Spain",
                y: 505370,
                z: 92.9,
              },
              {
                name: "France",
                y: 551500,
                z: 118.7,
              },
              {
                name: "Poland",
                y: 312685,
                z: 124.6,
              },
              {
                name: "Czech Republic",
                y: 78867,
                z: 137.5,
              },
              {
                name: "Italy",
                y: 301340,
                z: 201.8,
              },
              {
                name: "Switzerland",
                y: 41277,
                z: 214.5,
              },
              {
                name: "Germany",
                y: 357022,
                z: 235.6,
              },
            ],
          },
        ],
      },

      chartOptions1: {
        chart: {
          type: "pie",
          backgroundColor: "transparent",
        },
        colors: [colors.purple, colors.blue, colors.red],
        title: {
          text: "First Chart",
          style: {
            color: colors.textColor,
          },
        },

        credits: {
          enabled: false,
        },

        series: [
          {
            colorByPoint: true,
            data: [
              ["Apples", 5],
              ["Pears", 9],
              ["Oranges", 2],
            ],
          },
        ],

        exporting: {
          enabled: false, // hide button
        },
      },
    };
  },
};
</script>