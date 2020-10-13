<template>
  <div>
    <!--Mục tiêu tăng trưởng-->

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
        <!--Nếu là shop quần áo thì có thể là: Áo sơ mi, Áo thun, Quần, ... -->
        20 types of
        <strong></strong>, 10 types of <strong></strong>, and <strong></strong>.
      </p>
    </div>

    <!--Sẽ tổ chức CSDL như nào?-->
    <div
      class="row progress-stats"
      v-for="(row, index) in info"
      v-bind:key="index"
    >
      <div class="col-md-9 col-12" v-if="index < 2">
        <h6 class="name">{{ row.productType }}</h6>
        <p class="description deemphasize mb-xs">
          {{ row.description }} {{ (row.sold / row.target) * 100 }}
        </p>
        <!--Nghĩ xem có cách nào random color không?-->
        <b-progress
          :variant = "row.color"
          :value="(row.sold / row.target) * 100"
          :max="100"
          class="progress-xs"
        />

      </div>
      <div class="col-md-3 col-12 text-center">
        <span class="status rounded rounded-lg bg-widget">
          <span>
            <AnimatedNumber
              :value="(row.sold / row.target) * 100"
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
    <p>{{ getRandomColor }}</p>
    <p>{{ info }}</p>
    -->
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

  // mounted() {
  //   UserService.get("/api/products").then(
  //     (response) => (this.info = response.data)
  //   );
  // },

  methods: {
    danger() {
      alert("danger")
      return "danger";
    },
    
    getRandomColor() {
      const colors = ["danger", "primary", "success"];
      return {
        colors: [colors[Math.floor(Math.random() * colors.length)]],
      };
    },

    uniq(a) {
      // Trả lại danh sách không trùng lặp
      return Array.from(new Set(a));
    },

    checkIfDuplicateExists(w) {
      return new Set(w).size !== w.length;
    },

    getPlan() {
      UserService.get("/api/plans").then((response) => {
        this.info = response.data;
      });
    },

    //   getSalesPlan() {
    //     //Kiểm tra thêm điều kiện userId nữa.
    //     var pType = "";
    //     var pCount = "";
    //     UserService.get("/api/products").then((response) => {
    //       this.info = response.data

    //       for (var i = 0; i< response.data.length; i++) {
    //         //alert(response.data[1].productType);
    //         pType === response.data[0].productType;
    //         if (!(pType === response.data[i].productType)) {
    //           this.pTypes.push(response.data[i].productType)
    //           this.pType === response.data[1].productType;
    //         }

    //         if (!(pCount === response.data[i].productName)) {
    //           this.pName.push(response.data[i].productName);
    //         }
    //       }
    //     });
    //   },
    // },
  },
  created() {
    //this.getSalesPlan();
    this.getPlan();
  },

  computed: {

        getRandomColor() {
      const colors = ["danger", "primary", "success"];
      return (colors[Math.floor(Math.random()*colors.length)]);
        
    },
    // countName: function () {
    //   return this.uniq(this.pTypes);
    // },
    // countProduct: function() {
    //   return this.uniq(this.pName);
    // },
    // lenN: function() {
    //   return this.countName.length;
    // },
    // name: function() {
    //   for (var i in this.countName) {
    //     return this.countName[1];
    //   }
    // }
  },
};
</script>