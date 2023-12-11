<template>
    <main-page>
        <div class="product-menu">
            <router-link :to="{ name: 'selector' }">пошук товару</router-link>
            <router-link :to="{ name: 'editor' }">додати товар</router-link>
        </div>
        <router-view />
        <div class="product-box">
            <product-card
                v-for="headPhone in getheadPhoneList"
                :key="headPhone.id"
                :info="{ img: headPhone.img, name: headPhone.name, price: headPhone.price, button: 'купити' }"
            />
        </div>
    </main-page>
</template>

<script>
import { mapGetters } from 'vuex'
import MainPage from '@/masterPage/MainPage.vue'
import ProductCard from '@/components/ProductCard.vue'
export default {
    name: 'ProductView',
    components: {
        MainPage,
        ProductCard,
    },
    computed: {
        ...mapGetters('product', ['getheadPhoneList']),
    },
}
</script>

<style lang="scss" scoped></style>
