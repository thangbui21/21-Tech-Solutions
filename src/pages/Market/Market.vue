<template>
  <div class="dashboard-page">
    <h1 class="page-title">
      Market &nbsp;
      <small>
        <small>Thị trường tương lai</small>
      </small>
    </h1>
    <b-row>
      <b-col lg="4" xs="6">
        <Widget title="THỐNG KÊ" close settings customHeader
          ><Conclusions />
        </Widget>

        <div class="pb-xlg h-200">
          <Widget class="h-200 mb-0" title="App Perfomance" close>
            <p class="text-muted d-flex flex-wrap">
              <small class="mr-lg d-flex align-items-center">
                <span
                  class="circle bg-danger text-danger mr-xs"
                  style="font-size: 4px"
                >
                  .
                </span>
                Tháng này
              </small>
              <small class="mr-lg d-flex align-items-center">
                <span
                  class="circle bg-primary text-primary mr-xs"
                  style="font-size: 4px"
                >
                  .
                </span>
                Tháng trước
              </small>
            </p>
            <h6>Đồ uống</h6>
            <b-progress
              class="mb-xs"
              style="height: 5px"
              variant="danger"
              :value="60"
              :max="100"
            />
            <b-progress
              class="mb"
              style="height: 5px"
              variant="primary"
              :value="35"
              :max="100"
            />
            <h6>Đồ ăn</h6>
            <b-progress
              class="mb-xs"
              style="height: 5px"
              variant="danger"
              :value="40"
              :max="100"
            />
            <b-progress
              style="height: 5px"
              variant="primary"
              :value="55"
              :max="100"
            />
            <h6>Sách</h6>
            <b-progress
              class="mb-xs"
              style="height: 5px"
              variant="danger"
              :value="40"
              :max="100"
            />
            <b-progress
              style="height: 5px"
              variant="primary"
              :value="55"
              :max="100"
            />
          </Widget>
        </div>
      </b-col>

      <!-- <Widget title="THỐNG KÊ"><Analysis /> </Widget> -->

      <b-col lg="8" xs="6">
        <Widget
          title="<h5><span class='fw-semi-bold'>&nbsp;Sales </span>tháng này</h5>"
          close
          customHeader
          settings
          refresh
        >
          <p>Biến động về số lượng bán được của các mặt hàng</p>
          <AreaChart
        /></Widget>
      </b-col>
    </b-row>

    <b-row>
      <b-col lg="8" xs="8">
        <Widget
          title="<h5><span class='fw-semi-bold'>&nbsp;Sales </span>tháng này</h5>"
          close
          customHeader
          settings
          refresh
        >
          <p>Biến động về số lượng bán được của các mặt hàng</p>
          <Compare
        /></Widget>
      </b-col>
      <b-col>
        <Widget
          title="<h5><span class='fw-semi-bold'>&nbsp;Sales </span>tháng này</h5>"
          close
          customHeader
          settings
          refresh
        >
          <p>Biến động về số lượng bán được của các mặt hàng</p>
          <Donut
        /></Widget>
      </b-col>
    </b-row>

    <b-row>
      <b-col xs="12">
        <Widget
          title="<h5>Support <span class='fw-semi-bold'>Requests</span></h5>"
          bodyClass="widget-table-overflow"
          customHeader
        >
          <Response />
        </Widget>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import Widget from "@/components/Widget/Widget";
import { Chart } from "highcharts-vue";
import Vue from "vue";
import AreaChart from "./HighCharts/AreaChart";
import Donut from "./HighCharts/Donut";
import Conclusions from "./Conclusions/Conclusions";
import Compare from "./HighCharts/Compare";
import Analysis from "./Conclusions/Analysis";
import Response from "./Conclusions/Response";
export default {
  name: "Market",
  components: {
    Widget,
    highcharts: Chart,
    AreaChart,
    Donut,
    Conclusions,
    Compare,
    Analysis,
    Response,
  },
  data() {
    return {};
  },
  methods: {
    getRandomData() {
      const arr = [];
      for (let i = 0; i < 25; i += 1) {
        arr.push(Math.random().toFixed(1) * 10);
      }
      return arr;
    },
  },
  computed: {},
};
</script>

<style src="./Market.scss" lang="scss" />
