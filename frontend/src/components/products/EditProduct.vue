<template>
  <div class="add-product-container">
    <user-list></user-list>
    <div class="add-product-card">
      <h1 class="add-title">Edit {{ productName }}</h1>
      <div class="input-container">
        <div class="two-col-container">
          <div class="field">
            <label class="label" for="productName">Product Name</label>
            <input
              id="productName"
              type="text"
              class="input"
              placeholder="Enter product name"
              :disabled="productStatus === 'Inactive'"
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
              :disabled="productStatus === 'Inactive'"
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
            :disabled="productStatus === 'Inactive'"
            v-model="productDescription"
          />
        </div>
        <div class="two-col-container">
          <div class="field-qty">
            <label class="label">Quantity</label>
            <div class="input-qty">
              <button
                class="qty-btn"
                @click="incrementQuantity"
                :disabled="productStatus === 'Inactive'"
              >
                +
              </button>
              <input
                class="qty-input"
                v-model.number="productQuantity"
                @input="handleQuantityInput"
                :disabled="productStatus === 'Inactive'"
                min="0"
              />
              <button
                class="qty-btn"
                @click="decrementQuantity"
                :disabled="productStatus === 'Inactive'"
              >
                -
              </button>
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
        <div class="warning-container" v-if="productStatus === 'Inactive'">
          <p class="warning-message">
            This product is currently inactive. To edit other information,
            please update the status to "Active".
          </p>
        </div>
      </div>
      <div class="control">
        <button class="save-btn" @click="updateProduct">SAVE</button>
      </div>
    </div>
  </div>
</template>

<script>
// import axios
import axios from "axios";
import UserList from "../users/UserList.vue";

export default {
  components: { UserList },
  name: "EditProduct",
  data() {
    return {
      productName: "",
      productDescription: "",
      productQuantity: "",
      productPrice: "",
      productStatus: "",
    };
  },
  created: function () {
    this.getProductById();
  },
  methods: {
    // Get Product By Id
    async getProductById() {
      try {
        const response = await axios.get(
          `https://flowerstore-crud.vercel.app/products/${this.$route.params.id}`
        );
        this.productName = response.data.product_name;
        this.productDescription = response.data.product_description;
        this.productQuantity = response.data.quantity;
        this.productPrice = response.data.price;
        this.productStatus = response.data.status;
      } catch (err) {
        console.log(err);
      }
    },

    // Update product
    async updateProduct() {
      try {
        await axios.put(
          `https://flowerstore-crud.vercel.app/products/${this.$route.params.id}`,
          {
            product_name: this.productName,
            product_description: this.productDescription,
            quantity: this.productQuantity,
            price: this.productPrice,
            status: this.productStatus,
          }
        );
        console.log(this.productStatus);
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
