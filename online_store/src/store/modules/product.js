// import { createStore } from 'vuex'

export default {
    namespaced: true,
    state: {
        headPhoneList: [
            {
                id: 1,
                name: 'YAMAHA TW-ES5A PINK',
                img: 'https://jam.ua/images/item/preview/255/TWES5A_PI_fr_1.62f6274f56ac4.jpg',
                price: 6216,
            },
            {
                id: 2,
                name: 'YAMAHA TW-E3B BLUE',
                img: 'https://jam.ua/images/item/preview/255/05-TW-E3B-Blue-02.63d3be78e4bb3.jpg',
                price: 3195,
            },
            {
                id: 3,
                name: 'YAMAHA YH-E500A GRAY',
                img: 'https://jam.ua/images/item/preview/255/v01-yh-e500-gray_c59640625bd043b6deff7855a88fde7f_jpg_92.jpg.5fc4f94f0ef96.jpg',
                price: 6342,
            },
            {
                id: 4,
                name: 'YAMAHA EP-E50A BLACK',
                img: 'https://jam.ua/images/item/preview/255/EP-E50A_black_2_e5557c4a1b916413f158a7bd46140e59_png_92.jpg.5ffc234ace25e.jpg',
                price: 2999,
            },
            {
                id: 5,
                name: 'YAMAHA TW-E3A WHITE',
                img: 'https://jam.ua/images/item/preview/255/06-TW-E3-white-case-4_23ab66222d2ffce8ba4b57860db8b19c.jpg.601bedab0f946.jpg',
                price: 2899,
            },
            {
                id: 6,
                name: 'SUPERLUX HDB-311 (White)',
                img: 'https://jam.ua/images/item/preview/255/HDB311%20White.jpg',
                price: 1705,
            },
            {
                id: 7,
                name: 'SUPERLUX HDB-581 Black',
                img: 'https://jam.ua/images/item/preview/255/HDB581-2017-07-25.60ab7384eccd6.jpg',
                price: 3095,
            },
            {
                id: 8,
                name: 'AUDIX A145 Professional',
                img: 'https://jam.ua/images/item/preview/255/Audix_A145_S1_web2020.png.5fae8b8a2eb01.png',
                price: 5856,
            },
            {
                id: 9,
                name: 'AUDIX A152 Studio Reference',
                img: 'https://jam.ua/images/item/preview/255/Audix_A152_S1_web2020.png.5fb391c1262f2.png',
                price: 10420,
            },
            {
                id: 10,
                name: 'AUDIX A140 Professional',
                img: 'https://jam.ua/images/item/preview/255/Audix_A140_S1_web2020.png.5fae747f0670f.png',
                price: 4521,
            },
        ],
        searchName: null,
    },
    getters: {
        getheadPhoneList: (state) => {
            if (!state.searchName) return state.headPhoneList
            else
                return state.headPhoneList.filter((product) =>
                    product.name.toLowerCase().includes(state.searchName.toLowerCase())
                )
        },
    },
    mutations: {
        setNewValueNameProduct(state, newValue) {
            state.searchName = newValue
        },
        setNewProduct(state, newObj) {
            if (!newObj.name || !newObj.img || !newObj.price) return
            else state.headPhoneList.push(newObj)
        },
    },
    actions: {
        addNewValueNameProduct({ commit }, newValue) {
            commit('setNewValueNameProduct', newValue)
        },
        addNewProduct({ commit }, newObj) {
            commit('setNewProduct', {
                id: new Date().getTime(),
                ...newObj,
            })
        },
    },
    modules: {},
}
