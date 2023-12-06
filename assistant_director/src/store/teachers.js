export default {
    namespaced: true,
    state: {
        teachersList: [
            { id: 1, name: 'Іванов І.І.', subjectId: 5 },
            { id: 2, name: 'Петров П.П.', subjectId: 8 },
            { id: 3, name: 'Сидоров С.С.', subjectId: 3 },
            { id: 4, name: 'Андрєєв А.А.', subjectId: 12 },
            { id: 5, name: 'Кузнецов К.К.', subjectId: 9 },
            { id: 6, name: 'Смірнова М.М.', subjectId: 7 },
            { id: 7, name: 'Карпова Е.Е.', subjectId: 1 },
            { id: 8, name: 'Григор"єв Г.Г.', subjectId: 1 },
            { id: 9, name: 'Ніколаєв Н.Н.', subjectId: 6 },
            { id: 10, name: 'Дмитрієв Д.Д.', subjectId: 11 },
            { id: 11, name: 'Федоров Ф.Ф.', subjectId: 2 },
            { id: 12, name: 'Олександров А.А.', subjectId: 3 },
            { id: 13, name: 'Ольга О.О.', subjectId: 10 },
            { id: 14, name: 'Тетяна Т.Т.', subjectId: 4 },
            { id: 15, name: 'Юр"єв Ю.Ю.', subjectId: 5 },
            { id: 16, name: 'Лисенко Л.Л.', subjectId: 2 },
            { id: 17, name: 'Коваленко К.К.', subjectId: 3 },
            { id: 18, name: 'Шевченко Ш.Ш.', subjectId: 11 },
            { id: 19, name: 'Павленко П.П.', subjectId: 9 },
            { id: 20, name: 'Іванченко І.І.', subjectId: 6 },
        ],
        teacherAssignmentList: [],
        warningMessage: false,
    },
    getters: {
        getTeachersList: (state) => (subjectId) =>
            state.teachersList.filter((teacher) => teacher.subjectId === subjectId),
        getTeacherName: (state) => (teacerId) => {
            return state.teachersList.filter((teacger) => teacerId.includes(teacger.id))
        },
        getTeachersListView: ({ teachersList }) => teachersList,
        getWarningMessage: ({ warningMessage }) => warningMessage,
    },
    mutations: {
        onDeleteTeacher(state, idTeacher) {
            state.teachersList = state.teachersList.filter((teacher) => teacher.id !== idTeacher)
        },
        addTeacherInTeachersList(state, teacherObj) {
            if (!teacherObj.name || !teacherObj.subjectId) {
                state.warningMessage = true
            } else {
                state.teachersList.push(teacherObj)
                state.warningMessage = false
            }
        },
        removeWarningMessage(state) {
            state.warningMessage = false
        },
    },
    actions: {
        onDeleteTeacher({ commit }, idTeacher) {
            commit('onDeleteTeacher', idTeacher)
        },
        addTeacherInTeachersList({ commit }, teacherObj) {
            commit('addTeacherInTeachersList', {
                id: new Date().getTime(),
                ...teacherObj,
            })
        },
        removeWarningMessage({ commit }) {
            commit('removeWarningMessage')
        },
    },
    modules: {},
}
