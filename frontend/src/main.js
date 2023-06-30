import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
  
import App from './App.vue'
import Create from './components/AddProduct.vue'
import Edit from './components/EditProduct.vue'
import Index from './components/ProductList.vue'
  
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
app.use(router);
app.mount('#app');