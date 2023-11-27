<template>
    <div class="parent__buses">
        <div v-for="bus in getBusesList" :key="bus.id" class="buses__item">
            <div class="item__number-plates">
                <span>номер:</span><span>{{ bus.numberPlates }}</span>
            </div>
            <div class="item__number-pieces">
                <span>кількість місць:</span><span>{{ bus.numberOfPieces }}</span>
            </div>
            <div class="item__button">
                <button @click="onEdit(bus.id)" class="button__edit">edit</button>
                <button @click="deleteBusActions(bus.id)" class="button__delete">delete</button>
            </div>
        </div>
        <router-link :to="{ name: 'buses-edit' }" class="buses__link">Додати</router-link>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
    name: 'BusesWiew',
    computed: {
        ...mapGetters('buses', ['getBusesList']),
    },
    methods: {
        ...mapActions('buses', ['deleteBusActions']),
        onEdit(busId) {
            this.$router.push({
                name: 'buses-edit',
                params: {
                    id: busId,
                },
            })
        },
    },
}
</script>

<style lang="scss" scoped></style>
