import { createRouter, createWebHistory } from "vue-router";
// import Home from '@/views/HomePage.vue'
const routes = [
    {
        path: "/",
        component : () => import("@/views/HomePage.vue")
    },
    {
        path: "/about",
        component : () => import("@/views/AboutPage.vue")
    },
]

const router = createRouter({
    routes,
    history: createWebHistory(),
});
export default router;