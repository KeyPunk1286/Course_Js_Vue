import { createStore } from 'vuex'
import productList from '../data/productList.json'
const store = createStore({
    state() {
        return {
            productList,
            categoryProduct: null,
        }
    },
    getters: {
        getProductList: (state) => state.productList.filter((product) => product.title === state.categoryProduct),
    },
    mutations: {
        setProductCategory(state, newCategory) {
            state.categoryProduct = newCategory
        },
    },
    actions: {
        filteredProductList({ commit }, category) {
            commit('setProductCategory', category)
        },
    },
    modules: {},
})
export default store
