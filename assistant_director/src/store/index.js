import { createStore } from 'vuex'
import teachers from './teachers.js'
import subjects from './subjects.js'

export default createStore({
    state: {},
    getters: {},
    mutations: {},
    actions: {},
    modules: {
        teachers,
        subjects,
    },
})
