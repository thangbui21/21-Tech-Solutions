<template>
  <div class="dashboard-page">
    <h1 class="page-title">Dashboard</h1>
    <b-row>
      <!--Thuộc tính lg="10" Chỉnh size của cột /12-->
      <b-col lg="9" xs="12">
        <b-row>
          <b-col lg="3" sm="6" xs="12">
            <div class="pb-xlg h-100">
              <Widget class="h-100 mb-0" title="Total Product" close>
                <TotalProduct />
              </Widget>
            </div>
          </b-col>
          <b-col>
            <div class="pb-xlg h-100">
              <Widget class="h-100 mb-0" title="Total Product" close>
                <TotalProduct />
              </Widget>
            </div>
          </b-col>
          <!-- Tìm hiểu lỗi rồi thêm vào lại.
        <b-col lg="3" sm="6" xs="12">
            <div class="pb-xlg h-100">
                <Widget class="h-100 mb-0" title="Revenue Breakdown" close>
                    <highcharts :options="donut"></highcharts>
                </Widget>
            </div>
        </b-col>
          -->
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
          <b-col lg="3" sm="6" xs="12">
            <div >
                <!--
              <Widget class="h-100 mb-0" title="Server Overview" close>
                <div class="d-flex align-items-center mb-sm">
                  <p class="width-150">
                    <small>60% / 37°С / 3.3 Ghz</small>
                  </p>
                  <div style="width: calc(100% - 150px)">
                    <trend
                      :data="getRandomData()"
                      :gradient="[appConfig.colors.danger]"
                      :height="40"
                      stroke-width="4"
                      smooth
                    />
                  </div>
                </div>
                <div class="d-flex align-items-center mb-sm">
                  <p class="width-150">
                    <small>54% / 31°С / 3.3 Ghz</small>
                  </p>
                  <div style="width: calc(100% - 150px)">
                    <trend
                      :data="getRandomData()"
                      :gradient="[appConfig.colors.info]"
                      :height="40"
                      stroke-width="4"
                      smooth
                    />
                  </div>
                </div>
                <div class="d-flex align-items-center">
                  <p class="width-150">
                    <small>57% / 21°С / 3.3 Ghz</small>
                  </p>
                  <div style="width: calc(100% - 150px)">
                    <trend
                      :data="getRandomData()"
                      :gradient="[appConfig.colors.primary]"
                      :height="40"
                      stroke-width="4"
                      smooth
                    />
                  </div>
                </div>
              
              </Widget>
              -->
                      <Widget
          title="<h6> USERBASE GROWTH </h6>"
          close settings customHeader
        >
          <div class="stats-row">
            <div class="stat-item">
              <h6 class="name">Overall Growth</h6>
              <p class="value">76.38%</p>
            </div>
            <div class="stat-item">
              <h6 class="name">Montly</h6>
              <p class="value">10.38%</p>
            </div>
            <div class="stat-item">
              <h6 class="name">24h</h6>
              <p class="value">3.38%</p>
            </div>
          </div>
          <b-progress variant="success" :value="60"
            :max="100" class="progress-xs" />
          <p>
            <small>
              <span class="circle bg-primary text-white">
                <i class="la la-angle-up" />
              </span>
            </small>
            <span class="fw-semi-bold">&nbsp;17% higher</span>
            &nbsp;than last month
          </p>
        </Widget>
            </div>
          </b-col>
        </b-row>
        <b-row>
          <b-col>
            <LineChart />
          </b-col>
        </b-row>
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
        <b-row>
          <b-col xs="12">
            <Widget
              title="<h5>Support <span class='fw-semi-bold'>Requests</span></h5>"
              bodyClass="widget-table-overflow"
              customHeader
            >
              <div class="table-responsive">
                <table class="table table-striped table-lg mb-0 requests-table">
                  <thead>
                    <tr class="text-muted">
                      <th>NAME</th>
                      <th>EMAIL</th>
                      <th>PRODUCT</th>
                      <th>PRICE</th>
                      <th>DATE</th>
                      <th>CITY</th>
                      <th>STATUS</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="row in mock.table" :key="row.id">
                      <td>{{row.name}}</td>
                      <td>{{row.email}}</td>
                      <td>{{row.product}}</td>
                      <td>{{row.price}}</td>
                      <td>{{row.date}}</td>
                      <td>{{row.city}}</td>
                      <td>
                        <b-button
                          :variant="row.status === 'Pending'
                          ? 'success'
                          : row.status === 'Declined' ? 'danger' : 'info'"
                          class="p-1 px-3 btn-xs"
                        >{{row.status}}</b-button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </Widget>
          </b-col>
        </b-row>
      </b-col>
      <b-col lg="3" xs="12">
        <Widget title="<h6>Calendar</h6" bodyClass="p-0" settings close customHeader>
          <Calendar />
          <div class="list-group fs-mini">
            <a href="#" class="list-group-item text-ellipsis">
              <span class="badge badge-pill bg-primary float-right">6:45</span>
              Weed out the flower bed
            </a>
            <a href="#" class="list-group-item text-ellipsis">
              <span class="badge badge-pill badge-success float-right">9:41</span>
              Stop world water pollution
            </a>
          </div>
        </Widget>
        <div>
          <Widget close>
            <TotalProduct />
          </Widget>
        </div>

        <Widget title="Visits Today" close>
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

import { Chart } from "highcharts-vue";

export default {
  name: "Dashboard",
  components: {
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
