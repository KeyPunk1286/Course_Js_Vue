<template>
    <div class="contact-page">
        <div class="contact-page__link"><router-link :to="{ name: 'home' }">На головну</router-link></div>
    </div>
    <slot></slot>
    <div class="contact-page__galery">
        <h2 class="contact-page__title">Галерея</h2>
        <div class="contact-page__box">
            <div v-for="photo in getGalleryList" :key="photo.id" class="box__img"><img :src="photo.img" /></div>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
    name: 'InfoPage',
    computed: {
        ...mapGetters('gallery', ['getGalleryList']),
    },
}
</script>

<style lang="scss" scoped></style>
