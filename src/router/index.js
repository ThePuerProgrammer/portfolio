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
    }, {
        path: '/projects',
        name: 'Projects',
        component: () =>
            import ('../views/Projects.vue'),
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