import Vue from 'vue';
import VueRouter from 'vue-router';
import Distribuidores from '../views/dashboard/Distribuidores.vue';
import Dashboard from '../views/dashboard/index.vue';
import Garantia from '../views/Garantia.vue';
import Login from '../views/Login.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Garantia',
    component: Garantia,
    meta: {
      layout: 'LayoutHome',
    },
  },
  {
    path: '/master-login',
    name: 'Login',
    component: Login,
    meta: {
      layout: 'LayoutHome',
    },
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: Dashboard,
    meta: {
      layout: 'LayoutDashboard',
    },
    children: [
      {
        path: 'distribuidores',
        name: 'distribuidores',
        component: Distribuidores,
      },
    ],
  },
  /*  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('../views/About.vue'),
  }, */
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
