import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Customers from "../views/Customers.vue";
import LoggedOut from "../views/LoggedOut.vue";
import CustomerDetail from "../views/CustomerDetail.vue";
import Layout from "../layouts/Layout.vue";

const routes = [
  {
    path: "/",
    component: Layout,
    children: [
      { path: "", component: Home, name: "Home" },
      { path: "customers", component: Customers, name: "Customers" },
      {
        path: "customers/:customerId",
        component: CustomerDetail,
        name: "CustomerDetail",
      },
      {
        path: "/logged-out",
        component: LoggedOut,
        name: "LoggedOut",
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
