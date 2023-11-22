import { createStore } from 'vuex'
import { contactList } from '@/data/contactList.js'

export default createStore({
    state: {
        contactList,
    },
    getters: {
        getontsctList: (state) => state.contactList,
    },
    mutations: {
        filterName(state, newName) {
            const searcName = newName.toLowerCase()
            if (!searcName.trim()) state.contactList = [...contactList]
            else
                state.contactList = state.contactList.filter((contact) =>
                    contact.name.toLowerCase().includes(searcName)
                )
        },
        addNewContact(state, { name, email }) {
            if (!state.contactList) state.contactList = []
            else {
                if (name && email && name.trim() !== '' && email.trim() !== '') {
                    state.contactList.push({
                        id: state.contactList.length + 1,
                        name,
                        email,
                    })
                }
            }
        },
    },
    actions: {
        filterContact({ commit }, name) {
            commit('filterName', name)
        },
        addNewContact({ commit }, { name, email }) {
            commit('addNewContact', { name, email })
        },
    },
    modules: {},
})
