import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
// import store from '@/store'

const routes = [
    {
        path: '/',
        name: 'home',
        component: HomeView,
        meta: { requiresAuth: false },
    },
    {
        path: '/subject',
        name: 'subject',
        component: () => import('../views/SubjectPage.vue'),
        meta: { requiresAuth: true },
    },
    {
        path: '/selected-subject/:idSubject+',
        name: 'selected-subject',
        component: () => import('../components/SelectedSubject.vue'),
        props: (route) => ({ subjectSelectList: route.params.idSubject.map((id) => parseInt(id)) }),
        meta: { requiresAuth: true },
    },
    {
        path: '/selected-list/:teacherIdList+',
        name: 'selected-list',
        component: () => import('../components/SelectedList.vue'),
        props: (route) => ({ SelectListTeachers: route.params.teacherIdList.map((id) => parseInt(id)) }),
        meta: { requiresAuth: true },
    },
    {
        path: '/error-message/:id?',
        name: 'error-message',
        component: () => import('../components/ErrorMessage.vue'),
        // props: (route) => ({ SelectListTeachers: route.params.teacherIdList.map((id) => parseInt(id)) }),
        meta: { requiresAuth: true },
    },
    {
        path: '/teachers',
        name: 'teachers',
        component: () => import('../views/TeachersList.vue'),
        // props: (route) => ({ SelectListTeachers: route.params.teacherIdList.map((id) => parseInt(id)) }),
        meta: { requiresAuth: true },
    },
    {
        path: '/newTeachers',
        name: 'newTeachers',
        component: () => import('../components/AddNewTeacher.vue'),
        // props: (route) => ({ SelectListTeachers: route.params.teacherIdList.map((id) => parseInt(id)) }),
        meta: { requiresAuth: true },
    },

    {
        path: '/loginPge',
        name: 'loginPge',
        component: () => import('../views/LoginPage.vue'),
    },
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
})
router.beforeEach((to) => {
    const authenticated = window.userName
    if (to.meta.requiresAuth && !authenticated) {
        return {
            name: 'loginPge',
            query: { redirect: to.fullPath },
        }
    }
})
export default router
