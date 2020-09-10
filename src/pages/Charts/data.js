//import axios from "axios";

export function Superman() {
    return {
        getProducts() {
            // let res =  axios.get("http://localhost:8080/api/products");
            // let data = res.data;
            return [1,2,3,4,5,6,7];
        }
    }
}

export const Products = Superman();
export default {
    Products
}

{/* <template>
<div>{{id()}}</div>
</template>

<script>
import axios from "axios";
export default {
    data() {
        return {
            info: this.id(),
            name: this.productName(),
        };
    },
    methods: {
        id() {
            var id = [];
            for (var key in this.info) {
                id.push(this.info[key]["id"]);
            }
            return id;
        },
        productName() {
            var productName = [];
            for (var key in this.info) {
                productName.push(this.info[key]["productName"]);
            }
            return productName;
        },
        productPrice() {
            var productPrice = [];
            for (var key in this.info) {
                productPrice.push(this.info[key]["productPrice"]);
            }
            return productPrice;
        },
    },

    mounted() {
        axios
            .get("http://localhost:8080/api/products")
            .then((response) => (this.info = response.data));
    },
};
</script> */}

{/* <template>
    
    </template>
    
    <script>
    export default {
        name: "Vue",
        mixins: [],
        extends: {},
        props: {},
        data() {},
        computed: {},
        components: {},
        watch: {},
        methods: {},
    
        beforeCreate() {
            
        },
        created() {},
        beforeMount() {
            
        },
    
        mounted() {
            
        },
        beforeUpdate() {
            
        },
    }
    </script> */}