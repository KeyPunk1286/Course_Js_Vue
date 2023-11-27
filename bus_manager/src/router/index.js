import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import DriversView from '@/views/DriversView.vue'
import BusesWiew from '@/views/BusesWiew.vue'
import EditBusWiew from '@/views/EditBusWiew.vue'
import EditDrivers from '@/components/EditDrivers.vue'
import AssignmentWiew from '@/views/AssignmentWiew.vue'

const routes = [
    {
        path: '/',
        name: 'home',
        component: HomeView,
    },
    {
        path: '/drivers',
        name: 'drivers',
        component: DriversView,
    },
    {
        path: '/drivers/edit/:id?',
        name: 'drivers-edit',
        component: EditDrivers,
    },
    {
        path: '/buses',
        name: 'buses',
        component: BusesWiew,
    },
    {
        path: '/buses/edit/:id?',
        name: 'buses-edit',
        component: EditBusWiew,
    },
    {
        path: '/assignment',
        name: 'assignment',
        component: AssignmentWiew,
    },
    // {
    //   path: "/about",
    //   name: "about",
    //   // route level code-splitting
    //   // this generates a separate chunk (about.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () =>
    //     import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
    // },
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
})

export default router
