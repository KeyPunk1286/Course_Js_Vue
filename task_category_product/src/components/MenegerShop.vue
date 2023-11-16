<template>
    <menu-list />
    <product-list />
</template>

<script>
import MenuList from './MenuList.vue'
import ProductList from './ProductList.vue'
export default {
    name: 'MenegerShop',
    components: {
        MenuList,
        ProductList,
    },
}
</script>

<style lang="scss" scoped></style>
