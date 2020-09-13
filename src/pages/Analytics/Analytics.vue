<template>
  <div class="dashboard-page">
    <h1 class="page-title">Analytics</h1>
    <b-row>
      <!--Thuộc tính lg="10" Chỉnh size của cột /12-->
      <b-col lg="9" xs="12">
        <b-row>
          <!-- Total product -->
          <b-col lg="4" sm="4" xs="12">
            <div class="pb-xlg h-100">
              <Widget class="h-100 mb-0" title="THỐNG KÊ" close>
                <TotalProduct />
              </Widget>
            </div>
          </b-col>

          <!--
          <b-col lg="3" sm="6" xs="12">
            <div class="pb-xlg h-100">
              <Widget class="h-100 mb-0" title="App Perfomance" close>
                <p class="text-muted d-flex flex-wrap">
                  <small class="mr-lg d-flex align-items-center">
                    <span class="circle bg-danger text-danger mr-xs" style="font-size: 4px;">.</span>
                    This Period
                  </small>
                  <small class="mr-lg d-flex align-items-center">
                    <span class="circle bg-primary text-primary mr-xs" style="font-size: 4px;">.</span>
                    Last Period
                  </small>
                </p>
                <h6>SDK</h6>
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
                <h6>Integration</h6>
                <b-progress
                  class="mb-xs"
                  style="height: 5px"
                  variant="danger"
                  :value="40"
                  :max="100"
                />
                <b-progress style="height: 5px" variant="primary" :value="55" :max="100" />
              </Widget>
            </div>
          </b-col>
          
          <! Nhập hàng vào kho-->
          <b-col lg="4" sm="4" xs="12">
            <div class="pb-xlg h-100">
              <Widget class="h-100 mb-0" title="<h6>HÀNG NHẬP KHO</h6>" close settings customHeader>
                <Warehouse />
              </Widget>
            </div>
          </b-col>

          <!--Tổng hàng đã bán-->
          <b-col lg="4" sm="4" xs="12">
            <div class="pb-xlg h-100">
              <Widget class="h-100 mb-0" title="<h6>HÀNG BÁN RA</h6>" close settings customHeader>
                <TotalSold />
              </Widget>
            </div>
          </b-col>
        </b-row>

        <!-- Biểu đồ -->
        <b-row>
          <b-col xs="8" sm="8" lg="8" xl="8">
            <LineChart />
          </b-col>
          <b-col xs="12" md="4" sm="4" lg="4" xl="4">
            <Widget title="Doanh thu từ các mặt hàng" close>
              <Breakdown />
            </Widget>
          </b-col>
        </b-row>

        <!--Chi tiết mặt hàng-->
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
              title="<h5>Support <span class='fw-semi-bold'>Requests</span></h5>"
              bodyClass="widget-table-overflow"
              customHeader
            >
              <Table />
            </Widget>
          </b-col>
        </b-row>
      </b-col>

      <!-- -->
      <b-col lg="3" xs="12">
        <Widget title="<h6>Calendar</h6" bodyClass="p-0" settings close customHeader>
          <Calendar />
        </Widget>

        <Widget title="Doanh thu từ các mặt hàng" close>
          <Breakdown />
        </Widget>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import Widget from "@/components/Widget/Widget";
import BigStat from "./BigStat/BigStat";
import mock from "./mock";
import Calendar from "../Visits/components/Calendar/Calendar";
import ApexCharts from "./ApexCharts/ApexCharts";
import MixedApexCharts from "./ApexCharts/MixedApexCharts";
import MixedLineColumn from "./ApexCharts/MixedLineColumn";
import LineChart from "./HighCharts/LineChart";
import TotalProduct from "./TotalProduct/TotalProduct";
import Breakdown from "./Breakdown/Breakdown";
import Target from "./Target/Target";
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
    Target,
    Breakdown,
    TotalProduct,
    LineChart,
    MixedLineColumn,
    MixedApexCharts,
    ApexCharts,
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
  computed: {
    donut() {
      let revenueData = this.getRevenueData();
      let { danger, info, primary } = this.appConfig.colors;
      let series = [
        {
          name: "Revenue",
          data: revenueData.map((s) => {
            return {
              name: s.label,
              y: s.data,
            };
          }),
        },
      ];
      return {
        chart: {
          type: "pie",
          height: 120,
        },
        credits: {
          enabled: false,
        },
        title: false,
        plotOptions: {
          pie: {
            dataLabels: {
              enabled: false,
            },
            borderColor: null,
            showInLegend: true,
            innerSize: 60,
            size: 100,
            states: {
              hover: {
                halo: {
                  size: 1,
                },
              },
            },
          },
        },
        colors: [danger, info, primary],
        legend: {
          align: "right",
          verticalAlign: "middle",
          layout: "vertical",
          itemStyle: {
            color: "#495057",
            fontWeight: 100,
            fontFamily: "Montserrat",
          },
          itemMarginBottom: 5,
          symbolRadius: 0,
        },
        exporting: {
          enabled: false,
        },
        series,
      };
    },
  },
};
</script>

<style src="./Analytics.scss" lang="scss" />
