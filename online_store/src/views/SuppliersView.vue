<template>
    <main-page>
        <div class="suppliers-view">
            <h2 class="suppliers-view__title">Оберіть постачальника</h2>
            <product-card
                v-for="suppliers in getSuppliersList"
                :key="suppliers.id"
                :info="{ img: suppliers.img, name: suppliers.name, button: 'обрати' }"
            >
                <template #icon><font-awesome-icon :icon="[suppliers.icon, suppliers.iconName]" /> </template>
            </product-card>
        </div>
        <template #leftSide>
            <div class="suppliers-left">Найбільш популярний: Jam music</div>
        </template>
    </main-page>
</template>

<script>
import { mapGetters } from 'vuex'
import ProductCard from '@/components/ProductCard.vue'
import MainPage from '@/masterPage/MainPage.vue'
export default {
    name: 'SuppliersView',
    components: {
        ProductCard,
        MainPage,
    },
    computed: {
        ...mapGetters('suppliers', ['getSuppliersList']),
    },
}
</script>

<style lang="scss" scoped></style>
