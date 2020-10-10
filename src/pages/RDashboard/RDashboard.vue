<template>
  <div>
    <b-row>
      <b-col lg="4">
        <Widget
          title="<h5>Tổng quan <span class='fw-semi-bold'>Các mặt hàng</span></h5>"
          close
          collapse
          settings
          customHeader
        >
          <p>Biểu diễn các loại mặt hàng theo tỉ lệ %</p>
          <!-- <PieChart /> -->
          <Pie />
        </Widget>
      </b-col>

      <b-col lg="8">
        <Widget
          title="<h5><span class='fw-semi-bold'>Sales</span> trong tháng</h5>"
          close
          collapse
          settings
          customHeader
        >
          <p>Biến động về số lượng các mặt hàng đã bán</p>
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
          title="<h5><span class='fw-semi-bold'>Sales</span> trong tuần</h5>"
          close
          collapse
          settings
          customHeader
        >
        <p>Số lượng mặt hàng đã bán trong tuần</p>
          <Radial />
        </Widget>

      </b-col>

      <b-col lg="4">
        <Widget
          title="<h5><span class='fw-semi-bold'>Mục tiêu</span></h5>"
          close
          collapse
          settings
          customHeader
        >
          <p>Mục tiêu doanh thu cho từng sản phẩm</p>
          <Target />
        </Widget>
      </b-col>
    </b-row>

    <b-row>
      <b-col cols="12" sm="12">
        <Widget
          title="<h5><span class='fw-semi-bold'>Sales</span> qua các tháng</h5>"
          close
          collapse
          settings
          customHeader
        >
          <p>Tương quan doanh thu các tháng qua của từng loại sản phẩm</p>
          <ColumnChart />
        </Widget>

      </b-col>
      <!--
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
      -->
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