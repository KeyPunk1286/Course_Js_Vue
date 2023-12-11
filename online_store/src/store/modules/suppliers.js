// import { createStore } from 'vuex'

export default {
    namespaced: true,
    state: {
        suppliersList: [
            {
                id: 1,
                name: 'Solo',
                img: 'https://i1.sndcdn.com/avatars-tHYrfzynCrbErhtc-d9mpCw-t240x240.jpg',
                icon: 'fas',
                iconName: 'bolt',
            },
            {
                id: 2,
                name: 'Muztorg',
                img: 'https://muztorg.ua/image/catalog/mt_ua.png',
                icon: 'fas',
                iconName: 'arrow-up-from-bracket',
            },
            {
                id: 3,
                name: 'Realmusic',
                img: 'https://yt3.googleusercontent.com/ytc/APkrFKbWlFZ4mnvWKQaWXFpMbz6-UGQJOUOyhWiAjDXn=s900-c-k-c0x00ffffff-no-rj',
                icon: 'fas',
                iconName: 'bookmark',
            },
            {
                id: 4,
                name: 'Indigo music',
                img: 'https://www.indigo-music.com.ua/i/indigo-music.gif',
                icon: 'far',
                iconName: 'bookmark',
            },
        ],
    },
    getters: {
        getSuppliersList: ({ suppliersList }) => suppliersList,
    },
    mutations: {},
    actions: {},
    modules: {},
}
