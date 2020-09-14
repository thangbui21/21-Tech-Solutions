<template>
  <div class="visits-page">
    <h1 class="page-title">Dashboard &nbsp;
    <!--
      <small>
        <small>The Lucky One</small>
      </small>
      -->
    </h1>
    <b-row>
      <b-col lg="7">
        <Widget class="bg-transparent">
          <Map />
        </Widget>
      </b-col>

      <!--Mục tiêu tăng trưởng-->
      <b-col lg="4" offset-lg="1">
        <Widget
          class="bg-transparent"
          title="<h5>Mục tiêu tăng trưởng<span class='fw-semi-bold'>&nbsp;</span></h5>"
          settings refresh close customHeader
        >
          <p>Trạng thái: <strong>Đang cập nhật</strong></p>
          <p>
            <span class="circle bg-primary text-white"><i class="la la-map-marker" /></span> &nbsp;
            <!--Nếu là shop quần áo thì có thể là: Áo sơ mi, Áo thun, Quần, ... -->
            20 loại đồ uống, 10 loại đồ ăn vặt, sách.
          </p>
          <div class="row progress-stats">
            <div class="col-md-9 col-12">
              <h6 class="name">Đồ uống</h6>
              <p class="description deemphasize mb-xs">Nước ngọt, cà phê</p>
              <b-progress variant="primary" :value="60" :max="100" class="progress-xs" />
            </div>
            <div class="col-md-3 col-12 text-center">
              <span class="status rounded rounded-lg bg-widget">
                <span><AnimatedNumber :value="75" v-bind="animateNumberOptions"></AnimatedNumber>%</span>
              </span>
            </div>
          </div>
          <!--Sẽ tổ chức CSDL như nào?-->
          <div class="row progress-stats">
            <div class="col-md-9 col-12">
              <h6 class="name">Đồ ăn vặt</h6>
              <p class="description deemphasize mb-xs">Đồ khô, order.</p>
              <b-progress variant="danger" :value="39" :max="100" class="progress-xs" />
            </div>
            <div class="col-md-3 col-12 text-center">
              <span class="status rounded rounded-lg bg-widget">
                <span><AnimatedNumber :value="84" v-bind="animateNumberOptions"></AnimatedNumber>%</span>
              </span>
            </div>
          </div>
          <div class="row progress-stats">
            <div class="col-md-9 col-12">
              <h6 class="name">Sách</h6>
              <p class="description deemphasize mb-xs">Truyện, Sách giáo dục.</p>
              <b-progress variant="success" :value="80" :max="100" class="progress-xs" />
            </div>
            <div class="col-md-3 col-12 text-center">
              <span class="status rounded rounded-lg bg-widget">
                <span><AnimatedNumber :value="92" v-bind="animateNumberOptions"></AnimatedNumber>%</span>
              </span>
            </div>
          </div>
          <h6 class="fw-semi-bold mt">Các mốc đã đạt được</h6>
          <p>Mốc: <strong>5</strong></p>
          <p>
            <span class="circle bg-primary text-white"><i class="la la-cog" /></span>
            &nbsp; 391 đồ uống bán ra, lợi nhuận: 2.000.000
          </p>
          <b-input-group class="mt">
            <b-form-input placeholder="Tìm kiếm..." />
            <b-input-group-append>
              <b-btn variant="default">
                <i class="la la-search" />
              </b-btn>
            </b-input-group-append>
          </b-input-group>
        </Widget>
      </b-col>
    </b-row>


    <b-row>
      <b-col lg="4" xs="12">
        <Widget
          title="<h6> HÀNG NHẬP KHO</h6>"
          close settings customHeader
        >
          <div class="stats-row">
            <div class="stat-item">
              <h6 class="name">Tổng mức tăng</h6>
              <p class="value">76.38%</p>
            </div>
            <div class="stat-item">
              <h6 class="name">Tháng qua</h6>
              <p class="value">10.38%</p>
            </div>
            <div class="stat-item">
              <h6 class="name">Ngày qua</h6>
              <p class="value">3.38%</p>
            </div>
          </div>
          <b-progress variant="success" :value="60"
            :max="100" class="progress-xs" />
          <p>
            <small>
              <span class="circle bg-primary text-white">
                <i class="la la-angle-up" />
              </span>
            </small>
            <span class="fw-semi-bold">&nbsp;17% cao hơn</span>
            &nbsp;so với tháng trước
          </p>
        </Widget>
      </b-col>


      <b-col lg="4" xs="12">
        <Widget
          title="<h6> SẢN PHẨM BÁN RA </h6>"
          close settings customHeader
        >
          <div class="stats-row">
            <div class="stat-item">
              <h6 class="name">Tổng giá trị</h6>
              <p class="value">17 567 318</p>
            </div>
            <div class="stat-item">
              <h6 class="name">Tháng qua</h6>
              <p class="value">55 120</p>
            </div>
            <div class="stat-item">
              <h6 class="name">Ngày qua</h6>
              <p class="value">9 695</p>
            </div>
          </div>
          <b-progress variant="danger"
            :value="60" :max="100" class="progress-xs" />
          <p>
            <small>
              <span class="circle bg-primary text-white">
                <i class="la la-angle-down" />
              </span>
            </small>
            <span class="fw-semi-bold">&nbsp;8% thấp hơn</span>
            &nbsp;so với tháng trước
          </p>
        </Widget>
      </b-col>
      <b-col lg="4" xs="12">
        <Widget
          title="<h6> LỢI NHUẬN THU ĐƯỢC </h6>"
          close settings customHeader
        >
          <div class="stats-row">
            <div class="stat-item">
              <h6 class="name fs-sm">Doanh thu tăng</h6>
              <p class="value">10.85%</p>
            </div>
            <div class="stat-item">
              <h6 class="name fs-sm">Đồ uống</h6>
              <p class="value">3.45%&deg;</p>
            </div>
            <div class="stat-item">
              <h6 class="name fs-sm">Đồ ăn</h6>
              <p class="value">4.2%</p>
            </div>
                        <div class="stat-item">
              <h6 class="name fs-sm">Sách</h6>
              <p class="value">2.2%</p>
            </div>
          </div>
          <b-progress variant="primary" :value="60"
            :max="100" class="progress-xs" />
          <p>
            <small>
              <span class="circle bg-primary text-white">
                <i class="la la-plus" />
              </span>
            </small>
            <span class="fw-semi-bold">&nbsp;cao hơn 5%</span>
            &nbsp;so với tháng trước.
          </p>
        </Widget>
      </b-col>
    </b-row>

    <!--Các ý tưởng-->
    <b-row>
      <b-col lg="4" xs="12">
        <Widget
          title="<h6><span class='badge badge-danger'>New</span> Tin nhắn</h6>"
          refresh close customHeader
        >
          <div class="widget-body p-0">
            <div class="list-group list-group-lg">
              <a class="list-group-item" href="#">
                <span class="thumb-sm float-left mr">
                  <img class="rounded-circle" src="../../assets/people/a2.jpg" alt="..." />
                  <i class="status status-bottom bg-success" />
                </span>
                <div>
                  <h6 class="m-0">Bùi Nguyện-Cơ sở 1</h6>
                  <p class="help-block text-ellipsis m-0">
                    Anh ơi!&apos; Cửa hàng thiếu nguyên liệu làm trà
                  </p>
                </div>
              </a>
              <a class="list-group-item" href="#">
                <span class="thumb-sm float-left mr">
                  <img class="rounded-circle" src="../../assets/people/a4.jpg" alt="..." />
                  <i class="status status-bottom bg-success" />
                </span>
                <div>
                  <h6 class="m-0">Trạng Quỳnh-Cơ sở 2</h6>
                  <p class="help-block text-ellipsis m-0">
                    Khách đang muốn mua thêm sách IT, anh xem chỗ nào còn mang qua em
                  </p>
                </div>
              </a>
              <a class="list-group-item" href="#">
                <span class="thumb-sm float-left mr">
                  <img class="rounded-circle" src="../../assets/people/a1.jpg" alt="..." />
                  <i class="status status-bottom bg-primary" />
                </span>
                <div>
                  <h6 class="m-0">Minh Nguyễn-Cơ sở 3</h6>
                  <p class="help-block text-ellipsis m-0">Anh rảnh không? Đi cà phê đê</p>
                </div>
              </a>
              <a class="list-group-item" href="#">
                <span class="thumb-sm float-left mr">
                  <img class="rounded-circle" src="../../assets/people/a7.jpg" alt="..." />
                  <i class="status status-bottom bg-danger" />
                </span>
                <div>
                  <h6 class="m-0">Diễm Nguyễn</h6>
                  <p class="help-block text-ellipsis m-0">Tối có về ăn cơm không?</p>
                </div>
              </a>
            </div>
          </div>
          <footer class="bg-widget mt">
            <input type="search" class="form-control form-control-sm" placeholder="Search" />
          </footer>
        </Widget>
      </b-col>



      <b-col lg="4" xs="12">
        <Widget
          title="<h6>Doanh thu<span class='fw-semi-bold'></span></h6>"
          close customHeader
        >
          <div class="widget-body">
            <h3>Đã kiếm được 30M</h3>
            <p class="fs-mini text-muted mb mt-sm">
              Mục tiêu <span class="fw-semi-bold"></span> trong các ngày tới
              là <span class="fw-semi-bold">40M</span>.
            </p>
          </div>
          <div class="widget-bottom-overflow">
            <table class="table table-striped table-sm">
              <thead class="no-bd">
                <tr>
                  <th>
                    <div class="checkbox abc-checkbox">
                      <input
                        type="checkbox"
                        class="mt-0"
                        id="checkbox210"
                        @click="checkTable(0)"
                        :checked="checkedArr[0]"
                      />
                      <label for="checkbox210" />
                    </div>
                  </th>
                  <th>&nbsp;</th>
                  <th>&nbsp;</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <div class="checkbox abc-checkbox">
                      <input
                        type="checkbox"
                        class="mt-0"
                        id="checkbox212"
                        @click="checkTable(1)"
                        :checked="checkedArr[1]"
                      />
                      <label for="checkbox212" />
                    </div>
                  </td>
                  <td>Đồ uống</td>
                  <td class="text-align-right fw-semi-bold">20M</td>
                </tr>
                <tr>
                  <td>
                    <div class="checkbox abc-checkbox">
                      <input
                        type="checkbox"
                        class="mt-0"
                        id="checkbox214"
                        @click="checkTable(2)"
                        :checked="checkedArr[2]"
                      />
                      <label for="checkbox214" />
                    </div>
                  </td>
                  <td>Đồ ăn</td>
                  <td class="text-align-right fw-semi-bold">10M</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div class="widget-body mt-xlg chart-overflow-bottom">
            <area-chart class="area-chart" height="100px" :options="{legend: false, scales: {yAxes: [{display: false}], xAxes: [{display: false}]}}"  :chart-data="dataCollection"></area-chart>
          </div>
        </Widget>
      </b-col>
      <b-col lg="4" xs="12">
        <Widget
          title="<h6>Lịch</h6" bodyClass="p-0"
          settings close customHeader>
          <Calendar />
          <div class="list-group fs-mini">
            <a href="#" class="list-group-item text-ellipsis">
              <span class="badge badge-pill bg-primary float-right">6:45</span>
              Ngủ dậy
            </a>
            <a href="#" class="list-group-item text-ellipsis">
              <span class="badge badge-pill badge-success float-right">9:41</span>
              Sang cơ sỏ 1 Hà Đông
            </a>
          </div>
        </Widget>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import Vue from 'vue';
import Widget from '@/components/Widget/Widget';
import Map from './components/Map/Map';
import Calendar from './components/Calendar/Calendar';
import AreaChart from './components/AreaChart/AreaChart';
import AnimatedNumber from "animated-number-vue";

export default {
  name: 'Visits',
  components: {
    Widget, Map, Calendar, AreaChart, AnimatedNumber
  },
  data() {
    return {
      animateNumberOptions: {
        duration: 2000,
        easing: 'easeInQuad',
        formatValue(value) {
          return value.toFixed(0);
        }
      },
      checkedArr: [false, false, false],
      dataCollection: null,
    };
  },
  methods: {
    checkTable(id) {
      let arr = [];
      if (id === 0) {
        const val = !this.checkedArr[0];
        for (let i = 0; i < this.checkedArr.length; i += 1) {
          arr[i] = val;
        }
      } else {
        arr = this.checkedArr;
        arr[id] = !arr[id];
      }
      if (arr[0]) {
        let count = 1;
        for (let i = 1; i < arr.length; i += 1) {
          if (arr[i]) {
            count += 1;
          }
        }
        if (count !== arr.length) {
          arr[0] = !arr[0];
        }
      }
      Vue.set(this, 'checkedArr', arr);
    },
    fillData () {
      this.dataCollection = {
        labels: [this.getRandomInt(), this.getRandomInt(), this.getRandomInt(), this.getRandomInt(), this.getRandomInt(), this.getRandomInt(), this.getRandomInt()],
        datasets: [
          {
            label: 'Data One',
            backgroundColor: '#1870DC',
            borderColor: 'transparent',
            data: [this.getRandomInt(), this.getRandomInt(), this.getRandomInt(), this.getRandomInt(), this.getRandomInt(), this.getRandomInt(), this.getRandomInt()]
          }, {
            label: 'Data Two',
            backgroundColor: '#F45722',
            borderColor: 'transparent',
            data: [this.getRandomInt(), this.getRandomInt(), this.getRandomInt(), this.getRandomInt(), this.getRandomInt(), this.getRandomInt(), this.getRandomInt()]
          }
        ]
      }
    },
    getRandomInt () {
      return Math.floor(Math.random() * (50 - 5 + 1)) + 5
    }
  },
  mounted () {
    this.fillData();
  },
};
</script>

<style src="./Visits.scss" lang="scss" />
