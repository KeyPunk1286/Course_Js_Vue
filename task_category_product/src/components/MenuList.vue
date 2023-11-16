<template>
    <div class="parent__menu">
        <div
            v-for="content in categoryList"
            :key="content.title"
            class="menu__card"
            @click="changeBorder(content.title)"
            :class="{ red__border: borderClass === content.title }"
        >
            <img :src="content.img" class="card__img" />
            <h2 class="card__title">{{ content.product }}</h2>
        </div>
    </div>
</template>

<script>
import { mapActions } from 'vuex'
import categoryList from '../data/categoryList.json'
export default {
    name: 'MenuList',
    data() {
        return {
            categoryList,
            borderClass: null,
        }
    },
    methods: {
        ...mapActions(['filteredProductList']),
        changeBorder(val) {
            this.borderClass = val
            this.filteredProductList(val)
        },
    },
}
</script>

<style lang="scss" scoped></style>
