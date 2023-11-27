// import { createStore } from "vuex";

export default {
    namespaced: true,
    state: {
        assignmentsList: [
            { id: 1, driverId: 2, busId: 8 },
            { id: 2, driverId: 7, busId: 4 },
            { id: 3, driverId: 3, busId: 9 },
            { id: 4, driverId: 6, busId: 1 },
            { id: 5, driverId: 1, busId: 5 },
            { id: 6, driverId: 10, busId: 3 },
            { id: 7, driverId: 9, busId: 6 },
            { id: 8, driverId: 4, busId: 2 },
            { id: 9, driverId: 5, busId: 7 },
            { id: 10, driverId: 8, busId: 10 },
        ],
    },
    getters: {
        getFilledAssignmentList: (state, getters, rootState, rootGetters) =>
            state.assignmentsList.map((assignment) => ({
                id: assignment.id,
                driverId: rootGetters['drivers/getDriverById'](assignment.driverId).nameDrivers,
                busId: rootGetters['buses/getBusById'](assignment.busId).numberPlates,
            })),
    },
    mutations: {
        deleteAssignmentMutations(state, assignmentId) {
            state.assignmentsList = state.assignmentsList.filter((assignment) => assignment.id !== assignmentId)
        },
        addNewAssignmentsMutations(state, newAssignment) {
            state.assignmentsList.push(newAssignment)
        },
        deleteAssignmentByBusIdMutation(state, busId) {
            state.assignmentsList = state.assignmentsList.filter((assignment) => assignment.busId !== busId)
        },
        deleteAssignmentByDriverIdMutation(state, driverId) {
            state.assignmentsList = state.assignmentsList.filter((assignment) => assignment.driverId !== driverId)
        },
    },
    actions: {
        deleteAssignmentByDriverId({ commit }, driverId) {
            commit('deleteAssignmentByDriverIdMutation', driverId)
        },
        deleteAssignmentByBusId({ commit }, busId) {
            commit('deleteAssignmentByBusIdMutation', busId)
        },
        deleteAssignmentActions({ commit }, assignmentId) {
            commit('deleteAssignmentMutations', assignmentId)
        },
        addNewAssignmentsActions({ commit }, newAssignment) {
            commit('addNewAssignmentsMutations', {
                id: new Date().getTime,
                ...newAssignment,
            })
        },
    },
    modules: {},
}
