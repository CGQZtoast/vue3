import routes from "~pages"

import { createRouter, createWebHistory } from "vue-router"
// import index from '../pages/index.vue'

export const router = createRouter({
    routes,
    // 不用再一个一个写路由
    // routes: [
    //     {
    //         name: 'index',
    //         path: '/',
    //         component: index
    //     }
    history: createWebHistory()
})

export default router