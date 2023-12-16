<template>
    <div class="driver-view">
        <h2 class="driver-view__title">Нащі водії:</h2>
        <filter-drivers />
        <list-driver />
    </div>
</template>

<script>
import FilterDrivers from '@/components/drivers/FilterDrivers.vue'
import ListDriver from '@/components/drivers/ListDriver.vue'
export default {
    name: 'DriversView',
    components: {
        FilterDrivers,
        ListDriver,
    },
}
</script>

<style lang="scss" scoped></style>
