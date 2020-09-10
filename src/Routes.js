import Vue from 'vue';
import Router from 'vue-router';

import Layout from '@/components/Layout/Layout';
import Tables from '@/pages/Tables/Tables';
import Charts from '@/pages/Charts/Charts';
import Dashboard from '@/pages/Visits/Visits';
import Login from '@/pages/Login/Login';
import ErrorPage from '@/pages/Error/Error';
import Analytics from '@/pages/Analytics/Analytics';
import ProductDetails from '@/pages/ProductDetails/ProductDetails';
import User from '@/pages/User/User';
import ImportYourData from '@/pages/ImportYourData/ImportYourData';

Vue.use(Router);

export default new Router({
    mode: 'hash',
    routes: [
        {
            path: '/login',
            name: 'Login',
            component: Login,
        },
        {
            path: '/error',
            name: 'Error',
            component: ErrorPage,
        },
        {
            path: '/app',
            name: 'Layout',
            component: Layout,
            children: [
                {
                    path: 'overview',
                    name: 'Overview',
                    component: Dashboard,
                },
                {
                    path: 'product-tables',
                    name: 'ProductTables',
                    component: Tables,
                },
                
                {
                    path: 'dashboard',
                    name: 'Dashboard',
                    component: Charts,
                },
                {
                    path: 'analytics',
                    name: 'Analytics',
                    component: Analytics,
                },
                {
                    path: 'product-details',
                    name: 'ProductDetails',
                    component: ProductDetails,
                },
                
                {
                    path: 'user',
                    name: 'User',
                    component: User,
                },
                {
                    path: 'import-data',
                    name: 'ImportYourData',
                    component: ImportYourData,
                },
            ],
        },
        {
            path: '*',
            name: 'Error',
            component: ErrorPage,
        }
    ],
});
