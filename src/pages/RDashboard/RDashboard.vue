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
          <PieChart />
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

    </b-row>
  </div>
</template>

<script>
import Widget from "@/components/Widget/Widget";
import PieChart from "./PieChart/PieChart";
import ColumnChart from "./ColumnChart/ColumnChart";
import AreaChart from "./AreaChart/AreaChart";
import Radial from "./Radial/Radial";
import HighColumn from "./HighColumn/HighColumn";
import Target from "./Apex/Target/Target";

export default {
  components: {
    PieChart,
    Widget,
    ColumnChart,
    Target,
    AreaChart,
    Radial,
    HighColumn,
  },
};
</script>