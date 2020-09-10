<template>
<div>
    <Widget title="<h5>Highcharts <span class='fw-semi-bold'>Line Chart</span></h5>" close collapse customHeader>
        <highcharts :options="cd.highcharts.mixed"></highcharts>
        <h5 class="mt">
            Interactive
            <span class="fw-semi-bold">Sparklines</span>
        </h5>
        <b-row class="mt">
            <b-col md="6" xs="12">
                <div class="stats-row">
                    <div class="stat-item">
                        <p class="value5 fw-thin">34 567</p>
                        <h6 class="name text-muted m-0 fs-mini">Overall Values</h6>
                    </div>
                    <div class="stat-item stat-item-mini-chart">
                        <Sparklines :data="sparklineData.series" :options="sparklineData.options1" :width="80" :height="25"></Sparklines>
                    </div>
                </div>
            </b-col>
            <b-col md="6" xs="12">
                <div class="stats-row">
                    <div class="stat-item">
                        <p class="value5 fw-thin">34 567</p>
                        <h6 class="name text-muted m-0 fs-mini">Overall Values</h6>
                    </div>
                    <div class="stat-item stat-item-mini-chart">
                        <Sparklines :data="sparklineData.series" :options="sparklineData.options2" :width="80" :height="25"></Sparklines>
                    </div>
                </div>
            </b-col>
        </b-row>
    </Widget>
</div>
</template>

<script>
import Widget from "@/components/Widget/Widget";
import {
    chartData,
    liveChart,
    liveChartInterval
} from "./mock";

import ECharts from "vue-echarts/components/ECharts";
import "echarts/lib/chart/line";
import "echarts/lib/chart/themeRiver";
import "echarts/lib/chart/pie";
import "echarts/lib/component/tooltip";
import "echarts/lib/component/legend";

import Highcharts from "highcharts";
import exporting from "highcharts/modules/exporting";
import exportData from "highcharts/modules/export-data";

exporting(Highcharts);
exportData(Highcharts);

import {
    Chart
} from "highcharts-vue";
import Sparklines from "../../../components/Sparklines/Sparklines";

export default {
    name: "Charts",
    components: {
        Widget,
        echart: ECharts,
        highcharts: Chart,
        Sparklines,
    },
    data() {
        return {
            cd: chartData,
            ld: liveChart,
            initEchartsOptions: {
                renderer: "canvas",
            },
        };
    },
    computed: {
        sparklineData() {
            return {
                series: [{
                    data: [1, 7, 3, 5, 7, 8],
                }, ],
                options1: {
                    colors: [this.appConfig.colors.green],
                    plotOptions: {
                        bar: {
                            columnWidth: "50%",
                        },
                    },
                },
                options2: {
                    colors: [this.appConfig.colors.red],
                    plotOptions: {
                        bar: {
                            columnWidth: "50%",
                        },
                    },
                },
            };
        },
    },
    beforeDestroy() {
        clearInterval(liveChartInterval);
    },
};
</script>
