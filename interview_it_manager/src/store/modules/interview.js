import workerLIst from '@/assets/data/workerLIst.json'
import candidateList from '@/assets/data/candidateList.json'
export default {
    namespaced: true,
    state: {
        workerList: [...workerLIst],
        candidateList: [...candidateList],
        interviewList: [],
        errorMessage: null,
    },
    // Я коротше кажучі розумію шо тут багато наплужив )) написав дебрі. Але не розібрався як отрмувати геттер
    // з іншого модуля, не змінюючи його коли видаляеш з списку робітників та кандедатів.тому підключив і сюди JSON
    // списки кандедатів та працівників.Не дуже зрозумів ...з посадами шо робити.Тому зробив лише видалення з списку
    // кандедатів та працевників, коли додається нова співбесіда.та зворотньо коли видаляєш з списку співбесід.
    // а ще ..якщо видалити зі списку кандедатів, на сторінці кандедатів, і якщо ..на сторінці інтерв'ю додано
    // вже цього кандедата.То коли видаляєш інтервю ...це ім'я знову закидує у список кандедатів на інтерв'ю на самій
    // сторінці інтерв'ю хахахаха  мабуть смішно закрутив. але поки мого мозку вистачило на такий код
    // . Чи є у вас можливість підсказати як треба було .??

    getters: {
        getWorkerList: ({ workerList }) => workerList,
        getCandidateList: ({ candidateList }) => candidateList,
        getInterviewList: ({ interviewList }) => interviewList,
        getErrorMessage: ({ errorMessage }) => errorMessage,
        // getInterviewList: (state, getters, rootState, rootGetters) =>
        //     state.interviewList.map((person) => ({
        //         id: person.id,
        //         fullNameWorker: rootGetters['workers/getWorkerListForInterview'](person.fullNameWorker).fullName,
        //         fullNameCandidate: rootGetters['candidate/getCandidateListForInterview'](person.fullNameCandidate)
        //             .fullName,
        //         day: person.day,
        //     })),
    },

    mutations: {
        addNewinterview(state, newInterview) {
            if (!newInterview.fullNameWorker || !newInterview.fullNameCandidate || !newInterview.day) {
                return (state.errorMessage = 'не усі поля заповнені')
            } else {
                const workerObj = state.workerList.findIndex((worker) => worker.id === newInterview.fullNameWorker)
                const candidateObj = state.candidateList.findIndex(
                    (candidate) => candidate.id === newInterview.fullNameCandidate
                )
                state.interviewList.push({
                    id: newInterview.id,
                    idWorker: state.workerList[workerObj].id,
                    nameWorker: state.workerList[workerObj].fullName,
                    positionWorker: state.workerList[workerObj].position,
                    idCandidate: state.candidateList[candidateObj].id,
                    nameCandidate: state.candidateList[candidateObj].fullName,
                    positionCandidate: state.candidateList[candidateObj].position,
                    dayName: newInterview.day,
                })
                state.workerList = state.workerList.filter((worker) => worker.id !== newInterview.fullNameWorker)
                state.candidateList = state.candidateList.filter(
                    (candidate) => candidate.id !== newInterview.fullNameCandidate
                )
                state.errorMessage = null
            }
        },

        deleteInterview(state, interviewId) {
            const idInterview = state.interviewList.findIndex((interview) => interview.id === interviewId)
            state.workerList.push({
                id: state.interviewList[idInterview].idWorker,
                fullName: state.interviewList[idInterview].nameWorker,
                position: state.interviewList[idInterview].positionWorker,
            })
            state.candidateList.push({
                id: state.interviewList[idInterview].idCandidate,
                fullName: state.interviewList[idInterview].nameCandidate,
                position: state.interviewList[idInterview].positionCandidate,
            })
            state.interviewList = state.interviewList.filter((interview) => interview.id !== interviewId)
        },
        addNewCandidate(state, newCandidate) {
            if (!newCandidate.fullName || !newCandidate.position) {
                return
            } else {
                state.candidateList.push(newCandidate)
            }
        },
        deleteCandidate(state, idCandidate) {
            state.candidateList = state.candidateList.filter((person) => person.id !== idCandidate)
        },
        updateCandidate(state, updateCandidate) {
            const indexCandidate = state.candidateList.findIndex((candidate) => candidate.id === updateCandidate.id)
            state.candidateList[indexCandidate] = updateCandidate
        },
    },
    actions: {
        addNewinterview({ commit }, newInterview) {
            commit('addNewinterview', {
                id: new Date().getTime(),
                ...newInterview,
            })
        },
        deleteInterview({ commit }, interviewId) {
            commit('deleteInterview', interviewId)
        },
        addNewCandidate({ commit }, newCandidate) {
            commit('addNewCandidate', newCandidate)
        },
        deleteCandidate({ commit }, idCandidate) {
            commit('deleteCandidate', idCandidate)
        },
        updateCandidate({ commit }, updateCandidate) {
            commit('updateCandidate', updateCandidate)
        },
    },
    modules: {},
}
