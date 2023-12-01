import candidateList from '@/assets/data/candidateList.json'
export default {
    namespaced: true,
    state: {
        candidateList: candidateList,
        errorMessage: null,
    },
    getters: {
        getCandidateList: ({ candidateList }) => candidateList,
        getCandidateById: (state) => (candidateId) =>
            state.candidateList.find((candidate) => candidate.id == candidateId),
        getCandidateListForInterview: (state) => (candidateId) =>
            state.candidateList.find((candidateIdName) => candidateIdName.id == candidateId),
        getErrorMessage: ({ errorMessage }) => errorMessage,
    },
    mutations: {
        deleteCandidate(state, idCandidate) {
            state.candidateList = state.candidateList.filter((candidate) => candidate.id !== idCandidate)
        },
        addNewCandidate(state, newCandidate) {
            if (!newCandidate.fullName || !newCandidate.position) {
                state.errorMessage = 'Поля мають бути заповненими'
                return
            } else {
                state.candidateList.push(newCandidate)
                state.errorMessage = null
            }
        },
        updateCandidate(state, updateCandidate) {
            const indexCandidate = state.candidateList.findIndex((candidate) => candidate.id === updateCandidate.id)
            state.candidateList[indexCandidate] = updateCandidate
        },
    },
    actions: {
        deleteCandidate({ commit, dispatch }, idCandidate) {
            commit('deleteCandidate', idCandidate)
            dispatch('interview/deleteCandidate', idCandidate, { root: true })
        },
        addNewCandidate({ commit, dispatch }, newCandidate) {
            commit('addNewCandidate', {
                id: new Date().getTime(),
                ...newCandidate,
            })
            dispatch('interview/addNewCandidate', { id: new Date().getTime(), ...newCandidate }, { root: true })
        },
        updateCandidateAction({ commit, dispatch }, updateCandidate) {
            commit('updateCandidate', updateCandidate)
            dispatch('interview/updateCandidate', updateCandidate, { root: true })
        },
    },
    modules: {},
}
