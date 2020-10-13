<template>
  <div>
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
          title="<h5><span class='fw-semi-bold'>Sales</span> hàng tháng</h5>"
          close
          customHeader
          settings
          refresh
        >
          <p>Những loại mặt hàng chính trong cửa hàng</p>
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
          <Plan />
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
                :value=" Math.abs( ((col.monthly - col.lastMonth)/col.lastMonth ) * 100)"
                :max="100"
                class="progress-xs"
              />
            </div>
            <p v-if="col.monthly - col.lastMonth > 0">
              <small>
                <span class="circle bg-primary text-white">
                  <i class="la la-angle-up" />
                </span>
              </small>
              <span class="fw-semi-bold">
                Cao hơn &nbsp;{{
                  Math.floor(
                    ((col.monthly - col.lastMonth) / col.monthly) * 100
                  )
                }}
                %
              </span>
              &nbsp;so với tháng trước
            </p>

            <p v-else>
              <small>
                <span class="circle bg-primary text-white">
                  <i class="la la-angle-down" />
                </span>
              </small>
              <span class="fw-semi-bold">
                Thấp hơn&nbsp;{{
                  Math.floor(
                    ((col.monthly - col.lastMonth) / col.monthly) * 100
                  ) * -1
                }}% 
              </span>
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
          <div style="text-align: center; margin-top: 10px"><p>Xãy xử lý công việc đúng thời gian.</P></div>
          
        </Widget>
      </b-col>
      <b-col lg="4" xs="12">
        <Widget
          title="<h6><span class='badge badge-danger'>New</span>&nbsp&nbsp <b>Tin nhắn</b></h6>"
          refresh
          close
          customHeader
        >
          <Message />
        </Widget>
      </b-col>
      <b-col lg="4" xs="12">
        <Widget
          title="<h6><span class='badge badge-success'>Today task</span>&nbsp&nbsp <b>Mục tiêu hôm nay</b></h6>"
          refresh
          close
          customHeader
        >
          <TodayTask />
        </Widget>
      </b-col>
    </b-row>

    <!-- <div>{{ info }}</div> -->
  </div>
</template>

<script>
import Vue from "vue";
import Widget from "@/components/Widget/Widget";
import Calendar from "./components/Calendar/Calendar";
import AnimatedNumber from "animated-number-vue";
import Plan from "./Plan/Plan";
import Message from "./Message/Message";
import Charts from "./Charts/Charts";
import TodayTask from "./TodayTask/TodayTask";
import UserService from "../../services/user.service";

export default {
  name: "Overview",
  components: {
    Widget,
    Calendar,
    AnimatedNumber,
    Plan,
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
