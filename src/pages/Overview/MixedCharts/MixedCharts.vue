<template>
<div>
    <highcharts :options="chartOptions"></highcharts>
</div>
</template>

<script>
// Muốn export highchart phải đủ các thông tin như dưới.
import Highcharts from "highcharts";
import exporting from "highcharts/modules/exporting";
import exportData from "highcharts/modules/export-data";

exporting(Highcharts);
exportData(Highcharts);

import {
    Chart
} from "highcharts-vue";

import config from "../../../config";

const colors = config.colors;

export default {
    name: "HighChart",
    components: {
        highcharts: Chart,
    },
    data() {
        return {
            chartOptions: {
                chart: {
                    type: "mixed",
                    backgroundColor: "transparent",
                },
                title: {
                    text: "Mixed",
                    //text: "Combination chart",
                    style: {
                        color: colors.textColor,
                    },
                },
                legend: {
                    enabled: true,

                },
                credits: {
                    enabled: false,
                },
                // In ra chart
                exporting: {
                    enabled: false,
                },
                xAxis: {
                    categories: ["Apples", "Oranges", "Pears", "Bananas", "Plums"],
                    labels: {
                        style: {
                            color: colors.textColor,
                        },
                    },
                },
                yAxis: {
                    title: {
                        enabled: false,
                    },
                    labels: {
                        style: {
                            color: colors.textColor,
                        },
                    },
                    gridLineColor: colors.gridLineColor,
                },

                colors: [colors.green, colors.blue, colors.red],
                labels: {
                    items: [{
                        //html: "Total fruit consumption",
                        style: {
                            left: "50px",
                            top: "18px",
                            color: colors.textColor,
                        },
                    }, ],
                },
                series: [{
                        type: "column",
                        name: "Jane",
                        data: [3, 2, 1, 3, 4],
                    },
                    {
                        type: "column",
                        name: "John",
                        data: [2, 3, 5, 7, 6],
                    },
                    {
                        type: "column",
                        name: "Joe",
                        data: [4, 3, 3, 9, 0],
                    },
                    {
                        type: "spline",
                        name: "Average",
                        data: [3, 2.67, 3, 6.33, 3.33],
                        marker: {
                            lineWidth: 2,
                            //Chỉnh màu lại cho đẹp hơn.
                            lineColor: Highcharts.getOptions().colors[3],
                            fillColor: "white",
                        },
                    },
                    {
                        type: "pie",
                        name: "Total consumption",
                        colors: [colors.green, colors.blue, colors.red],
                        data: [{
                                name: "Jane",
                                y: 13,
                            },
                            {
                                name: "John",
                                y: 23,
                            },
                            {
                                name: "Joe",
                                y: 19,
                            },
                        ],
                        center: [100, 80],
                        size: 100,
                        showInLegend: false,
                        dataLabels: {
                            enabled: false,
                        },
                    },
                ],
            },
        };
    },
};
</script>
