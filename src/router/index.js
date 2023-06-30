import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import Product from "../views/Product.vue";
import SellProduct from "../views/SellProduct.vue";
import Tailwind from "../views/Tailwind.vue";
import TailwindNav from "../views/TailwindNav.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/product/:id",
    name: "Product",
    component: Product,
    props: true,
  },
  {
    path: "/sellproduct",
    name: "SellProduct",
    component: SellProduct,
  },
  {
    path: "/tailwind",
    name: "Tailwind",
    component: Tailwind,
  },
  {
    path: "/tailwindnav",
    name: "TailwindNav",
    component: TailwindNav,
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
