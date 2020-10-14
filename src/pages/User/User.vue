<template>
  <div>
  <h1 class="page-title">
      User Profile &nbsp;
      <small>
        <small>Các thông tin cửa hàng của bạn</small>
      </small>
    </h1>
    <b-row>
      <b-col lg="6" xs="6">
        <b-card
          class="overflow-hidden"
        >
        <!--img-src="https://picsum.photos/900/250/?image=3"-->
          <b-row>
            <b-col cols="5" md="6">
              <div style="text-align: center">
                <h5 class="fw-normal">
                  The<span class="fw-semi-bold"> 21 Company</span>
                </h5>
                <p>Enterprise Solutions</p>
              </div>
              <b-row>
                <b-button variant="success" style="margin-left: 20px">
                  Đồ uống
                </b-button>
                <b-button variant="danger" style="margin-left: 20px">
                  Đồ ăn nhẹ
                </b-button>
                <b-button variant="primary" style="margin-left: 20px">
                  Sách
                </b-button>
                <b-button variant="default" style="margin-left: 20px">
                  Product 4
                </b-button>
              </b-row>
            </b-col>
            <b-col>

            <b-row>
              <b-col cols="6"><div>
                <h5><strong>Contact</strong></h5>
                <table>
                  <tr>
                    <td>Phone</td>
                    <td>0702220209</td>
                  </tr>
                  <tr>
                    <td>Email</td>
                    <td>admin@control.com</td>
                  </tr>
                  <tr>
                    <td>Address</td>
                    <td>Ha noi</td>
                  </tr>
                </table>
              </div></b-col>

              <b-col> <div style="align: center"><b-button variant="default" size="lg">This is my kingdom come</b-button></div></b-col>
            </b-row>
              
             
            </b-col>
            <!--  
            <b-col>
              <div>
                <h2>251 post</h2>
                <h6>King</h6>
                <span class="badge badge-success">Today task</span>
              </div>
              <div></div>
            </b-col>
          -->
          </b-row>
          <b-card-text></b-card-text> </b-card
      ></b-col>
    </b-row>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {},
};
</script>

<style>
</style>
