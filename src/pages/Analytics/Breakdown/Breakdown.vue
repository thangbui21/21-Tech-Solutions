<template>
  <div>
    <apexchart type="donut" :options="chartOptions" :series="series"></apexchart>
  </div>
</template>

<script>
export default {
  name: "Breakdown",
  data() {
    return {
      // Tính tổng rồi chia %
      series: [44, 55, 41, 17, 15],
      chartOptions: {
        labels: ['Trà', "Nước Ngọt", "Cà Phê", "Đồ ăn vặt", "Hoa quả"],
        chart: {
          type: "donut",
        },
        responsive: [
          {
            breakpoint: 480,
            options: {
              chart: {
                width: 200,
              },
              legend: {
                position: "bottom",
              },
            },
          },
        ],
      },
    };
  },
};
</script>