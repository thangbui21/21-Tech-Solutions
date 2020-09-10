import axios from "axios";


export function Shop() {
    return {
        store() {
            var res = axios.get("http://localhost:8080/api/products");
            var data = res.data.json();
            return data;
        },
        id() {
            var id = [];
            for (var key in this.info) {
                id.push(this.info[key]["id"]);
            }
            return id;
        }, productName() {
            var productName = [];
            for (var key in this.info) {
                productName.push(this.info[key]['productName']);
            }
            return productName;
        },
        productPrice() {
            var info = [{
                "id": "2A",
                "productName": "Haniken",
                "type": "Beear",
                "productPrice": 20.0,
                "soldToday": 10.0,
                "inStock": 100.0
            }];

            var productPrice = [];
            for (var key in info) {
                productPrice.push(info[key]['productPrice']);
            }
            return productPrice;
        },
    }
}

export const Products = Shop()
export default {
    Products
}