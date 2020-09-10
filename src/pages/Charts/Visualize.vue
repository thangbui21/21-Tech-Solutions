  <template>
<div>
    <p>Noooo</p>
    <b-row>
        <Widget title="High" close collapse customHeader>
            <p>Nothing</p>
            <highcharts :constructorType="'stockChart'" class="hc" :options="chartOptions" ref="chart"></highcharts>
        </Widget>
    </b-row>
</div>
</template>

<script>
export default {
    data() {
        return {
            chartOptions: {
                series: [{
                    data: [1, 2, 3]
                }]
            }
        };
    }
};
</script>
