<template>
    <div class="parent__front">
        <div class="front__filter">
            <filter-section />
        </div>
        <div class="front__car-list">
            <car-list />
        </div>
    </div>
</template>

<script>
import FilterSection from './FilterSection.vue'
import CarList from './CarList.vue'
export default {
    name: 'ManagerCenter',
    components: {
        FilterSection,
        CarList,
    },
}
</script>

<style lang="scss" scoped></style>
