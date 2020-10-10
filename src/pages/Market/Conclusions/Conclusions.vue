<template>
  <div>
    <!--class="bg-transparent" Trùng màu với background-->
    <p>
      Status:
      <strong>Live</strong>
    </p>
    <div>
      <p>
        <span class="circle bg-primary text-white">
          <!-- Nên dùng la la-icon -->
          <i class="la la-table" />
        </span>
        &nbsp;
        20 types of
        <strong></strong>, 10 types of <strong></strong>, and <strong></strong>.
      </p>
    </div>

    <div
      class="row progress-stats"
    >
      <div class="col-md-9 col-12">
        <h6 class="name">Hola</h6>
        <p class="description deemphasize mb-xs">
          89
        </p>
        <!--Nghĩ xem có cách nào random color không?-->
        <b-progress
          :variant = "warning"
          :value="89"
          :max="100"
          class="progress-xs"
        />

      </div>
      <div class="col-md-3 col-12 text-center">
        <span class="status rounded rounded-lg bg-widget">
          <span>
            <AnimatedNumber
              :value="56"
              v-bind="animateNumberOptions"
            ></AnimatedNumber
            >%
          </span>
        </span>
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
  },
  created() {

  },

  computed: {
  },
};
</script>