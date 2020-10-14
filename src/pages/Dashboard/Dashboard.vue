<template>
  <div>
    <h1 class="page-title">
      Dashboard &nbsp;
      <small>
        <small>Biểu diễn dữ liệu của cửa hàng</small>
      </small>
      <b-button
        
        variant="default"
        style="float: right"
        @click="exportPDF"
        >Export PDF</b-button
      >
    </h1>

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
            <PieChart ref="piechart"> </PieChart>
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
            <AreaChart ref="areachart"> </AreaChart>
          </Widget>
        </b-col>
      </b-row>
      <b-row>
        <b-col lg="12" xs="6">
          <Widget>
            <p></p>
          </Widget>
        </b-col>
      </b-row>
      <!--Stacked column-->
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
            <Radial ref="stackedcolumn"> </Radial>
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
            <p>Tương quan doanh thu các tháng qua của từng sản phẩm</p>
            <ColumnChart ref="columnchart"> </ColumnChart>
          </Widget>
        </b-col>
      </b-row>
    </div>
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

import jsPDF from "jspdf";
//import autoTable from 'jspdf-autotable'
import Axios from "axios";
import "jspdf-autotable";
import { chart } from "highcharts";

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

  data() {
    return {
      Description: ["It not accept vietnamese?", "Not Thắng bùi", "Đây là chart3", "Đây là chart4"]
    }
  },

  props: ["chartOptions"],

  methods: {
    exportPDF() {
      const toDataURL = (url) =>
        fetch(url)
          .then((response) => response.blob())
          .then(
            (blob) =>
              new Promise((resolve, reject) => {
                const reader = new FileReader();
                reader.onloadend = () => resolve(reader.result);
                reader.onerror = reject;
                reader.readAsDataURL(blob);
              })
          );

      var pieChart = this.$refs.piechart;
      var areaChart = this.$refs.areachart;
      var stackedColumn = this.$refs.stackedcolumn;
      var columnChart = this.$refs.columnchart;
      var charts = [pieChart, areaChart, stackedColumn, columnChart];
      var highcharts = [pieChart, areaChart, stackedColumn, columnChart];

      var exportUrl = "https://export.highcharts.com/";
      var doc = new jsPDF();
      var promises = [];
      var ajaxCalls = [];
      var pageHeight = doc.internal.pageSize.getHeight();
      var yDocPos = 0;
      var k = 0;

      doc.addFont('Arial')
      doc.setFont('Arial')

      var header = "BÁO CÁO KINH DOANH";
      var footer = "Footer";
      var description = "Description";

      doc.setFontSize(16);
      doc.text(header, doc.internal.pageSize.getWidth() / 2, 15, {
        align: "center",
      });

      // doc.setFontSize(16);
      // doc.text(footer, doc.internal.pageSize.getWidth() / 2, 20, {
      //   align: "center",
      // });

      // doc.setFontSize(16);
      // doc.text(description, doc.internal.pageSize.getWidth() / 2, 25, {
      //   align: "center",
      // });
      //doc.addPage();

      for (var i = 0; i < highcharts.length; i++) {
        var chart = highcharts[i];
        ajaxCalls[i] = Axios.post(exportUrl, {
          options: JSON.stringify(chart.chartOptions),
          type: "image/png",
          async: true,
        });
      }

      Axios.all(ajaxCalls).then((values) => {
        values.forEach((value) => {
          var imgUrl = exportUrl + value.data;
          promises.push(toDataURL(imgUrl));
        });
        Promise.all(promises).then((values) => {
          values.forEach((value, index) => {
            if (yDocPos > pageHeight - 150) {
              doc.addPage();
              yDocPos = 25;
              k = 0;
            } else {
              yDocPos = 25 + k * 140;
            }
            doc.setFontSize(16);

            // Cho mảng Description ăn theo index.
            // Nhưng mà nó không ăn theo font tiếng việt.
            doc.text(20, yDocPos, this.Description[index]);
            yDocPos += 15;
            doc.addImage(value, "PNG", 20, yDocPos);
            k++;
          });
          doc.save("report.pdf");
        });
      });
    },
  },
};
</script>