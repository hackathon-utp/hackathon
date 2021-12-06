import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter);
const routes = [
    
    {
        path: "/",
        name: "index",
        component: () => import("../components/Index"),
    },
    {
        path: "/restaurante",
        name: "restaurante",
        component: () => import("../components/Restaurante"),
    },
    {
        path: "/inspector",
        name: "inspector",
        component: () => import("../components/Inspector"),
    },
    {
        path: "/admin",
        name: "admin",
        component: () => import("../components/Admin"),
    },

    ];
const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes,
});
export default router;