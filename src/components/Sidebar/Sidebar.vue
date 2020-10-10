<template>
  <b-collapse class="sidebar-collapse" id="sidebar-collapse" :visible="sidebarOpened">
    <nav :class="{sidebar: true}">
      <header class="logo">
        <router-link to="/app">
          Company
          <span class="fw-semi-bold">21</span>
        </router-link>
      </header>
      <ul class="nav">
        <NavLink
          :activeItem="activeItem"
          header="Overview"
          link="/app/overview"
          iconName="flaticon-home"
          index="overview"
          isHeader
        />
        <NavLink
          header="Product Tables"
          link="/app/product-tables"
          iconName="flaticon-list"
          index="product-tables"
          isHeader
        />
        <NavLink
          header="Dashboard"
          link="/app/dashboard"
          iconName="flaticon-star"
          index="dashboard"
          isHeader
        />
        <NavLink
          header="Analytics"
          link="/app/analytics"
          iconName="flaticon-star"
          index="analytics"
          isHeader
        />
        <NavLink
          header="Market"
          link="/app/market"
          iconName="flaticon-star"
          index="market"
          isHeader
        />
        
        <NavLink header="User" link="/app/user" iconName="flaticon-user" index="user" isHeader />
      </ul>
    </nav>
  </b-collapse>
</template>

<script>
import { mapState, mapActions } from "vuex";
import NavLink from "./NavLink/NavLink";

export default {
  name: "Sidebar",
  components: {
    NavLink,
  },
  data() {
    return {};
  },
  methods: {
    ...mapActions("layout", ["changeSidebarActive", "switchSidebar"]),
    setActiveByRoute() {
      const paths = this.$route.fullPath.split("/");
      paths.pop();
      this.changeSidebarActive(paths.join("/"));
    },
  },
  created() {
    this.setActiveByRoute();
  },
  computed: {
    ...mapState("layout", {
      sidebarOpened: (state) => !state.sidebarClose,
      activeItem: (state) => state.sidebarActiveElement,
    }),
  },
};
</script>

<!-- Sidebar styles should be scoped -->
<style src="./Sidebar.scss" lang="scss" scoped/>
