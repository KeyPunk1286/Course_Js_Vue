<template>
    <div class="page__shop">
        <h2 class="shop__title">Список товарів:</h2>
        <ul class="shop__list">
            <li v-for="category in getCategoriesProduct" :key="category" @click="onCategoryClick(category)">
                {{ category }}
            </li>
        </ul>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
    name: 'ShopView',
    computed: {
        ...mapGetters(['getProductList']),
        getCategoriesProduct() {
            const productCategories = new Set(this.getProductList.map((categories) => categories.categories))
            const uniqueCategoriesArray = Array.from(productCategories)
            return uniqueCategoriesArray
        },
    },
    methods: {
        onCategoryClick(category) {
            console.log(category, 'testClick')
            this.$router.push({
                name: 'category',
                params: {
                    category: category,
                },
            })
        },
    },
}
</script>

<style lang="scss" scoped></style>
