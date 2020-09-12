<template>
  <div>
    <Widget
      title="<h5>Biểu đồ <span class='fw-semi-bold'>đường</span></h5>"
      close
      collapse
      customHeader
    >
      <highcharts :options="cd.highcharts.mixed"></highcharts>

      <b-row class="mt">
        <b-col md xs="12">
          <div class="stats-row">
            <div class="stat-item">
              <p class="value5 fw-thin">{{countData1()}}</p>
              <h6 class="name text-muted m-0 fs-mini">Total</h6>
            </div>
            <div class="stat-item stat-item-mini-chart">
              <Sparklines
                :data="sparklineData.series1"
                :options="sparklineData.options1"
                :width="80"
                :height="25"
              ></Sparklines>
            </div>
          </div>
        </b-col>
        <b-col md="3" xs="12">
          <div class="stats-row">
            <div class="stat-item">
              <p class="value5 fw-thin">{{countData2()}}</p>
              <h6 class="name text-muted m-0 fs-mini">Total</h6>
            </div>
            <div class="stat-item stat-item-mini-chart">
              <Sparklines
                :data="sparklineData.series2"
                :options="sparklineData.options2"
                :width="80"
                :height="25"
              ></Sparklines>
            </div>
          </div>
        </b-col>
        <b-col md="3" xs="12">
          <div class="stats-row">
            <div class="stat-item">
              <p class="value5 fw-thin">567</p>
              <h6 class="name text-muted m-0 fs-mini">Total</h6>
            </div>
            <div class="stat-item stat-item-mini-chart">
              <Sparklines
                :data="sparklineData.series3"
                :options="sparklineData.options3"
                :width="80"
                :height="25"
              ></Sparklines>
            </div>
          </div>
        </b-col>
        <b-col md="3" xs="12">
          <div class="stats-row">
            <div class="stat-item">
              <p class="value5 fw-thin">567</p>
              <h6 class="name text-muted m-0 fs-mini">Total</h6>
            </div>
            <div class="stat-item stat-item-mini-chart">
              <Sparklines
                :data="sparklineData.series4"
                :options="sparklineData.options4"
                :width="80"
                :height="25"
              ></Sparklines>
            </div>
          </div>
        </b-col>
      </b-row>
    </Widget>
  </div>
</template>

<script>
import Widget from "@/components/Widget/Widget";
import { chartData, liveChart, liveChartInterval } from "./mock";

import ECharts from "vue-echarts/components/ECharts";
import "echarts/lib/chart/line";
import "echarts/lib/chart/themeRiver";
import "echarts/lib/chart/pie";
import "echarts/lib/component/tooltip";
import "echarts/lib/component/legend";

import Highcharts from "highcharts";
import exporting from "highcharts/modules/exporting";
import exportData from "highcharts/modules/export-data";

exporting(Highcharts);
exportData(Highcharts);

import { Chart } from "highcharts-vue";
import Sparklines from "../../../components/Sparklines/Sparklines";

export default {
  name: "Charts",
  components: {
    Widget,
    echart: ECharts,
    highcharts: Chart,
    Sparklines,
  },
  data() {
    return {
      cd: chartData,
      ld: liveChart,
      initEchartsOptions: {
        renderer: "canvas",
      },
      total1: 0,
    };
  },
  methods: {
    // Tính tổng.
    countData1() {
      var data1 = [12, 66, 24, 36, 23, 56, 75, 100, 23, 56, 75, 100];
      var total = 0;
      for (var i in data1) {
        total += data1[i];
      }
      return total;
    },
    countData2() {
      var data1 = [1, 7, 3, 5, 7, 8, 36, 23, 56, 75, 100, 23];
      var total = 0;
      for (var i in data1) {
        total += data1[i];
      }
      return total;
    },
    countData3() {
      var data1 = [12, 66, 24, 36, 23, 56, 75, 100, 23, 56, 75, 100];
      var total = 0;
      for (var i in data1) {
        total += data1[i];
      }
      return total;
    },
    countData4() {
      var data1 = [12, 66, 24, 36, 23, 56, 75, 100, 23, 56, 75, 100];
      var total = 0;
      for (var i in data1) {
        total += data1[i];
      }
      return total;
    },
  },
  computed: {
    sparklineData() {
      return {
        series1: [
          {
            data: [12, 66, 24, 36, 23, 56, 75, 100, 23, 56, 75, 100],
          },
        ],
        series2: [
          {
            data: [1, 7, 3, 5, 7, 8, 36, 23, 56, 75, 100, 23],
          },
        ],
        series3: [
          {
            data: [1, 7, 3, 5, 7, 8],
          },
        ],
        series4: [
          {
            data: [1, 7, 3, 5, 7, 8],
          },
        ],
        options1: {
          colors: [this.appConfig.colors.green],
          plotOptions: {
            bar: {
              columnWidth: "50%",
            },
          },
        },
        options2: {
          colors: [this.appConfig.colors.red],
          plotOptions: {
            bar: {
              columnWidth: "50%",
            },
          },
        },
        options3: {
          colors: [this.appConfig.colors.blue],
          plotOptions: {
            bar: {
              columnWidth: "50%",
            },
          },
        },
        options4: {
          colors: [this.appConfig.colors.purple],
          plotOptions: {
            bar: {
              columnWidth: "50%",
            },
          },
        },
      };
    },
  },
  beforeDestroy() {
    clearInterval(liveChartInterval);
  },
};
</script>
