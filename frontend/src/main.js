import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
  
import App from './App.vue'
import Create from './components/products/AddProduct.vue'
import Edit from './components/products/EditProduct.vue'
import Products from './components/products/ProductList.vue';
import Users from './components/users/UserList.vue';
import Orders from './components/orders/OrderList.vue';
import Index from './pages/LandingView.vue';
// import Index from './components/products/ProductList.vue'
  
// Vue.use(VueRouter)
  
// Vue.config.productionTip = false
  
const routes = [
    {
        name: 'Create',
        path: '/create',
        component: Create
    },
    {
        name: 'Edit',
        path: '/edit/:id',
        component: Edit
    },
    {
        name: 'Orders',
        path: '/orders',
        component: Orders
    },
    {
        name: 'Index',
        path: '/',
        component: Index
    },
];
  
const router = createRouter({
  history: createWebHistory(),
  routes: routes,
});
  
const app = createApp(App);
app.component('product-list', Products);
app.component('user-list', Users);

app.use(router);
app.mount('#app');