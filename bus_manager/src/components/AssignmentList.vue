<template>
    <div class="parent__assignment">
        <div v-for="item in getFilledAssignmentList" :key="item.id" class="assignment__item">
            <div class="item__name-driver">{{ item.driverId }}</div>
            <div class="item__number-plate">{{ item.busId }}</div>
            <div @click="deleteAssignmentActions(item.id)" class="item__button"><button>delete</button></div>
        </div>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
    name: 'AssignmentList',
    computed: {
        ...mapGetters('assignment', ['getFilledAssignmentList']),
    },
    methods: {
        ...mapActions('assignment', ['deleteAssignmentActions']),
    },
}
</script>

<style lang="scss" scoped></style>
