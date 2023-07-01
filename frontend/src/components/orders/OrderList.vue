<template>
  <div class="add-product-container">
    <user-list @user-selected="getOrdersByUserId"></user-list>
    <div class="orders-container">
      <h1>Order Summary</h1>
      <table class="order-table">
        <tr class="order-header">
          <th class="small-title">Order ID</th>
          <th class="small-title">Product ID</th>
          <th>Name</th>
          <th class="small-title">Price</th>
        </tr>
        <tr
          v-for="(item, index) in items"
          :key="item.order_id"
          :class="{
            'order-item-row': true,
            'last-row': index === items.length - 1,
          }"
        >
          <td>
            <span class="order-id-item">
              {{ item.order_id }}
            </span>
          </td>
          <td>
            <span
              :class="{
                'prod-id-item': true,
                'inactive-product': item.status === 'Inactive',
              }"
            >
              {{ item.id }}
            </span>
          </td>
          <td :class="{ 'inactive-text': item.status === 'Inactive' }">
            {{ item.product_name }}
          </td>
          <td :class="{ 'inactive-text': item.status === 'Inactive' }">
            ₱{{ item.price }}
          </td>
        </tr>
        <tr class="subtotal-row">
          <td>Subtotal</td>
          <td></td>
          <td></td>
          <td>₱{{ computeSubtotal() }}</td>
        </tr>
        <tr class="shipping-row">
          <td colspan="3">Shipping</td>
          <td>₱{{ shipping }}</td>
        </tr>
        <tr class="total-row">
          <td colspan="3">Total</td>
          <td>₱{{ computeTotal() }}</td>
        </tr>
        <tr>
          <td colspan="3" class="summary-warning">Disabled products are not included.</td>
        </tr>
      </table>
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
      shipping: 0,
    };
  },

  created() {
    this.getOrdersByUserId();
    this.generateShipping();
  },

  methods: {
    async getOrdersByUserId(userId) {
      try {
        const response = await axios.get(
          `http://localhost:5000/orders/${userId}`
        );
        this.items = response.data;
      } catch (err) {
        console.log(err);
      }
    },
    generateShipping() {
      const min = 20; // Minimum value in increments of 5 (100/5)
      const max = 60; // Maximum value in increments of 5 (300/5)
      const randomValue = Math.floor(Math.random() * (max - min + 1)) + min;
      const shippingValue = randomValue * 5; // Multiply by 5 to get the final shipping value
      this.shipping = shippingValue.toFixed(2);
    },

    computeSubtotal() {
      const activeItems = this.items.filter((item) => item.status === "Active");

      let subtotal = 0;
      for (let i = 0; i < activeItems.length; i++) {
        subtotal += parseFloat(activeItems[i].price);
      }

      return subtotal;
    },

    computeTotal() {
      const subtotal = this.computeSubtotal();
      const total = subtotal + parseFloat(this.shipping);
      return total;
    },
  },
};
</script>

<style src="../../styles/orders.css"></style>
