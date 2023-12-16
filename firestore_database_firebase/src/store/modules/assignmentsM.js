import DbOperations from '../helpers/DbOperations'
const collectionDB = new DbOperations('assignments')
export default {
    namespaced: true,
    state: () => ({
        assignmentsList: [],

        loading: false,
        error: null,
    }),
    getters: {
        isLoading: (state) => state.loading,
        hasError: (state) => state.error,

        getAssignmentList: (state, getters, rootState, rootGetters) =>
            state.assignmentsList.map((assignment) => ({
                id: assignment.id,
                driverName: rootGetters['driversM/getDriverItemById'](assignment.driverId).name,
                busNumber: rootGetters['busesM/getBusItemById'](assignment.busId).plates,
            })),
    },
    mutations: {
        setItemsList(state, itemsList) {
            state.assignmentsList = itemsList
        },
        setLoading(state, value) {
            state.loading = value
        },
        setError(state, error) {
            state.error = error
        },

        deleteItem(state, itemId) {
            state.assignmentsList = state.assignmentsList.filter((item) => item.id !== itemId)
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
    },
}
