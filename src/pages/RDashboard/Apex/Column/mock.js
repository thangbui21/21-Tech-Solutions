import config from '../../../../config';
const colors = config.colors;

let columnColors = [colors.blue, colors.green, colors.orange, colors.red, colors.default, colors.gray, colors.teal, colors.pink];

export const chartData = {
    apex: {
        column: {
            series: [{
                data: [21, 22, 10, 28, 16, 21, 13, 30]
            }],

            chartOptions: {
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
    },
};

