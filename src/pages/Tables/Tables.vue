<template>
<div class="tables-basic">
      <h1 class="page-title">
      Product Tables &nbsp;
      <small>
        <small>Liệt kê các mặt hàng trong cửa hàng của bạn</small>
      </small>
    </h1>
    <b-row>
        <b-col lg="12" xs="12" sm="12" md="12">
            <keyproduct1 />
        </b-col>
    </b-row>

    <b-row>
        <b-col lg="6" sm="6" xs="6" md="6">
            <SubProduct1 />
        </b-col>
        <b-col lg="6" sm="6" xs="6" md="6">
            <SubProduct2 />
        </b-col>
    </b-row>

    <b-row>
        <b-col lg="12" xs="12" sm="12" md="12">
            <keyproduct1 />
        </b-col>
    </b-row>

</div>
</template>

<script>
import Vue from "vue";
import Widget from "@/components/Widget/Widget";
import Sparklines from "../../components/Sparklines/Sparklines";
import SubProduct1 from "./SubProduct1/SubProduct1";
import SubProduct2 from "./SubProduct2/SubProduct2";
import keyproduct1 from "./KeyProduct1/keyproduct1";

export default {
    name: "Tables",
    components: {
        Widget,
        SubProduct1,
        SubProduct2,
        keyproduct1
    },
};
</script>

<style src="./Tables.scss" lang="scss" scoped />
