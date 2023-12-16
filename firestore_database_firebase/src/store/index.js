import { createStore } from 'vuex'
import driversM from './modules/driversM.js'
import busesM from './modules/busesM.js'
import assignmentsM from './modules/assignmentsM.js'

export default createStore({
    state: {},
    getters: {},
    mutations: {},
    actions: {},
    modules: {
        driversM,
        busesM,
        assignmentsM,
    },
})
