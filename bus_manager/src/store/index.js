import { createStore } from 'vuex'
import drivers from '@/store/moduls/drivers.js'
import buses from '@/store/moduls/buses'
import assignment from '@/store/moduls/assignment'

export default createStore({
    state: {},
    getters: {},
    mutations: {},
    actions: {},
    modules: {
        drivers,
        buses,
        assignment,
    },
})
