<template>
    <div class="parent-boxcard">
        <product-card v-for="card in cardsList" :key="card.id" :productList="card" />
    </div>
</template>

<script>
import ProductCard from './ProductCard.vue'
export default {
    name: 'ProductCardsBox',
    components: {
        ProductCard,
    },
    props: {
        cardsList: {
            type: Array,
            default: () => [],
        },
    },
}
</script>

<style lang="scss" scoped></style>
