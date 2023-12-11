import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
    {
        path: '/',
        name: 'home',
        component: HomeView,
    },
    {
        path: '/product',
        name: 'product',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import('../views/ProductView.vue'),
        meta: { requiredAuth: false },
        children: [
            {
                path: 'selector',
                name: 'selector',
                component: () => import('../views/SelectorProduct.vue'),
                meta: { requiredAuth: false },
            },
            {
                path: 'editor',
                name: 'editor',
                component: () => import('../views/EditProduct.vue'),
                meta: { requiredAuth: true },
            },
        ],
    },
    {
        path: '/suppliers',
        name: 'suppliers',
        component: () => import('../views/SuppliersView.vue'),
        meta: { requiredAuth: false },
    },
    {
        path: '/contacts',
        name: 'contacts',
        component: () => import('../views/ContactsView.vue'),
        meta: { requiredAuth: false },
    },
    {
        path: '/shopping-rules',
        name: 'shopping-rules',
        component: () => import('../views/ShoppingView.vue'),
        meta: { requiredAuth: false },
    },
    {
        path: '/loginPage',
        name: 'loginPage',
        component: () => import('../views/LoginPage.vue'),
        meta: { requiredAuth: false },
    },

    {
        path: '/:pageNotFound(.*)*',
        name: 'pageNotFound',
        component: () => import('../views/PageNotFound.vue'),
        meta: { requiredAuth: false },
    },
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
})
router.beforeEach((to) => {
    const authParams = localStorage.getItem('authParams')
    if (to.meta.requiredAuth && !authParams)
        return {
            name: 'loginPage',
        }
})
export default router
