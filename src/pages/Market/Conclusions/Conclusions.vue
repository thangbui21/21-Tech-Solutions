<template>
  <div>
    <!--Truyền vào index là chuyển product-->
    <div v-for="(col, index) in info" v-bind:key="index">
      <div v-if="index == 0">
        <h6>{{ col.productName }}</h6>
        <div class="stats-row">
          <div class="stat-item">
            <h6 class="name">Tổng số</h6>
            <p class="value">{{ col.overallValues }}</p>
          </div>
          <div class="stat-item">
            <h6 class="name">Hàng tháng</h6>
            <p class="value">{{ col.monthly }}</p>
          </div>
          <div class="stat-item">
            <h6 class="name">24h</h6>
            <p class="value">{{ col.daily }}</p>
          </div>
        </div>

        <div>
          <b-progress
            :variant="col.color"
            :value="Math.abs( ((col.monthly - col.lastMonth)/col.lastMonth ) * 100)"
            :max="100"
            class="progress-xs"
          />
        </div>

                  <p v-if="col.monthly - col.lastMonth > 0">
              <small>
                <span class="circle bg-primary text-white">
                  <i class="la la-angle-up" />
                </span>
              </small>
              <span class="fw-semi-bold">
                Cao hơn &nbsp;{{
                  Math.floor(
                    ((col.monthly - col.lastMonth) / col.monthly) * 100
                  )
                }}
                %
              </span>
              &nbsp;so với tháng trước
            </p>

            <p v-else>
              <small>
                <span class="circle bg-primary text-white">
                  <i class="la la-angle-down" />
                </span>
              </small>
              <span class="fw-semi-bold">
                Thấp hơn&nbsp;{{
                  Math.floor(
                    ((col.monthly - col.lastMonth) / col.monthly) * 100
                  ) * -1
                }}% 
              </span>
              &nbsp;so với tháng trước
            </p>

      </div>
    </div>
  </div>
</template>

<script>
import AnimatedNumber from "animated-number-vue";
import UserService from "../../../services/user.service";
import Vue from "vue";
import User from "../../../models/user";

export default {
  name: "SalesPlan",
  components: {
    AnimatedNumber,
  },
  data() {
    return {
      info: null,

      animateNumberOptions: {
        duration: 2000,
        easing: "easeInQuad",
        formatValue(value) {
          return value.toFixed(0);
        },
      },
      checkedArr: [false, false, false],
      dataCollection: null,
    };
  },

  methods: {
    getBestSelling() {
      UserService.get("/api/best-selling").then((response) => {
        this.info = response.data;
      });
    },
  },
  created() {
    this.getBestSelling();
  },

  computed: {},
};
</script>