import { isMatchFilter } from '../helpers/filterDriversFunction.js'
import DbOperations from '../helpers/DbOperations'
const collectionDB = new DbOperations('driverName')
export default {
    namespaced: true,
    state: () => ({
        driversList: [],
        searchDriverInfo: {},

        loading: false,
        error: null,
    }),
    getters: {
        isLoading: (state) => state.loading,
        hasError: (state) => state.error,

        getFilteredDrivers: (state) =>
            state.driversList.filter((driver) => isMatchFilter(driver, state.searchDriverInfo)),
        getDriverItemById: (state) => (itemId) => state.driversList.find((item) => item.id == itemId),
        getDriversList: (state) => state.driversList,
    },
    mutations: {
        setItemsList(state, itemsList) {
            state.driversList = itemsList
        },
        setLoading(state, value) {
            state.loading = value
        },
        setError(state, error) {
            state.error = error
        },
        setUpdateFilter(state, driverObj) {
            state.searchDriverInfo = driverObj
        },
        deleteItem(state, itemId) {
            state.driversList = state.driversList.filter((item) => item.id !== itemId)
        },
    },
    actions: {
        loadList({ commit }) {
            commit('setError', null)
            commit('setLoading', true)

            collectionDB
                .loadItemsList()
                .then((list) => {
                    commit('setItemsList', list)
                })
                .catch((error) => {
                    commit('setError', error)
                })
                .finally(() => {
                    commit('setLoading', false)
                })
        },
        deleteItem({ commit }, itemId) {
            commit('setError', null)
            commit('setLoading', true)

            collectionDB
                .deleteItem(itemId)
                .then(() => {
                    commit('deleteItem', itemId)
                    // dispatch('loadList')
                })
                .catch((error) => {
                    commit('setError', error)
                })
                .finally(() => {
                    commit('setLoading', false)
                })
        },
        addItem({ commit, dispatch }, item) {
            commit('setError', null)
            commit('setLoading', true)
            collectionDB
                .addItem(item)
                .then(() => {
                    dispatch('loadList')
                })
                .catch((error) => {
                    commit('setError', error)
                })
                .finally(() => {
                    commit('setLoading', false)
                })
        },
        updateItem({ commit, dispatch }, { itemId, data }) {
            commit('setError', null)
            commit('setLoading', true)

            collectionDB
                .updateItem(itemId, data)
                .then(() => {
                    dispatch('loadList')
                })
                .catch((error) => {
                    commit('setError', error)
                })
                .finally(() => {
                    commit('setLoading', false)
                })
        },
        updateFilter({ commit }, driverObj) {
            commit('setUpdateFilter', driverObj)
        },
    },
}
