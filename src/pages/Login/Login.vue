<template>
  <div class="auth-page">
    <b-container>
      <Widget
        class="widget-auth mx-auto"
        title="<h3 class='mt-0'>Login to your Web App</h3>"
        customHeader
      >
        <p class="widget-auth-info">Use your email to sign in.</p>
        <form class="mt" @submit.prevent="handleLogin">
          <b-alert class="alert-sm" variant="danger" :show="!!errorMessage">{{errorMessage}}</b-alert>
          <b-form-group label="User" label-for="user">
            <b-input-group>
              <b-input-group-text slot="prepend">
                <i class="la la-user text-white"></i>
              </b-input-group-text>
              <input

                v-model="user.username"
                v-validate="'required'"
                type="text"
                name="username"
                id="username"
                ref="username"
                class="form-control input-transparent pl-3"                           
                placeholder="User"

              />
            </b-input-group>
          </b-form-group>
          <b-form-group label="Password" label-for="password">
            <b-input-group>
              <b-input-group-text slot="prepend">
                <i class="la la-lock text-white"></i>
              </b-input-group-text>
              <input
                v-model="user.password"
                v-validate="'required'"
                type="password"
                name="password"
                id="password"
                ref="password"
                class="form-control input-transparent pl-3"            
                placeholder="Password"
              />
            </b-input-group>
          </b-form-group>
          <div class="bg-widget auth-widget-footer">
            <b-button type="submit" variant="danger" class="auth-btn" size="sm">
              <span class="auth-btn-circle">
                <i class="la la-caret-right"></i>
              </span>
              Login
            </b-button>
            <p class="widget-auth-info mt-4">Don't have an account? Sign up now!</p>
            <router-link class="d-block text-center mb-4" to="login">Create an Account</router-link>
            <div class="social-buttons">
              <b-button variant="primary" class="social-button">
                <i class="social-icon social-google"></i>
                <p class="social-text">GOOGLE</p>
              </b-button>
              <b-button variant="success" class="social-button">
                <i class="social-icon social-microsoft"></i>
                <p class="social-text">MICROSOFT</p>
              </b-button>
            </div>
          </div>
        </form>
      </Widget>
    </b-container>
    <footer class="auth-footer">
    </footer>
  </div>
</template>

<script>
import Widget from "@/components/Widget/Widget";
import User from "../../models/user"
export default {
  name: "LoginPage",
  components: {
    Widget,
  },
  data() {
    return {
      user: new User("", ""),
      loading: false,
      message: "",

      errorMessage: null,
    };
  },

  computed: {
    loggedIn() {
      return this.$store.state.auth.status.loggedIn;
    },
  },

  created() {
    if (this.loggedIn) {
      this.$router.push("/app/user");
    }
  },

  methods: {
    handleLogin() {
      this.loading = true;
      this.$validator.validateAll().then((isValid) => {
        if (!isValid) {
          this.loading = false;
          return;
        }

        if (this.user.username && this.user.password) {
          this.$store.dispatch("auth/login", this.user).then(
            () => {
              this.$router.push("/app/user");
            },
            (error) => {
              this.loading = false;
              this.message =
                (error.response && error.response.data) ||
                error.message ||
                error.toString();
            }
          );
        }
      });
    },
  },


  // created() {
  //   if (window.localStorage.getItem('authenticated') === 'true') {
  //     this.$router.push('/app/dashboard');
  //   }
  // },
};
</script>
