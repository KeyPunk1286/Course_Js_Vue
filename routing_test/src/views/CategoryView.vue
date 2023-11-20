<template>
    <div class="page-category">
        <div v-for="product in productList" :key="product.id" class="category__cards">
            <img :src="product.img" class="cards__img" />
            <h2 class="cards__title">{{ product.title }}</h2>
            <p class="cards__price">{{ product.price }}</p>
        </div>
    </div>
    <div @click="onHomeClick" class="page-button"><button class="button__home">На головну</button></div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
    name: 'CategoryView',
    data() {
        return {
            productList: [],
        }
    },
    computed: {
        ...mapGetters(['getFilteredProductList']),
        categoryName() {
            return this.$route.params.category
        },
    },
    methods: {
        onHomeClick() {
            this.$router.push({
                name: 'home',
            })
        },
    },
    created() {
        this.productList = this.getFilteredProductList(this.categoryName)
        console.log(this.productList, 'tets product')
    },
}
</script>

<style lang="scss" scoped></style>
