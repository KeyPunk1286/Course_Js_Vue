<template>
    <div class="parend-card card">
        <img :src="productList.image" class="card-img" />
        <div class="card-title">{{ productList.title }}</div>
        <div class="card-price">{{ productList.price }}</div>
    </div>
</template>

<script>
export default {
    name: 'ProductCard',
    props: {
        productList: {
            type: Object,
            default: () => ({}),
        },
    },
}
</script>

<style lang="scss" scoped></style>
