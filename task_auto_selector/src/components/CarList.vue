<template>
    <div v-for="car in getFilteredCarList" :key="car.id" class="car__card">
        <div class="card__wraper-img"><img :src="car.img" /></div>
        <div class="card__wraper-info">
            <div class="wraper-info__title">
                <span>{{ car.nameAuto }}</span> <span>{{ car.model }}</span> <span>{{ car.year }}</span>
            </div>
            <div class="wraper-info__type-body">{{ car.typeBody }}</div>
            <div class="wraper-info__price">{{ car.price }} $</div>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
    name: 'CarList',
    computed: {
        ...mapGetters(['getFilteredCarList']),
    },
}
</script>

<style lang="scss" scoped></style>
