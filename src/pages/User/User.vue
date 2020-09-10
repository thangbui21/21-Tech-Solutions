<template>
  <div>{{ info }}</div>
</template>

<script>
//import axios from 'axios';
import UserService from '../../services/user.service'
export default {
  name: "User",
  data() {
    return {
        info: null
    }
  },

  mounted() {
    UserService
      .get("/api/products")
      .then((response) => (this.info = response.data));
  },
};
</script>