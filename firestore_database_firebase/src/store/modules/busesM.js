import DbOperations from '../helpers/DbOperations'
const collectionDB = new DbOperations('busesList')
export default {
    namespaced: true,
    state: () => ({
        busesListAll: [],

        loading: false,
        error: null,
    }),
    getters: {
        isLoading: (state) => state.loading,
        hasError: (state) => state.error,

        getBusesListAll: (state) => state.busesListAll,

        getBusItemById: (state) => (itemId) => state.busesListAll.find((item) => item.id == itemId),
    },
    mutations: {
        setItemsList(state, itemsList) {
            state.busesListAll = itemsList
        },
        setLoading(state, value) {
            state.loading = value
        },
        setError(state, error) {
            state.error = error
        },

        deleteItem(state, itemId) {
            state.busesListAll = state.busesListAll.filter((item) => item.id !== itemId)
        },
    },
    actions: {
        loadBusesList({ commit }) {
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
    },
}
