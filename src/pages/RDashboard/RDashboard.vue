<template>
  <div>
    <b-row>
          <b-col lg="9">
        <Widget>
          <ColumnChart />
        </Widget>
      </b-col>
      <b-col lg="3">
        <Widget>
          <PieChart />
        </Widget>
      </b-col>

    </b-row>
    <b-row>
          <b-col lg="10">
        <Widget>
          <LineChart />
        </Widget>
      </b-col>
    </b-row>
    <b-row>
      <b-col lg="4">
        <Widget>
          <AreaChart />
        </Widget>
      </b-col>
      <b-col lg="4">
        <Widget>
          <Mixed />
        </Widget>
      </b-col>
      <b-col lg="4">
        <Widget>
          <BarChart />
        </Widget>
      </b-col>
    </b-row>
    <b-row>
      <b-col lg="6">
        <Widget>
          <Column />
        </Widget>
      </b-col>
      <b-col lg="6">
        <Widget>
          <Radial />
        </Widget>
      </b-col>
    </b-row>
    <b-row>
      <Widget><ELine /></Widget>
    </b-row>
  </div>
</template>

<script>
import Vue from "vue";
import Widget from "@/components/Widget/Widget";
import PieChart from "./PieChart/PieChart";
import ColumnChart from "./ColumnChart/ColumnChart";
import Mixed from "./Mixed/Mixed";
import LineChart from "./LineChart/LineChart";
import ELine from "./LineChart/ELine";
import AreaChart from "./AreaChart/AreaChart";
import BarChart from "./BarChart/BarChart";
import HeatMap from "./HeatMap/HeatMap";
import Column from "./Apex/Column/Column";
import Radial from "./Radial/Radial";
export default {
  components: {
    PieChart,
    Widget,
    ColumnChart,
    Mixed,
    LineChart,
    AreaChart,
    BarChart,
    HeatMap,
    Column,
    Radial,
  },
};
</script>