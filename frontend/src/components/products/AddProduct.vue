<template>
  <div class="add-product-container">
    <user-list></user-list>
    <div class="add-product-card">
      <h1 class="add-title">Add New Product</h1>
      <div class="input-container">
        <div class="two-col-container">
          <div class="field">
            <label class="label" for="productName">Product Name</label>
            <input
              id="productName"
              type="text"
              class="input"
              placeholder="Enter product name"
              v-model="productName"
            />
          </div>
          <div class="field">
            <label class="label" for="price">Price</label>
            <input
              id="price"
              type="text"
              class="input"
              placeholder="Enter product price"
              v-model="productPrice"
            />
          </div>
        </div>
        <div class="field field-desc">
          <label class="label" for="Description">Desciption</label>
          <textarea
            class="input"
            type="textarea"
            rows="15"
            cols="60"
            placeholder="Enter product desciption"
            v-model="productDescription"
          />
        </div>
        <div class="two-col-container">
          <div class="field-qty">
            <label class="label">Quantity</label>
            <div class="input-qty">
              <button class="qty-btn" @click="incrementQuantity">+</button>
              <input
                class="qty-input"
                v-model.number="productQuantity"
                @input="handleQuantityInput"
                min="0"
              />
              <button class="qty-btn" @click="decrementQuantity">-</button>
            </div>
          </div>
          <div class="field-status">
            <label class="label">Status</label>
            <div class="input-status">
              <button
                :class="[
                  'status-btn',
                  'status-active-btn',
                  { 'selected-status': productStatus === 'Active' },
                ]"
                @click="updateStatus('Active')"
              >
                Active
              </button>
              <button
                :class="[
                  'status-btn',
                  'status-inactive-btn',
                  { 'selected-status': productStatus === 'Inactive' },
                ]"
                @click="updateStatus('Inactive')"
              >
                Inactive
              </button>
            </div>
          </div>
        </div>
      </div>
      <div class="control">
        <button class="save-btn" @click="saveProduct">SAVE</button>
      </div>
    </div>
  </div>
</template>

<script>
// import axios
import axios from "axios";
import { format } from "date-fns";
import UserList from "../users/UserList.vue";

export default {
  components: { UserList },
  name: "AddProduct",
  data() {
    return {
      productName: "",
      productDescription: "",
      productQuantity: 1,
      productPrice: "0.00",
      productStatus: "Active",
    };
  },
  computed: {
    getSelectedClass() {
      return [this.productStatus === "Active" ? "selected-status" : ""];
    },
  },
  methods: {
    // Create New product
    async saveProduct() {
      try {
        await axios.post("http://flowerstore-crud.vercel.app/products", {
          product_name: this.productName,
          product_description: this.productDescription,
          quantity: this.productQuantity,
          price: this.productPrice,
          created_at: format(new Date(), "yyyy-MM-dd HH:mm:ss"),
          updated_at: format(new Date(), "yyyy-MM-dd HH:mm:ss"),
          status: this.productStatus,
        });
        this.productName = "";
        this.productDescription = "";
        this.productQuantity = "";
        this.productPrice = "";
        this.$router.push("/");
      } catch (err) {
        console.log(err);
      }
    },
    incrementQuantity() {
      this.productQuantity++;
    },
    decrementQuantity() {
      if (this.productQuantity > 0) {
        this.productQuantity--;
      }
    },
    handleQuantityInput() {
      if (this.productQuantity < 0) {
        this.productQuantity = 0;
      }
    },
    updateStatus(newStatus) {
      if (this.productStatus !== newStatus) {
        this.productStatus = newStatus;
      }
    },
  },
};
</script>

<style src="../../styles/addproduct.css"></style>
