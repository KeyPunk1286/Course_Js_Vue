import { createStore } from 'vuex'
import productList from '@/data/productList.json'

export default createStore({
    state: {
        productList,
    },
    getters: {
        getProductList: ({ productList }) => productList,
        getFilteredProductList: (state) => (category) => {
            return state.productList.filter((unit) => unit.categories === category)
        },
    },
    mutations: {},
    actions: {},
    modules: {},
})
