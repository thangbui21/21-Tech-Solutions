<template>
  <div class="dashboard-page">
    <h1 class="page-title">Analytics</h1>
    <b-row>
      <b-col lg="12" xs="12">
        <b-row>
          <!-- Total product -->
          <b-col lg="4" xs="6">
            <div class="pb-xlg h-100">
              <Widget class="h-100 mb-0" title="THỐNG KÊ" close>
                <TotalProduct />
              </Widget>
            </div>
          </b-col>

          <!-- Nhập hàng vào kho-->
          <b-col lg="4"  xs="6">
            <div class="pb-xlg h-100">
              <Widget class="h-100 mb-0" title="<h6>HÀNG NHẬP KHO</h6>" close settings customHeader>
                <Warehouse />
              </Widget>
            </div>
          </b-col>

          <!--Tổng hàng đã bán-->
          <b-col lg="4" xs="6">
            <div class="pb-xlg h-100">
              <Widget class="h-100 mb-0" title="<h6>HÀNG BÁN RA</h6>" close settings customHeader>
                <TotalSold />
              </Widget>
            </div>
          </b-col>
        </b-row>

        <!-- Biểu đồ -->
        <b-row>
          <b-col lg="8">
            <Widget
              title="<h5><span class='fw-semi-bold'>&nbsp;Sales </span>tháng này</h5>"
              close
              customHeader
              settings
              refresh
            >
            <p>Biến động về số lượng bán được của các mặt hàng </p>
              <LineChart />
            </Widget>
          </b-col>
          <b-col lg="4">
            <Widget title="Doanh thu từ các mặt hàng" close>
            <p>Số tiền đóng góp trên tổng số</p>
              <Breakdown />
            </Widget>
          </b-col>
        </b-row>

        <!--Chi tiết mặt hàng-->
        <!--Trả API về, không dùng file mock -->
        <b-row>
          <b-col xs="12" lg="6" xl="4" v-for="stat in mock.bigStat" :key="stat.id">
            <BigStat
              :product="stat.product"
              :color="stat.color"
              :total="stat.total"
              :registrations="stat.registrations"
              :bounce="stat.bounce"
            />
          </b-col>
        </b-row>

        <!--Bảng các mặt hàng -->
        <b-row>
          <b-col xs="12">
            <Widget
              title="<h5>Top 5 các mặt hàng<span class='fw-semi-bold'> Bán chạy nhất</span></h5>"
              bodyClass="widget-table-overflow"
              customHeader
            >
              <Table />
            </Widget>
          </b-col>
        </b-row>
      </b-col>
    </b-row>
   
  </div>
</template>

<script>
import Widget from "@/components/Widget/Widget";
import BigStat from "./BigStat/BigStat";
import mock from "./mock";
import Calendar from "../Overview/components/Calendar/Calendar";
import LineChart from "./HighCharts/LineChart";
import TotalProduct from "./TotalProduct/TotalProduct";
import Breakdown from "./Breakdown/Breakdown";
import Warehouse from "./Warehouse/Warehouse";
import TotalSold from "./TotalSold/TotalSold";
import Table from "./Table/Table";

import { Chart } from "highcharts-vue";

export default {
  name: "Dashboard",
  components: {
    Table,
    TotalSold,
    Warehouse,
    Breakdown,
    TotalProduct,
    LineChart,
    Calendar,
    Widget,
    BigStat,
    highcharts: Chart,
  },
  data() {
    return {
      mock,
    };
  },
  methods: {
    getRandomData() {
      const arr = [];

      for (let i = 0; i < 25; i += 1) {
        arr.push(Math.random().toFixed(1) * 10);
      }

      return arr;
    },
    getRevenueData() {
      const data = [];
      const seriesCount = 3;
      const accessories = ["SMX", "Direct", "Networks"];

      for (let i = 0; i < seriesCount; i += 1) {
        data.push({
          label: accessories[i],
          data: Math.floor(Math.random() * 100) + 1,
        });
      }

      return data;
    },
  },
  computed: {},
};
</script>

<style src="./Analytics.scss" lang="scss" />
