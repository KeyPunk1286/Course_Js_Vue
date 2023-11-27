// import { createStore } from "vuex";

export default {
    namespaced: true,
    state: {
        busesList: [
            { id: 1, numberPlates: 'AP7660EX', numberOfPieces: 28 },
            { id: 2, numberPlates: 'AP1234EX', numberOfPieces: 40 },
            { id: 3, numberPlates: 'AP5678EX', numberOfPieces: 15 },
            { id: 4, numberPlates: 'AP9012EX', numberOfPieces: 25 },
            { id: 5, numberPlates: 'AP3456EX', numberOfPieces: 35 },
            { id: 6, numberPlates: 'AP7890EX', numberOfPieces: 45 },
            { id: 7, numberPlates: 'AP1234EX', numberOfPieces: 40 },
            { id: 8, numberPlates: 'AP5678EX', numberOfPieces: 20 },
            { id: 9, numberPlates: 'AP9012EX', numberOfPieces: 30 },
            { id: 10, numberPlates: 'AP3456EX', numberOfPieces: 50 },
        ],
    },
    getters: {
        getBusesList: (state) => state.busesList,
        getBusById: (state) => (busId) => state.busesList.find((bus) => bus.id == busId),
    },
    mutations: {
        deleteBusMutations(state, busId) {
            state.busesList = state.busesList.filter((bus) => bus.id !== busId)
        },
        addBusMutations(state, newBus) {
            state.busesList.push(newBus)
        },
        updateBusMutation(state, updateBus) {
            const indexBus = state.busesList.findIndex((oldBass) => oldBass.id === updateBus.id)
            state.busesList[indexBus] = updateBus
        },
    },
    actions: {
        deleteBusActions({ commit, dispatch }, busId) {
            commit('deleteBusMutations', busId)
            dispatch('assignment/deleteAssignmentByBusId', busId, { root: true })
        },
        addBusAction({ commit }, newBus) {
            commit('addBusMutations', {
                id: new Date().getTime(),
                ...newBus,
            })
        },
        updateBusAction({ commit }, updateBus) {
            commit('updateBusMutation', updateBus)
        },
    },
    modules: {},
}
