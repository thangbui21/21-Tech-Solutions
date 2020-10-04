<template>
  <div>
    <apexchart type="heatmap" height="380" :options="chartOptions" :series="series"></apexchart>
  </div>
</template>

<script>
import VueApexCharts from "vue-apexcharts";
import config from "../../../../config";
const colors = config.colors;
let columnColors = [
  colors.blue,
  colors.green,
  colors.orange,
  colors.red,
  colors.default,
  colors.gray,
  colors.teal,
  colors.pink,
];

export default {
  name: "Chart",
  components: {
    apexcharts: VueApexCharts,
  },
  data: function () {
    return {
      chartOptions: {
        dataLabels: {
          enabled: true,
        },
        colors: colors.columnColors,
        xaxis: {
          type: "category",
        },
        title: {
          text: "",
        },
      },
      series: [
        {
          name: "Monday",
          data: this.generateData(7, {
            min: 0,
            max: 90,
          }),
        },
        {
          name: "Tuesday",
          data: this.generateData(7, {
            min: 0,
            max: 90,
          }),
        },
        {
          name: "Wednesday",
          data: this.generateData(7, {
            min: 0,
            max: 90,
          }),
        },
        {
          name: "Thursday",
          data: this.generateData(7, {
            min: 0,
            max: 90,
          }),
        },
        {
          name: "Friday",
          data: this.generateData(7, {
            min: 0,
            max: 90,
          }),
        },
        {
          name: "Saturday",
          data: this.generateData(7, {
            min: 0,
            max: 90,
          }),
        },
        {
          name: "Sunday",
          data: this.generateData(7, {
            min: 0,
            max: 90,
          }),
        },
      ],
    };
  },

  methods: {
    generateData(count, yrange) {
      var i = 0;
      var series = [];
      while (i < count) {
        var x = (i + 1).toString();
        var y =
          Math.floor(Math.random() * (yrange.max - yrange.min + 1)) +
          yrange.min;
        series.push({
          x: x,
          y: y,
        });
        i++;
      }
      return series;
    },
  },
};
</script>