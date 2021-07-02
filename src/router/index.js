import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [{
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/blog',
        name: 'Blog',
        component: () =>
            import ( /* webpackChunkName: "about" */ '../views/Blog.vue')
    },
    {
        path: '/chess',
        name: 'Chess',
        component: () =>
            import ('../views/Chess.vue'),
    },
    {
        path: '/raycaster',
        name: 'Raycaster',
        component: () =>
            import ('../views/Raycaster.vue'),
    },
    {
        path: '/visualizer',
        name: 'Visualizer',
        component: () =>
            import ('../views/Visualizer.vue'),
    },
    {
        path: '/contact',
        name: 'Contact',
        component: () =>
            import ('../views/Contact.vue'),
    },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router