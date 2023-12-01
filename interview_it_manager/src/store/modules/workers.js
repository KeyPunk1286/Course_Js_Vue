import workerLIst from '@/assets/data/workerLIst.json'
export default {
    namespaced: true,
    state: {
        // workerList: [
        //     { id: 1, fullName: 'Іван Петров', position: 'Розробник' },
        //     { id: 2, fullName: 'Марія Іванова', position: 'Тестувальник' },
        //     { id: 3, fullName: 'Олег Сидоров', position: 'Архітектор' },
        //     { id: 4, fullName: 'Наталя Коваленко', position: 'Дизайнер' },
        //     { id: 5, fullName: 'Андрій Мельник', position: 'Системний аналітик' },
        //     { id: 6, fullName: 'Оксана Григоренко', position: 'DevOps інженер' },
        //     { id: 7, fullName: 'Володимир Лисенко', position: 'Front-end розробник' },
        //     { id: 8, fullName: 'Тетяна Шевченко', position: 'Back-end розробник' },
        //     { id: 9, fullName: 'Сергій Павлов', position: 'Проектний менеджер' },
        //     { id: 10, fullName: 'Юлія Соколова', position: 'QA інженер' },
        // ],
        workerList: workerLIst,
    },
    getters: {
        getWorkerList: ({ workerList }) => workerList,

        getWorkerListForInterview: (store) => (workerId) =>
            store.workerList.find((workerNameId) => workerNameId.id == workerId),
    },
    mutations: {},
    actions: {},
    modules: {},
}
