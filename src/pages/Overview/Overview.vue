<template>
  <div class="visits-page">
    <h1 class="page-title">
      Overview &nbsp;
      <small>
        <small>Provide an overview of your store</small>
      </small>
    </h1>

    <!--Biểu đồ phân tích tổng quát-->
    <!--Từ từ rồi chỉnh lại cho ngon sau.-->
    <b-row>
      <b-col lg="8">
        <Widget
          title="<h5>Monthly<span class='fw-semi-bold'>&nbsp; Product Sales</span></h5>"
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
          title="<h5>Sales Plan for this week<span class='fw-semi-bold'>&nbsp;</span></h5>"
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
      <b-col lg="3" xs="12">
        <Widget
          title="<h6> BEST SELLING DRINK</h6>"
          close
          settings
          customHeader
        >
          <KP1 />
        </Widget>
      </b-col>

      <b-col lg="3" xs="12">
        <Widget
          title="<h6> BEST SELLING SNACK </h6>"
          close
          settings
          customHeader
        >
          <KP2 />
        </Widget>
      </b-col>
      <b-col lg="3" xs="12">
        <Widget title="<h6>BEST SELLING BOOK</h6>" close settings customHeader>
          <KP3 />
        </Widget>
      </b-col>
      <b-col lg="3" xs="12">
        <Widget title="<h6>BEST SELLING BOOK</h6>" close settings customHeader>
          <KP3 />
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
          title="<h6><span class='badge badge-danger'>New</span>&nbsp&nbsp  Message</h6>"
          refresh
          close
          customHeader
        >
          <Message />
        </Widget>
      </b-col>
      <b-col lg="4" xs="12" md="4">
        <Widget title="Today Task" refresh close customHeader>
          <TodayTask />
        </Widget>
      </b-col>
    </b-row>
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



export default {
  name: "Visits",
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
    return {};
  },
  methods: {},
  mounted() {},
};
</script>

<style src="./Overview.scss" lang="scss" />
