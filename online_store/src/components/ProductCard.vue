<template>
    <div class="card">
        <img :src="info.img" class="card__img" />
        <p class="card__name">{{ info.name }}</p>
        <slot name="icon">
            <p class="card__price">{{ info.price }} гр</p>
        </slot>
        <div class="card__button">
            <button>{{ info.button }}</button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ProductCard',
    props: {
        info: {
            type: Object,
            required: true,
        },
    },
}
</script>

<style lang="scss" scoped></style>
