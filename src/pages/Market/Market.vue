<template>
  <div class="dashboard-page">
    <h1 class="page-title">Analytics</h1>
    <b-row>
      <b-col lg="4" xs="6">
        <Widget><Conclusions /> </Widget>
        <Widget><Analysis /> </Widget>
        
      </b-col>


      <b-col lg="8" xs="6">
        <Widget><AreaChart /></Widget>
      </b-col>
    </b-row>

    <b-row>
    <b-col lg="8" xs="8">
        <Widget><Compare /></Widget>

    </b-col>
    <b-col>
        <Widget><Donut /></Widget>
    </b-col> 
    </b-row>

    <b-row>
    <b-col lg="12" xs="6"><Widget title="<h6><span class='badge badge-danger'>Important</span>&nbsp&nbsp Conclutions</h6>"
          refresh
          close
          customHeader><Footer /></Widget></b-col>
        
    </b-row>

<!--
    <b-row>
      <Widget><StackedAndGrouped /></Widget>
    </b-row>

    <b-row>
      <Widget><Radius /></Widget>
    </b-row>
    <b-row>
      <Widget><Donut /></Widget>
    </b-row>
    <b-row>
      <Widget><ColumnStacked /></Widget>
    </b-row>
        <b-row>
      <Widget><Compare /></Widget>
    </b-row>
    -->
  </div>
</template>

<script>
import Widget from "@/components/Widget/Widget";
import { Chart } from "highcharts-vue";
import Vue from "vue";
import AreaChart from "./HighCharts/AreaChart";
import StackedAndGrouped from "./HighCharts/StackedAndGrouped";
import Radius from "./HighCharts/Radius";
import Donut from "./HighCharts/Donut";
import ColumnStacked from "./HighCharts/ColumnStacked";
import Conclusions from "./Conclusions/Conclusions";
import Compare from "./HighCharts/Compare"
import Analysis from "./Conclusions/Analysis"
import Footer from "./Conclusions/Footer"
export default {
  name: "Market",
  components: {
    Widget,
    highcharts: Chart,
    AreaChart,
    StackedAndGrouped,
    Radius,
    Donut,
    ColumnStacked,
    Conclusions,
    Compare,
    Analysis,
    Footer
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
