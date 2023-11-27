<template>
    <div class="parent-component__driver">
        <h2 class="driver__title">Нащі водії :</h2>
        <div class="driver__filter">
            <filtered-drivers />
        </div>
        <div class="driver__driver-lis">
            <drivers-list class="driver__driver-lis" />
        </div>
    </div>
</template>

<script>
import DriversList from './DriversList.vue'
import FilteredDrivers from './FilteredDrivers.vue'
export default {
    name: 'ManagerDriver',
    components: {
        DriversList,
        FilteredDrivers,
    },
}
</script>

<style lang="scss" scoped></style>
