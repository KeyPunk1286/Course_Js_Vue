<template>
    <div class="buses-list">
        <div v-if="isLoading" class="buses-list__loading">
            <v-progress-linear model-value="20" :height="9"></v-progress-linear>
        </div>

        <div v-else-if="hasError" class="buses-list__error">Error</div>

        <template v-else>
            <div class="buses-list__box">
                <div v-for="bus in getBusesListAll" :key="bus.id" class="box__item-bus">
                    <div class="item-bus__txt">
                        <p>{{ bus.plates }}</p>
                        <p>{{ bus.numberSeats }} (місць)</p>
                    </div>

                    <div class="item-bus__button">
                        <button @click="onEditBus(bus.id)">edit</button>
                        <button @click="deleteItem(bus.id)">delete</button>
                    </div>
                </div>
            </div>

            <div class="buses-list__button">
                <v-btn variant="outlined" @click="addBus">Додати автобус</v-btn>
            </div>
        </template>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
    name: 'BusesList',
    computed: {
        ...mapGetters('busesM', ['getBusesListAll', 'isLoading', 'hasError']),
    },
    methods: {
        ...mapActions('busesM', ['loadBusesList', 'deleteItem']),
        onEditBus(busId) {
            this.$router.push({
                name: 'buses-edit',
                params: {
                    id: busId,
                },
            })
        },
        addBus() {
            this.$router.push({ name: 'buses-edit' })
        },
    },
    created() {
        this.loadBusesList()
    },
}
</script>

<style lang="scss" scoped></style>
