<template>
  <b-navbar toggleable="md" class="app-header d-print-none">
    <b-navbar-nav class="navbar-nav-mobile ml-auto">
      <b-nav-item-dropdown right menu-class="py-0">
        <template slot="button-content">
          <span class="avatar rounded-circle thumb-sm float-left mr-2">
            <img class="rounded-circle" src="../../assets/people/a8.jpg" alt="..." />
          </span>
          <span class="small">{{currentUser.username}}</span>
          <span class="mx-2 circle bg-primary text-white fs-sm fw-bold">13</span>
        </template>
      </b-nav-item-dropdown>

      <b-nav-item class="divider d-md-down-none"></b-nav-item>
      <b-nav-item-dropdown no-caret right menu-class="dropdown-menu-settings">
        <template slot="button-content">
          <i class="la la-cog px-2" />
        </template>
        <b-dropdown-item>
          <i class="la la-user" /> My Account
        </b-dropdown-item>
        <b-dropdown-divider />
        <b-dropdown-item>Calendar</b-dropdown-item>
        <b-dropdown-item>
          Inbox &nbsp;&nbsp;
          <b-badge variant="danger" pill class="animate__animated animate__bounceIn">9</b-badge>
        </b-dropdown-item>
        <b-dropdown-divider />
        <b-dropdown-item-button @click="logout">
          <i class="la la-sign-out" /> Log Out
        </b-dropdown-item-button>
      </b-nav-item-dropdown>
      
      <!--Chỉnh lại thành button-->
      <b-nav-item-dropdown no-caret right class="d-md-down-none">
        <template slot="button-content">
          <i class="la la-globe px-2" />
        </template>
      </b-nav-item-dropdown>

      <b-nav-item class="d-md-down-none" @click="logout">
        <i class="la la-power-off px-2" />
      </b-nav-item>
      <b-nav-item class="d-md-none" @click="switchSidebarMethod">
        <i class="la la-navicon px-2" />
      </b-nav-item>
    </b-navbar-nav>
  </b-navbar>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "Header",
  components: {},
  data() {
    return {
      showNavbarAlert: true,
    };
  },
  computed: {
    currentUser() {
      return this.$store.state.auth.user;
    },
    // Tìm hiểu xem MapState phục vụ mục đích gì.
    // ...mapState("layout", {
    //   sidebarClose: (state) => state.sidebarClose,
    //   sidebarStatic: (state) => state.sidebarStatic,
    // }),
  },
  methods: {
    ...mapActions("layout", [
      "toggleSidebar",
      "toggleChat",
      "switchSidebar",
      "changeSidebarActive",
    ]),
    switchSidebarMethod() {
      if (!this.sidebarClose) {
        this.switchSidebar(true);
        this.changeSidebarActive(null);
      } else {
        this.switchSidebar(false);
        const paths = this.$route.fullPath.split("/");
        paths.pop();
        this.changeSidebarActive(paths.join("/"));
      }
    },

    ///
    // logout() {
    //     window.localStorage.setItem('authenticated', false);
    //     this.$router.push('/login');
    // },
    logout() {
      this.$store.dispatch("auth/logout");
      this.$router.push("/login");
    },
  },
};
</script>

<style src="./Header.scss" lang="scss" />
