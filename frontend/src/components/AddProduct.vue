<template>
  <div>
    <div class="field">
      <label class="label">Product Name</label>
      <div class="control">
        <input
          class="input"
          type="text"
          placeholder="Product Name"
          v-model="productName"
        />
      </div>
    </div>

    <div class="field">
      <label class="label">Desciption</label>
      <div class="control">
        <input
          class="input"
          type="text"
          placeholder="Desciption"
          v-model="productDescription"
        />
      </div>
    </div>

    <div class="field">
      <label class="label">Quantity</label>
      <div class="control">
        <input
          class="input"
          type="number"
          placeholder="Quanity"
          min="0"
          v-model="productQuantity"
        />
      </div>
    </div>

    <div class="field">
      <label class="label">Price</label>
      <div class="control">
        <input
          class="input"
          type="text"
          placeholder="Price"
          v-model="productPrice"
        />
      </div>
    </div>

    <div class="control">
      <button class="button is-success" @click="saveProduct">SAVE</button>
    </div>
  </div>
</template>

<script>
// import axios
import axios from "axios";
import { format } from "date-fns";

export default {
  name: "AddProduct",
  data() {
    return {
      productName: "",
      productDescription: "",
      productQuantity: "",
      productPrice: "",
    };
  },
  methods: {
    // Create New product
    async saveProduct() {
      try {
        await axios.post("http://localhost:5000/products", {
          product_name: this.productName,
          product_description: this.productDescription,
          quantity: this.productQuantity,
          price: this.productPrice,
          created_at: format(new Date(), "yyyy-MM-dd HH:mm:ss"),
          updated_at: format(new Date(), "yyyy-MM-dd HH:mm:ss"),
          status: "Active",
        });
        // this.productName = "";
        // this.productPrice = "";
        this.productName = "";
        this.productDescription = "";
        this.productQuantity = "";
        this.productPrice = "";
        this.$router.push("/");
      } catch (err) {
        console.log(err);
      }
    },
  },
};
</script>
