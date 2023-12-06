export default {
    namespaced: true,
    state: {
        subjectList: [
            { id: 1, name: 'Математика' },
            { id: 2, name: 'Фізика' },
            { id: 3, name: 'Література' },
            { id: 4, name: 'Хімія' },
            { id: 5, name: 'Історія' },
            { id: 6, name: 'Біологія' },
            { id: 7, name: 'Географія' },
            { id: 8, name: 'Інформатика' },
            { id: 9, name: 'Фізкультура' },
            { id: 10, name: 'Іноземна мова' },
            { id: 11, name: 'Мистецтво' },
            { id: 12, name: 'Музика' },
        ],
    },
    getters: {
        getSubjectList: ({ subjectList }) => subjectList,
        getSubjectListById: (state) => (subjectSelect) => {
            return state.subjectList.filter((subject) => subjectSelect.includes(subject.id))
        },
        getSubjectById: (state) => (subjectId) => state.subjectList.find((subject) => subject.id === subjectId),
    },
    mutations: {},
    actions: {},
    modules: {},
}
