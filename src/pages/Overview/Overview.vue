<template>
  <div class="visits-page">
    <h1 class="page-title">
      Tổng Quan &nbsp;
      <small>
        <small>Nơi cung cấp một góc nhìn chung nhất</small>
      </small>
    </h1>

    <!--Biểu đồ phân tích tổng quát-->
    <!--Từ từ rồi chỉnh lại cho ngon sau.-->
    <b-row>
      <b-col lg="8">
        <Widget
          title="<h5><span class='fw-semi-bold'>&nbsp; Sales</span> hàng tháng</h5>"
          close
          customHeader
          settings
          refresh
        >
          <Charts />
          <!-- <MixedCharts /> -->
        </Widget>
      </b-col>

      <!--Kế hoạch, mục tiêu tăng trưởng-->
      <b-col lg="4">
        <Widget
          class="bg-transparent"
          title="<h5>Kế hoạch bán hàng trong tuần<span class='fw-semi-bold'>&nbsp;</span></h5>"
          settings
          refresh
          close
          customHeader
        >
          <SalesPlan />
        </Widget>
      </b-col>
    </b-row>

    <b-row>
      <b-col lg="3" xs="6" v-for="(col, index) in info" v-bind:key="index">
        <Widget title="<h6> BÁN CHẠY </h6>" close settings customHeader>
          <div>
            <h6>{{ col.productName }}</h6>
            <div class="stats-row">
              <div class="stat-item">
                <h6 class="name">Tổng số</h6>
                <p class="value">{{ col.overallValues }}</p>
              </div>
              <div class="stat-item">
                <h6 class="name">Hàng tháng</h6>
                <p class="value">{{ col.monthly }}</p>
              </div>
              <div class="stat-item">
                <h6 class="name">24h</h6>
                <p class="value">{{ col.daily }}</p>
              </div>
            </div>

            <div>
              <b-progress
              :variant="col.color"
              :value="(col.lastMonth / col.monthly) * 100"
              :max="100"
              class="progress-xs"
            />

            </div>
            <p>
              <small>
                <span class="circle bg-primary text-white">
                  <i class="la la-angle-up" />
                </span>
              </small>
              <span class="fw-semi-bold"> Cao hơn &nbsp;{{Math.floor(((col.monthly - col.lastMonth)/(col.monthly))*100) }} % </span>
              &nbsp;so với tháng trước
            </p>
            
          </div>

          
        </Widget>
      </b-col>
    </b-row>

    <!--Các ý tưởng-->

    <b-row>
      <b-col lg="4" xs="12">
        <Widget
          title="<h6>Lịch</h6"
          bodyClass="p-0"
          settings
          close
          customHeader
        >
          <Calendar />
        </Widget>
      </b-col>
      <b-col lg="4" xs="12">
        <Widget
          title="<h6><span class='badge badge-danger'>New</span>&nbsp&nbsp Tin nhắn</h6>"
          refresh
          close
          customHeader
        >
          <Message />
        </Widget>
      </b-col>
      <b-col lg="4" xs="12">
        <Widget title="Mục tiêu hôm nay" refresh close customHeader>
          <TodayTask />
        </Widget>
      </b-col>
    </b-row>

    <div>{{ info }}</div>
  </div>
</template>

<script>
import Vue from "vue";
import Widget from "@/components/Widget/Widget";
import Map from "./components/Map/Map";
import Calendar from "./components/Calendar/Calendar";
import AreaChart from "./components/AreaChart/AreaChart";
import AnimatedNumber from "animated-number-vue";
import MixedCharts from "./MixedCharts/MixedCharts";
import SalesPlan from "./SalesPlan/SalesPlan";
import KP1 from "./KP1/KP1";
import KP2 from "./KP2/KP2";
import KP3 from "./KP3/KP3";
import Message from "./Message/Message";
import Charts from "./Charts/Charts";
import TodayTask from "./TodayTask/TodayTask";
import UserService from "../../services/user.service";

export default {
  name: "Overview",
  components: {
    Widget,
    Map,
    Calendar,
    AreaChart,
    AnimatedNumber,
    MixedCharts,
    SalesPlan,
    KP1,
    KP2,
    KP3,
    Message,
    Charts,
    TodayTask,
  },
  data() {
    return {
      info: null,
      colors: [
        { variant: "primary" },
        { variant: "danger" },
        { variant: "success" },
        { variant: "warning" },
      ],
    };
  },
  methods: {
    calColumnSize: function (noCol) {
      return Math.floor(12 / noCol);
    },

    getBestSelling() {
      UserService.get("/api/best-selling").then((response) => {
        this.info = response.data;
      });
    },
  },
  created() {
    this.getBestSelling();
  },
};
</script>

<style src="./Overview.scss" lang="scss" />
