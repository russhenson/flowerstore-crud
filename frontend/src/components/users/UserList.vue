<template>
  <div class="user-container">
    <div class="user-card">
      <img class="user-pic" src="../../assets/nopicture.png" alt="" />
      <h1 class="user-name">{{ firstName }} {{ lastName }}</h1>
      <p :class="getStatusClass">{{ status }}</p>
      <div class="user-info">
        <img src="../../assets/mail.svg" alt="" />
        <p class="user-email">
          {{ emailAddress }}
        </p>
      </div>
      <div class="user-info">
        <img src="../../assets/phone.svg" alt="" />
        <p class="user-mobile">{{ mobileNumber }}</p>
      </div>
      <div class="user-info">
        <img src="../../assets/home.svg" alt="" />
        <p class="user-address">{{ address }}</p>
      </div>
      <div class="user-btns">
        <button class="user-btn" @click="prevUser">Prev</button>
        <button class="user-btn" @click="nextUser">Next</button>
      </div>
      <p class="note">Click "View Orders" and navigate through each orders using "Prev" and "Next" buttons.</p>

      <div class="nav">
        <router-link :to="{ name: 'Index' }" class="router-link-btn"
          >View Products</router-link
        >
        <router-link :to="{ name: 'Orders' }" class="router-link-btn"
          >View Orders</router-link
        >
        <router-link :to="{ name: 'Create' }" class="router-link-btn"
          >Add Product</router-link
        >
      </div>

      <p class="credits">made by russ henson</p>
    </div>
  </div>
</template>

<script>
// import axios
import axios from "axios";

export default {
  name: "UserList",
  data() {
    return {
      userId: 1,
      firstName: "",
      lastName: "",
      emailAddress: "",
      mobileNumber: "",
      address: "",
      status: "",
      totalUsers: 0,
    };
  },
  created: function () {
    this.getUsers();
  },
  computed: {
    getStatusClass() {
      return [
        "user-status",
        this.status === "Active"
          ? "user-status-active"
          : "user-status-inactive",
      ];
    },
  },
  methods: {
    async getUsers() {
      try {
        const response = await axios.get("http://flowerstore-crud.vercel.app/users");
        this.totalUsers = response.data.length;
        this.getUserById(this.userId);
        this.$emit("user-selected", this.userId);
      } catch (err) {
        console.log(err);
      }
    },
    async getUserById(id) {
      try {
        const response = await axios.get(`http://flowerstore-crud.vercel.app/users/${id}`);
        this.firstName = response.data.first_name;
        this.lastName = response.data.last_name;
        this.emailAddress = response.data.email_address;
        this.mobileNumber = response.data.mobile_number;
        this.address = response.data.address;
        this.status = response.data.status;
      } catch (err) {
        console.log(err);
      }
    },
    prevUser() {
      this.userId = ((this.userId - 2 + this.totalUsers) % this.totalUsers) + 1;
      this.getUserById(this.userId);
      this.$emit("user-selected", this.userId);
    },
    nextUser() {
      this.userId = (this.userId % this.totalUsers) + 1;
      this.getUserById(this.userId);
      this.$emit("user-selected", this.userId);
    },

    async updateUser() {
      try {
        await axios.put(
          `http://flowerstore-crud.vercel.app/products/${this.$route.params.id}`,
          {
            product_name: this.productName,
            product_description: this.productDescription,
            quantity: this.productQuantity,
            price: this.productPrice,
          }
        );
        this.$router.push("/");
      } catch (err) {
        console.log(err);
      }
    },
  },
};
</script>

<style src="../../styles/users.css"></style>
