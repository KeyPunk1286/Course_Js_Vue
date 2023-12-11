export default {
    namespaced: true,
    state: {
        galleryList: [
            {
                id: 1,
                img: 'https://jam.ua/images/menu/270/category-270x422-clav.png',
            },
            {
                id: 2,
                img: 'https://jam.ua/images/menu/270/category-270x422-thr10ii.png',
            },
            {
                id: 3,
                img: 'https://jam.ua/images/menu/270/category-270x422-gt.png',
            },
            {
                id: 4,
                img: 'https://jam.ua/images/menu/270/category-270x422-viol.png',
            },
        ],
    },
    getters: {
        getGalleryList: ({ galleryList }) => galleryList,
    },
    mutations: {},
    actions: {},
    modules: {},
}
