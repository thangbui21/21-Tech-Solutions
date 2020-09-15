<template>
  <div class="tables-basic">
    <b-row>
    <b-col lg="12" xs="12" sm="12">
          <!--Bảng loại hàng 1 -->
      <Widget>
        <KeyProducts />
      </Widget>

    </b-col>

    </b-row>

    <b-row>
      <b-col lg="6" sm="6" xs="12">
        <SubProduct1/>
      </b-col>
            <b-col lg="6" sm="6" xs="12">
        <SubProduct2/>
      </b-col>
    </b-row>

  </div>
</template>

<script>
import Vue from "vue";
import Widget from "@/components/Widget/Widget";
import Sparklines from "../../components/Sparklines/Sparklines";
import KeyProducts from "./KeyProducts/KeyProducts";
import SubProduct1 from "./SubProduct1/SubProduct1";
import SubProduct2 from "./SubProduct2/SubProduct2";

export default {
  name: "Tables",
  components: { Widget, KeyProducts, SubProduct1, SubProduct2 },
};
</script>

<style src="./Tables.scss" lang="scss" scoped />