<template>
  <div class="add-product-container">
    <user-list @user-selected="getOrdersByUserId"></user-list>
    <div class="products-container">
      <div v-for="item in items" :key="item.id" class="card">
        <img src="../../assets/dummy-img.png" alt="dummy product" />
        <h2 class="product-name">{{ item.product_name }}</h2>
        <p class="product-desc">{{ item.product_description }}</p>
        <div class="product-qty">
          <p class="product-qty-title">Qty</p>
          <p class="product-qty-num">{{ item.quantity }}</p>
        </div>
        <p class="product-price">₱{{ item.price }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "OrderList",
  data() {
    return {
      items: [],
    };
  },

  created() {
    this.getOrdersByUserId();
  },

  methods: {
    async getOrdersByUserId(userId) {
      try {
        const response = await axios.get(`http://localhost:5000/orders/${userId}`);
        this.items = response.data;
      } catch (err) {
        console.log(err);
      }
    },
  },
};
</script>
