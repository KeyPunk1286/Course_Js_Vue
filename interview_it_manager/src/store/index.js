import { createStore } from 'vuex'
import workers from './modules/workers.js'
import candidate from './modules/candidate.js'
import interview from './modules/interview.js'

export default createStore({
    state: {},
    getters: {},
    mutations: {},
    actions: {},
    modules: {
        workers,
        candidate,
        interview,
    },
})
