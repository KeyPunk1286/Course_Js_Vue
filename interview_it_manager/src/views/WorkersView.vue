<template>
    <div class="parent__worker">
        <div class="worker__container">
            <div class="container__title">Нащі працівники:</div>
            <div v-for="worker in getWorkerList" :key="worker" class="container__item-worker">
                <div class="item-worker__name">{{ worker.fullName }}</div>
                <div class="item-worker__position">{{ worker.position }}</div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
    name: 'WorkersView',
    computed: {
        ...mapGetters('workers', ['getWorkerList']),
    },
}
</script>

<style lang="scss" scoped></style>
