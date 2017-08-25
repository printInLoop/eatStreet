// Import JS dependencies
import Vue from 'vue';
import VueRouter from 'vue-router';
import 'bootstrap';

// Import stylesheet
import './styles/main.scss';


// Import Vue components
import Body from './template/Body.vue';
import Dashboard from './pages/dashboard/Dashboard.vue';
import Product from './pages/product/Product.vue';


// Define routes
Vue.use( VueRouter );

const router = new VueRouter({
    routes: [
        { path: '/', component: Dashboard },
        { path: '/products', component: Product }
    ],
    mode: 'history',
    linkActiveClass: 'is-active'
})


// Mount Vue
new Vue({
    el: '#app',
    router,
    render: h => h( Body )
})