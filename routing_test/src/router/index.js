import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ShopView from '@/views/ShopView.vue'
import CategoryView from '@/views/CategoryView.vue'
import PaymentViews from '@/views/PaymentViews.vue'
import ContactView from '@/views/ContactView.vue'

const routes = [
    {
        path: '/home',
        name: 'home',
        component: HomeView,
    },
    {
        path: '/shop',
        name: 'shop',
        component: ShopView,
    },
    {
        path: '/shop/:category',
        name: 'category',
        component: CategoryView,
    },
    {
        path: '/policy',
        name: 'policy',
        component: PaymentViews,
    },
    {
        path: '/contact',
        name: 'contact',
        component: ContactView,
    },
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
})

export default router
