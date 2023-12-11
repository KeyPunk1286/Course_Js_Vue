import { createStore } from 'vuex'
import product from './modules/product.js'
import suppliers from './modules/suppliers.js'
import gallery from './modules/gallery.js'

export default createStore({
    namespaced: true,
    state: {},
    getters: {},
    mutations: {},
    actions: {},
    modules: {
        product,
        suppliers,
        gallery,
    },
})
