<template>
        <Widget
          title="<h5>Table <span class='fw-semi-bold'>Styles</span></h5>"
          customHeader settings close
        >
          <h3>Overflow <span class="fw-semi-bold">Table</span></h3>
          <p>
            Add any non-bordered .table within a widget for a seamless design.
            Awesome look for no cost.
            Just wrap the table with simple css class <code>.widget-table-overflow</code> inside
            of widget
          </p>
          <div class="widget-table-overflow">
            <table class="table table-striped table-lg mt-lg mb-0">
              <thead>
                <tr>
                  <th>
                    <div class="abc-checkbox">
                      <input type="checkbox"
                        id="checkbox20" :checked="checkboxes3[0]"
                        @change="event => checkAll(event, 'checkboxes3')"
                      />
                      <label for="checkbox20" />
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
                      <input type="checkbox"
                        id="checkbox21" :checked="checkboxes3[1]"
                        @change="event => changeCheck(event, 'checkboxes3', 1)"
                      />
                      <label for="checkbox21" />
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
                      <input type="checkbox"
                        id="checkbox22" :checked="checkboxes3[2]"
                        @change="event => changeCheck(event, 'checkboxes3', 2)"
                      />
                      <label for="checkbox22" />
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
                      <input type="checkbox"
                        id="checkbox23" :checked="checkboxes3[3]"
                        @change="event => changeCheck(event, 'checkboxes3', 3)"
                      />
                      <label for="checkbox23" />
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
                      <input type="checkbox"
                        id="checkbox24" :checked="checkboxes3[4]"
                        @change="event => changeCheck(event, 'checkboxes3', 4)"
                      />
                      <label for="checkbox24" />
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
                      <input type="checkbox"
                        id="checkbox25" :checked="checkboxes3[5]"
                        @change="event => changeCheck(event, 'checkboxes3', 5)"
                      />
                      <label for="checkbox25" />
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
          </div>
        </Widget>
      
</template>

<script>
import Vue from 'vue';
import Sparklines from '../../../components/Sparklines/Sparklines'
export default {
    components: {
        Sparklines,
    },
    name: 'Target',
  methods: {
    parseDate(date) {
      const dateSet = date.toDateString().split(' ');
      return `${date.toLocaleString('en-us', { month: 'long' })} ${dateSet[2]}, ${dateSet[3]}`;
    },
    checkAll(ev, checkbox) {
      const checkboxArr = (new Array(this[checkbox].length)).fill(ev.target.checked);
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

      return [{data: result}];
    },
    getRandomColor() {
      const colors = ['#547fff', '#9964e3', '#f55d5d', '#ffc247', '#3abf94'];
      return {colors: [colors[Math.floor(Math.random() * colors.length)]]}
    }
  
  },

}
</script>
<style src="./Target.scss" lang="scss" scoped />