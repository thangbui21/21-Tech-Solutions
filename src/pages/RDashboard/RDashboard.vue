<template>
  <div>
    <b-row>
      <b-col lg="4">
        <Widget
          title="<h5>Overview <span class='fw-semi-bold'>Pie Chart</span></h5>"
          close
          collapse
          settings
          customHeader
        >
          <p>Revenue comes from all types of goods</p>
          <!-- <PieChart /> -->
          <Pie />
        </Widget>
      </b-col>

      <b-col lg="8">
        <Widget
          title="<h5>Growth <span class='fw-semi-bold'>Line Chart</span></h5>"
          close
          collapse
          settings
          customHeader
        >
          <p>Growth in sales of items over the past month</p>
          <AreaChart />
        </Widget>
      </b-col>
    </b-row>
    <!--
    <b-row>
      <b-col lg="10">
        <Widget>
          <LineChart />
        </Widget>
      </b-col>
    </b-row>
    -->

    <!--
    <b-row>
      <b-col lg="8">
        <Widget>
          <div>
            <p>Select product type to see details</p>
          </div>

          <div style="float-right">
            <b-dropdown id="dropdown-1" variant="default" text="Select product type" class="m-md-2">
              <b-dropdown-item>First Action</b-dropdown-item>
              <b-dropdown-item>Second Action</b-dropdown-item>
              <b-dropdown-item>Third Action</b-dropdown-item>
            </b-dropdown>
          </div>
          
        </Widget>
      </b-col>
    </b-row>
    -->
    <b-row>
      <b-col lg="8">
            
        <Widget
          title="<h5>Statistical <span class='fw-semi-bold'>Bar Chart</span></h5>"
          close
          collapse
          settings
          customHeader
        >
        <p>The revenue comes from items for a week</p>
          <Radial />
        </Widget>

      </b-col>

      <b-col lg="4">
        <Widget
          title="<h5>Target <span class='fw-semi-bold'>Radial Chart</span></h5>"
          close
          collapse
          settings
          customHeader
        >
          <p>Revenue targets for each product</p>
          <Target />
        </Widget>
      </b-col>
    </b-row>

    <b-row>
      <b-col lg="7">
        <Widget
          title="<h5>Density <span class='fw-semi-bold'>Heatmap</span></h5>"
          close
          collapse
          settings
          customHeader
        >
        <p>The density of items sold in the past week</p>
          <Column />
        </Widget>
      </b-col>
      <b-col lg="5">
        <Widget
          title="<h5>Revenue <span class='fw-semi-bold'>Line Chart</span></h5>"
          close
          collapse
          settings
          customHeader
        >
          <p>The revenue comes from each product category</p>
          <HighColumn />
        </Widget>

      </b-col>
    </b-row>
  </div>
</template>

<script>
import Widget from "@/components/Widget/Widget";
import PieChart from "./PieChart/PieChart";
import ColumnChart from "./ColumnChart/ColumnChart";
import Mixed from "./Mixed/Mixed";
import LineChart from "./LineChart/LineChart";
import AreaChart from "./AreaChart/AreaChart";
import BarChart from "./BarChart/BarChart";
import HeatMap from "./HeatMap/HeatMap";
import Column from "./Apex/Column/Column";
import Radial from "./Radial/Radial";
import HighColumn from "./HighColumn/HighColumn";

import Target from "./Apex/Target/Target";
import Pie from "./Apex/Pie/Pie";

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
    HighColumn,
    Target,
    Pie,
  },
};
</script>