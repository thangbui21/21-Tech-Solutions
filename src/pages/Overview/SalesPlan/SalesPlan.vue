<template>
  <div>
    <!--Mục tiêu tăng trưởng-->

    <!--class="bg-transparent" Trùng màu với background-->
    <p>
      Status:
      <strong>Live</strong>
    </p>
    <div>
      <p v-for="item in countName" v-bind:key="item">
        <span class="circle bg-primary text-white">
          <!-- Nên dùng la la-icon -->
          <i class="la la-table" />
        </span>
        &nbsp;
        <!--Nếu là shop quần áo thì có thể là: Áo sơ mi, Áo thun, Quần, ... -->
        20 types of
        <strong>{{item}}</strong>, 10 types of <strong>snacks</strong>, and
        <strong>books</strong>.
      </p>
    </div>

    <div class="row progress-stats">
      <div class="col-md-9 col-12">
        <h6 class="name">
          <strong>Drinks</strong>
        </h6>
        <p class="description deemphasize mb-xs">
          Drinks are the most profitable item for your store
        </p>
        <b-progress
          variant="primary"
          :value="60"
          :max="100"
          class="progress-xs"
        />
      </div>
      <div class="col-md-3 col-12 text-center">
        <span class="status rounded rounded-lg bg-widget">
          <span>
            <AnimatedNumber
              :value="75"
              v-bind="animateNumberOptions"
            ></AnimatedNumber
            >%
          </span>
        </span>
      </div>
    </div>
    <!--Sẽ tổ chức CSDL như nào?-->
    <div class="row progress-stats">
      <div class="col-md-9 col-12">
        <h6 class="name">Snack</h6>
        <p class="description deemphasize mb-xs">
          Snacks are the second best selling item in your store
        </p>
        <b-progress
          variant="danger"
          :value="39"
          :max="100"
          class="progress-xs"
        />
      </div>
      <div class="col-md-3 col-12 text-center">
        <span class="status rounded rounded-lg bg-widget">
          <span>
            <AnimatedNumber
              :value="84"
              v-bind="animateNumberOptions"
            ></AnimatedNumber
            >%
          </span>
        </span>
      </div>
    </div>
    <div class="row progress-stats">
      <div class="col-md-9 col-12">
        <h6 class="name">Book</h6>
        <p class="description deemphasize mb-xs">
          Books are the third best selling item in your store
        </p>
        <b-progress
          variant="success"
          :value="80"
          :max="100"
          class="progress-xs"
        />
      </div>
      <div class="col-md-3 col-12 text-center">
        <span class="status rounded rounded-lg bg-widget">
          <span>
            <!--Chỉnh giá trị dựa vào CSDL-->
            <AnimatedNumber
              :value="92"
              v-bind="animateNumberOptions"
            ></AnimatedNumber
            >%
          </span>
        </span>
      </div>
    </div>
    <h6 class="fw-semi-bold mt">Search</h6>
    <p>
      Status:
      <strong>Live</strong>
    </p>
    <p>
      <span class="circle bg-primary text-white">
        <i class="la la-database" />
      </span>
      &nbsp; 3 Item type, 10 products
    </p>
    <b-input-group class="mt">
      <b-form-input placeholder="Search..." />
      <b-input-group-append>
        <b-btn variant="default">
          <i class="la la-search" />
        </b-btn>
      </b-input-group-append>
    </b-input-group>
    <!--
    <p>{{ pTypes }}</p>
    <p>{{ pName }}</p>
    <p>{{ countName }}</p>
    <p>{{ name }}</p>
    <p>{{ lenN }}</p>
    -->
  </div>
</template>

<script>
import AnimatedNumber from "animated-number-vue";
import UserService from "../../../services/user.service";
import Vue from "vue";

export default {
  name: "SalesPlan",
  components: {
    AnimatedNumber,
  },
  data() {
    return {
      info: [],
      pTypes: [],
      pName: [],


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

  // mounted() {
  //   UserService.get("/api/products").then(
  //     (response) => (this.info = response.data)
  //   );
  // },

  methods: {
    uniq(a) {
      // Trả lại danh sách không trùng lặp
      return Array.from(new Set(a));
    },

    checkIfDuplicateExists(w) {
      return new Set(w).size !== w.length;
    },

    

    getSalesPlan() {
      //Kiểm tra thêm điều kiện userId nữa.
      var pType = "";
      var pCount = "";
      UserService.get("/api/products").then((response) => {
        for (var i = 0; i< response.data.length; i++) {
          //alert(response.data[1].productType);
          pType === response.data[0].productType;
          if (!(pType === response.data[i].productType)) {
            this.pTypes.push(response.data[i].productType)
            this.pType === response.data[1].productType;
          }

          if (!(pCount === response.data[i].productName)) {
            this.pName.push(response.data[i].productName);
          }
        }
      });
    },
  },
  created() {
    this.getSalesPlan();
  },

  computed: {
    countName: function () {
      return this.uniq(this.pTypes);
    },
    countProduct: function() {
      return this.uniq(this.pName);
    },
    lenN: function() {
      return this.countName.length;
    },
    name: function() {
      for (var i in this.countName) {
        return this.countName[1];
      }
    }

  },
};
</script>