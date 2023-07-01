<template>
  <div class="products-container">
    
    <div
      v-for="item in items"
      :key="item.id"
      :class="['card', { inactive: item.status === 'Inactive' }]"
    >
      <img src="../../assets/dummy-img.png" alt="dummy product" />
      <h2 class="product-name">{{ item.product_name }}</h2>
      <p class="product-desc">{{ item.product_description }}</p>
      <div class="product-qty">
        <p class="product-qty-title">Qty</p>
        <p class="product-qty-num">{{ item.quantity }}</p>
      </div>
      <p class="product-price">₱{{ item.price }}</p>
      <div class="product-actions">
        <router-link
          :to="{ name: 'Edit', params: { id: item.id } }"
          :class="[
            'product-edit-btn',
            { exception: item.status === 'Inactive' },
          ]"
        >
          Edit
        </router-link>
        <button
          class="product-delete-btn"
          @click="deleteProduct(item.id)"
          :disabled="item.status === 'Inactive'"
          v-if="item.status !== 'Inactive'"
        >
          Delete
        </button>
      </div>
    </div>
  </div>
</template>

<script>
// import axios
import axios from "axios";

export default {
  name: "ProductList",
  data() {
    return {
      items: [],
    };
  },

  created() {
    this.getProducts();
  },

  methods: {
    // Get All Products
    async getProducts() {
      try {
        const response = await axios.get("http://localhost:5000/products");
        this.items = response.data.reverse();
      } catch (err) {
        console.log(err);
      }
    },

    // Delete Product
    async deleteProduct(id) {
      try {
        await axios.delete(`http://localhost:5000/products/${id}`);
        this.getProducts();
      } catch (err) {
        console.log(err);
      }
    },
  },
};
</script>

<style src="../../styles/products.css"></style>
