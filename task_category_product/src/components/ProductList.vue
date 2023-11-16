<template>
    <div class="box__product">
        <div v-for="unit in getProductList" :key="unit.id" class="product__unit">
            <img :src="unit.img" class="unit__img" />
            <h2 class="unit__title">{{ unit.info }}</h2>
            <div class="unit__price">{{ unit.price }}</div>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
    name: 'ProductList',
    computed: {
        ...mapGetters(['getProductList']),
    },
}
</script>

<style lang="scss" scoped></style>
