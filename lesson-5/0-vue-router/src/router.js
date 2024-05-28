import { createWebHashHistory } from "vue-router";
import { createRouter } from "vue-router";
// import Home from '@/views/HomePage.vue'
const routes = [
    {
        path: "/",
        name:"HomePage",
        component : () => import("@/views/HomePage.vue")
    },
    {
        path: "/about",
        name:"AboutPage",
        component : () => import("@/views/AboutPage.vue")
    },
    {
        path: "/detail/:userId",
        name:"DetailPage",
        component : () => import("@/views/DetailPage.vue")
    },
]

const router = createRouter({
    routes,
    history: createWebHashHistory(),
});
export default router;