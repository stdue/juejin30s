import { createRouter, createWebHistory } from "vue-router"
const route = [
    {
        path: '/',
        component: () => import("../views/main/map.vue")
    }
]

export const router = createRouter({
    history: createWebHistory(),
    routes: route,
})