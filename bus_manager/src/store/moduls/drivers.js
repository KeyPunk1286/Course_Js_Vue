// import { createStore } from "vuex";
import { isFilterDriver } from '@/store/moduls/helpers.js'
export default {
    namespaced: true,
    state: {
        driversList: [
            {
                id: 1,
                nameDrivers: 'Сергій Валентинович',
                workExperience: 12,
            },
            {
                id: 2,
                nameDrivers: 'Іван Петрович',
                workExperience: 8,
            },
            {
                id: 3,
                nameDrivers: 'Михайло Вікторович',
                workExperience: 10,
            },
            {
                id: 4,
                nameDrivers: 'Павло Ігорович',
                workExperience: 11,
            },
            {
                id: 5,
                nameDrivers: 'Олег Валерійович',
                workExperience: 9,
            },
            {
                id: 6,
                nameDrivers: 'Андрій Олексійович',
                workExperience: 6,
            },
            {
                id: 7,
                nameDrivers: 'Віктор Сергійович',
                workExperience: 14,
            },
            {
                id: 8,
                nameDrivers: 'Валентин Павлович',
                workExperience: 7,
            },
            {
                id: 9,
                nameDrivers: 'Ігор Миколайович',
                workExperience: 13,
            },
            {
                id: 10,
                nameDrivers: 'Олександр Іванович',
                workExperience: 15,
            },
        ],
        filterList: {},
    },
    getters: {
        getDriverList: (state) => state.driversList,
        getFilteredDriverList: (state) =>
            state.driversList.filter((driver) => isFilterDriver(driver, state.filterList)),
        getDriverById: (state) => (driverId) => state.driversList.find((driver) => driver.id == driverId),
    },
    mutations: {
        deleteDriverMutations(state, driverId) {
            state.driversList = state.driversList.filter((driver) => driver.id !== driverId)
        },
        addDriverMutations(state, newDriver) {
            state.driversList.push(newDriver)
        },
        updateDriverMutation(state, updateDriver) {
            const indexDriver = state.driversList.findIndex((driver) => driver.id === updateDriver.id)
            state.driversList[indexDriver] = updateDriver
        },
        updateFilterMutations(state, filterData) {
            state.filterList = filterData
        },
    },
    actions: {
        deleteDriverActions({ commit, dispatch }, driverId) {
            commit('deleteDriverMutations', driverId)
            dispatch('assignment/deleteAssignmentByDriverId', driverId, { root: true })
        },
        addDriverAction({ commit }, newDriver) {
            commit('addDriverMutations', {
                id: new Date().getTime(),
                ...newDriver,
            })
        },
        updateDriverAction({ commit }, updateDriver) {
            commit('updateDriverMutation', updateDriver)
        },
        updateFilterActions({ commit }, filterData) {
            commit('updateFilterMutations', filterData)
        },
    },
    modules: {},
}
