<template>
    <div class="buses-view">
        <h2 class="buses-view__title">Нащі автобуси:</h2>
        <buses-list />
    </div>
</template>

<script>
import BusesList from '@/components/buses/BusesList.vue'
export default {
    name: 'BusesView',
    components: {
        BusesList,
    },
}
</script>

<style lang="scss" scoped></style>
