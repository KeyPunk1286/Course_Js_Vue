import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import WorkersView from '@/views/WorkersView.vue'
import CandidateView from '@/views/CandidateView.vue'
import EditCandidate from '@/components/EditCandidate.vue'
import InterviewView from '@/views/InterviewView.vue'

const routes = [
    {
        path: '/',
        name: 'home',
        component: HomeView,
    },
    {
        path: '/workers',
        name: 'workers',
        component: WorkersView,
    },
    {
        path: '/candidate',
        name: 'candidate',
        component: CandidateView,
    },
    {
        path: '/candidate/edit/:id?',
        name: 'candidate-edit',
        component: EditCandidate,
    },
    {
        path: '/interview',
        name: 'interview',
        component: InterviewView,
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
