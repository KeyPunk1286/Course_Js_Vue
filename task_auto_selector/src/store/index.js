import { createStore } from 'vuex'
import carList from '../data/carList.json'
const store = createStore({
    state() {
        return {
            carList,
            typeCar: null,
            typeBody: [],
            nameAuto: null,
            modelAuto: null,
            isResetFilter: false,
        }
    },
    getters: {
        getCarList: ({ carList }) => carList,
        getFilteredCarList: (state) => {
            if (state.isResetFilter) return state.carList
            let filteredList = state.carList
            if (state.typeCar) filteredList = filteredList.filter((car) => car.type === state.typeCar)
            if (state.typeBody.length > 0)
                filteredList = filteredList.filter((car) => car.typeBody.includes(car.typeBody))
            if (state.nameAuto) filteredList = filteredList.filter((car) => car.nameAuto.includes(state.nameAuto))
            if (state.modelAuto) filteredList = filteredList.filter((car) => car.model.includes(state.modelAuto))
            return filteredList
        },
    },
    mutations: {
        setTypeCar(state, val) {
            state.typeCar = val
        },
        setTypeBody(state, val) {
            state.typeBody = val
        },
        setNameAuto(state, val) {
            state.nameAuto = val
        },
        setModelAuto(state, val) {
            state.modelAuto = val
        },
        setResetFilter(state) {
            state.typeCar = null
            state.typeBody = []
            state.nameAuto = null
            state.modelAuto = null
            state.isRestFilter = true
        },
    },
    actions: {
        filterTypeCar({ commit }, type) {
            commit('setTypeCar', type)
        },
        filterTypeBody({ commit }, typeBody) {
            commit('setTypeBody', typeBody)
        },
        filterNameAuto({ commit }, autoName) {
            commit('setNameAuto', autoName)
        },
        filterModelAuto({ commit }, modelAuto) {
            commit('setModelAuto', modelAuto)
        },
        resetFilter({ commit }) {
            commit('setResetFilter')
        },
    },
    modules: {},
})
export default store
