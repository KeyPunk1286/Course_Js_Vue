<template>
    <div class="buses-edit">
        <div class="buses-edit__plates">
            <label for="platesEdit">Номер: </label>
            <input v-model="busItem.plates" id="platesEdit" type="text" />
        </div>

        <div class="buses-edit__number-seats">
            <label for="numberSeatsEdit">Кількість місць: </label>
            <input v-model="busItem.numberSeats" id="numberSeatsEdit" type="number" />
        </div>

        <div class="buses-edit__button">
            <v-btn variant="outlined" @click="onAction">{{ reactiveNameButtonEdit }}</v-btn>
            <v-btn variant="outlined" @click="optOut">відмовитись</v-btn>
        </div>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
    name: 'BusesEdit',
    data() {
        return {
            busItem: {},
        }
    },
    computed: {
        ...mapGetters('busesM', ['getBusItemById']),
        receivedIdBus() {
            return this.$route.params.id
        },
        reactiveNameButtonEdit() {
            return this.receivedIdBus ? 'Оновити' : 'Зберегти'
        },
    },
    methods: {
        ...mapActions('busesM', ['addItem', 'updateItem']),
        onAction() {
            if (!this.receivedIdBus) {
                this.addItem(this.busItem)
                this.$router.push({ name: 'buses' })
            } else {
                const copyItemBusById = this.getBusItemById(this.receivedIdBus)
                const data = {}
                if (this.busItem.plates !== copyItemBusById.plates) data.plates = this.busItem.plates
                if (this.busItem.numberSeats !== copyItemBusById.numberSeats)
                    data.numberSeats = this.busItem.numberSeats
                this.updateItem({
                    itemId: this.busItem.id,
                    data,
                })
                this.busItem = {}
                this.$router.push({ name: 'buses' })
            }
        },
        optOut() {
            this.$router.push({ name: 'buses' })
        },
    },
    created() {
        this.busItem = { ...this.getBusItemById(this.receivedIdBus) }
    },
}
</script>

<style lang="scss" scoped></style>
