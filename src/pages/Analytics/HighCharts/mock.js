import config from '../../../config';

const colors = config.colors;


export const chartData = {

  highcharts: {
    mixed: {
      chart: {
        type: 'line',
        height: 220,
        backgroundColor: 'transparent'
      },
      exporting: {
        enabled: false
      },
      title: {
        text: 'Top 5 products',
        style: {
          color: colors.textColor
        }
      },
      credits: {
        enabled: false
      },
      xAxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        labels: {
          style: {
            color: colors.textColor
          }
        }
      },
      yAxis: {
        max: 100,
        title: {
          enabled: false
        },
        labels: {
          style: {
            color: colors.textColor
          }
        },
        gridLineColor: colors.gridLineColor
      },


      tooltip: {
        headerFormat: '<b>{series.name}</b><br>',
      },
      legend: {
        enabled: false
      },
      plotOptions: {
        series: {
          marker: {
            enabled: true,
            symbol: 'circle'
          },
          label: {
            connectorAllowed: false
          },
         
        }
      },
      colors: [colors.green, colors.blue, colors.red],

      series: [{
        name: 'Trà Chanh',
        type: 'area',
        data: [12, 66, 24, 36, 23, 56, 75, 100, 23, 56, 75, 100]
      }, {
        name: 'Trà Đào',
        type: 'area',
        data: [66, 22, 33, 44, 55, 11, 55, 100, 33, 44, 55, 11]
      }, {
        name: 'Chanh Muối',
        type: 'area',
        data: [11, 22, 33, 44, 55, 66, 77, 100, 44, 55, 66, 77]
      }, {
        name: 'Chanh Leo',
        type: 'area',
        data: [11, 55, 33, 11, 55, 22, 22, 44, 33, 11, 55, 22,]
      }, {
        name: 'Vối đá',
        type: 'area',
        data: [22, 33, 33, 33, 55, 22, 77, 100, 33, 33, 55, 22]
      }],
    },
  }
};


