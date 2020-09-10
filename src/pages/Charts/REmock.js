import Highcharts from 'highcharts';
import config from '../../config';
//import {Products} from './table';

const colors = config.colors;

let columnColors = [colors.blue, colors.green, colors.orange, colors.red, colors.default, colors.gray, colors.teal, colors.pink];


export const chartData = {
    apex: {
        column: {
            series: [{
                //data: Products.productPrice(),
                data: [1,2,3,4,5,6],
            }],
            options: {
                chart: {
                    height: 350,
                    type: 'bar'
                },
                colors: columnColors,
                plotOptions: {
                    bar: {
                        columnWidth: '45%',
                        distributed: true
                    }
                },
                dataLabels: {
                    enabled: false,
                },
                xaxis: {
                    categories: ['John', 'Joe', 'Jake', 'Amber', 'Peter', 'Mary', 'David', 'Lily'],
                    labels: {
                        style: {
                            colors: columnColors,
                            fontSize: '14px'
                        }
                    },
                    axisBorder: {
                        show: false
                    },
                    axisTicks: {
                        show: false
                    }
                },
                yaxis: {
                    labels: {
                        style: {
                            color: colors.textColor,
                        }
                    }
                },
                tooltip: {
                    theme: 'dark'
                },
                grid: {
                    borderColor: colors.gridLineColor
                }
            }
        },
        pie: {
            series: [25, 15, 44, 55, 41, 17],
            options: {
                labels: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                theme: {
                    monochrome: {
                        enabled: true,
                        color: colors.blue,
                    }
                },
                stroke: {
                    show: false,
                    width: 0
                },
                legend: false,
                responsive: [{
                    breakpoint: 480,
                    options: {
                        chart: {
                            width: 200
                        },
                        legend: {
                            position: 'bottom'
                        }
                    }
                }]
            }
        }
    },
};

export let liveChartInterval = null;

export const liveChart = {
    liveChartInterval: null,
    colors: [colors.blue],
    chart: {
        backgroundColor: 'transparent',
        height: 170,
        type: 'spline',
        animation: Highcharts.svg, // don't animate in old IE
        marginRight: 10,
        events: {
            load: function () {

                // set up the updating of the chart each second
                var series = this.series[0];
                liveChartInterval = setInterval(function () {
                    var x = (new Date()).getTime(), // current time
                        y = Math.random();
                    series.addPoint([x, y], true, true);
                }, 1000);
            }
        }
    },

    time: {
        useUTC: false
    },
    credits: {
        enabled: false
    },
    title: false,
    xAxis: {
        type: 'datetime',
        tickPixelInterval: 150,
        labels: {
            style: {
                color: colors.textColor
            }
        },
        lineWidth: 0,
        tickWidth: 0
    },
    yAxis: {
        title: {
            enabled: false
        },
        plotLines: [{
            value: 0,
            width: 1,
            color: colors.textColor
        }],
        labels: {
            style: {
                color: colors.textColor
            }
        },
        gridLineColor: colors.gridLineColor
    },
    tooltip: {
        headerFormat: '<b>{series.name}</b><br/>',
        pointFormat: '{point.x:%Y-%m-%d %H:%M:%S}<br/>{point.y:.2f}'
    },
    legend: {
        enabled: false
    },
    exporting: {
        enabled: false
    },
    series: [{
        name: 'Random data',
        data: (function () {
            // generate an array of random data
            var data = [],
                time = (new Date()).getTime(),
                i;

            for (i = -19; i <= 0; i += 1) {
                data.push({
                    x: time + i * 1000,
                    y: Math.random()
                });
            }
            return data;
        }())
    }]
};
import axios from 'axios';

export const DataTable = {
    data() {
        return {
            info: null,
        };
    },
    methods: {
        id() {
            var id = [];
            for (var key in this.info) {
                id.push(this.info[key]["id"]);
            }
            return id;
        },
        productName() {
            var productName = [];
            for (var key in this.info) {
                productName.push(this.info[key]['productName']);
            }
            return productName;
        },
        productPrice() {
            var productPrice = [];
            for (var key in this.info) {
                productPrice.push(this.info[key]['productPrice']);
            }
            return productPrice;
        }
    },

    mounted() {
        axios
            .get("http://localhost:8080/api/products")
            .then((response) => (this.info = response.data));
    },
}