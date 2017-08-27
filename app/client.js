// Import JS dependencies
import Vue from 'vue';
import VueRouter from 'vue-router';
import 'bootstrap';

// Import stylesheet
import './styles/main.scss';


// Import Vue components
import Body from './template/Body.vue';
import Dashboard from './pages/dashboard/Dashboard.vue';
import ProductList from './pages/product/ProductList.vue';
import ProductDetail from './pages/product/ProductDetail.vue';


// Define routes
Vue.use( VueRouter );

const router = new VueRouter({
    linkActiveClass: 'is-active',
    mode: 'history',
    routes: [
        { path: '/', component: Dashboard },
        { path: '/products', component: ProductList }
    ]
})


// Mount Vue
new Vue({
    el: '#app',
    render: h => h( Body ),
    router: router
})