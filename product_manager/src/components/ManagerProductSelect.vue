<template>
    <div class="manager-box">
        <products-filters v-model:sellers.checkSeller="sellerSelect" v-model:brands.checkBrand="brandSelect" />
        <product-cards-box :cardsList="filterProductList" />
    </div>
</template>

<script>
import ProductsFilters from './ProductsFilters.vue'
import ProductCardsBox from './ProductCardsBox.vue'
import { motorcycleList } from '../constants/Data_product'
export default {
    name: 'ManagerProductSelect',
    components: {
        ProductsFilters,
        ProductCardsBox,
    },
    data() {
        return {
            motorcycleList,
            sellerSelect: null,
            brandSelect: null,
            sellerEmpty: 'Оберіть продавця',
            brandEmpty: 'Оберіть бренд',
        }
    },
    computed: {
        filterProductList() {
            if (this.sellerSelect === this.sellerEmpty || this.brandSelect === this.brandEmpty) return motorcycleList
            else if (this.sellerSelect || this.brandSelect) {
                return motorcycleList.filter((category) => this.isCategoryAccepted(category))
            } else return motorcycleList
        },
    },
    methods: {
        isCategoryPropertyAccepted(category, propTitle, categoryFilter) {
            return !categoryFilter || category[propTitle] === categoryFilter
        },
        isCategoryAccepted(category) {
            return (
                this.isCategoryPropertyAccepted(category, 'seller', this.sellerSelect) &&
                this.isCategoryPropertyAccepted(category, 'brand', this.brandSelect)
            )
        },
    },
}
</script>

<style lang="scss" scoped></style>
