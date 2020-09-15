<template>
  <div>
    <Widget
      title="<h5>Table <span class='fw-semi-bold'>Styles</span></h5>"
      customHeader
      ettings
      close
    >
      <h3>
        Bordered
        <span class="fw-semi-bold">Table</span>
      </h3>
      <p>
        Each row is highlighted. You will never lost there. That&apos;s how
        all of us learned in school the table should look like. Just add
        <code>.table-bordered</code> to it.
      </p>
      <table class="table table-bordered table-lg mt-lg mb-0">
        <thead class="text-uppercase">
          <tr>
            <th>
              <div class="abc-checkbox">
                <input
                  type="checkbox"
                  id="checkbox10"
                  :checked="checkboxes2[0]"
                  @change="event => checkAll(event, 'checkboxes2')"
                />
                <label for="checkbox10" />
              </div>
            </th>
            <th>Product</th>
            <th class="text-right">Price</th>
            <th class="text-center">Sales</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <div class="abc-checkbox">
                <input
                  type="checkbox"
                  id="checkbox11"
                  :checked="checkboxes2[1]"
                  @change="event => changeCheck(event, 'checkboxes2', 1)"
                />
                <label for="checkbox11" />
              </div>
            </td>
            <td>On the Road</td>
            <td class="text-right">$25 224.2</td>
            <td class="text-center">
              <Sparklines :data="getRandomData()" :options="getRandomColor()"></Sparklines>
            </td>
          </tr>
          <tr>
            <td>
              <div class="abc-checkbox">
                <input
                  type="checkbox"
                  id="checkbox12"
                  :checked="checkboxes2[2]"
                  @change="event => changeCheck(event, 'checkboxes2', 2)"
                />
                <label for="checkbox12" />
              </div>
            </td>
            <td>HP Core i7</td>
            <td class="text-right">$87 346.1</td>
            <td class="text-center">
              <Sparklines :data="getRandomData()" :options="getRandomColor()"></Sparklines>
            </td>
          </tr>
          <tr>
            <td>
              <div class="abc-checkbox">
                <input
                  type="checkbox"
                  id="checkbox13"
                  :checked="checkboxes2[3]"
                  @change="event => changeCheck(event, 'checkboxes2', 3)"
                />
                <label for="checkbox13" />
              </div>
            </td>
            <td>Let&apos;s Dance</td>
            <td class="text-right">$57 944.6</td>
            <td class="text-center">
              <Sparklines :data="getRandomData()" :options="getRandomColor()"></Sparklines>
            </td>
          </tr>
          <tr>
            <td>
              <div class="abc-checkbox">
                <input
                  type="checkbox"
                  id="checkbox14"
                  :checked="checkboxes2[4]"
                  @change="event => changeCheck(event, 'checkboxes2', 4)"
                />
                <label for="checkbox14" />
              </div>
            </td>
            <td>Air Pro</td>
            <td class="text-right">$118 533.1</td>
            <td class="text-center">
              <Sparklines :data="getRandomData()" :options="getRandomColor()"></Sparklines>
            </td>
          </tr>
          <tr>
            <td>
              <div class="abc-checkbox">
                <input
                  type="checkbox"
                  id="checkbox15"
                  :checked="checkboxes2[5]"
                  @change="event => changeCheck(event, 'checkboxes2', 5)"
                />
                <label for="checkbox15" />
              </div>
            </td>
            <td>Version Control</td>
            <td class="text-right">$72 854.5</td>
            <td class="text-center">
              <Sparklines :data="getRandomData()" :options="getRandomColor()"></Sparklines>
            </td>
          </tr>
        </tbody>
      </table>
    </Widget>
  </div>
</template>

<script>
import Vue from "vue";
import Widget from "@/components/Widget/Widget";
import Sparklines from "../../../components/Sparklines/Sparklines";
import UserService from "../../../services/user.service";

export default {
  name: "Tables",
  components: { Widget, Sparklines },
  data() {
    return {
      info: null,
      checkboxes1: [false, false, false, false],
      checkboxes2: [false, false, false, false, false, false],
      checkboxes3: [false, false, false, false, false, false],
    };
  },
  // data() {
  //   return {
  //       info: null
  //   }
  // },
  mounted() {
    UserService.get("/api/products").then(
      (response) => (this.info = response.data)
    );
  },
  methods: {
    parseDate(date) {
      const dateSet = date.toDateString().split(" ");
      return `${date.toLocaleString("en-us", { month: "long" })} ${
        dateSet[2]
      }, ${dateSet[3]}`;
    },
    checkAll(ev, checkbox) {
      const checkboxArr = new Array(this[checkbox].length).fill(
        ev.target.checked
      );
      Vue.set(this, checkbox, checkboxArr);
    },
    changeCheck(ev, checkbox, id) {
      this[checkbox][id] = ev.target.checked;
      if (!ev.target.checked) {
        this[checkbox][0] = false;
      }
    },
    getRandomData() {
      const result = [];
      for (let i = 0; i <= 8; i += 1) {
        result.push(Math.floor(Math.random() * 20) + 1);
      }
      return [{ data: result }];
    },
    getRandomColor() {
      const colors = ["#547fff", "#9964e3", "#f55d5d", "#ffc247", "#3abf94"];
      return { colors: [colors[Math.floor(Math.random() * colors.length)]] };
    },
  },
};
</script>

<style src="./SubProduct2.scss" lang="scss" scoped />