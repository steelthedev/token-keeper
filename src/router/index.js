// src/router/index.js
import { createRouter, createWebHashHistory } from 'vue-router';

import HomeView from '../views/HomeView.vue';


const routes = [

  {
    path: '/',
    name: 'Home',
    component: HomeView,
  },

];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
