<template>
    <div class="edit-driver">
        <div class="edit-driver__name">
            <label for="nameEdit">ПІБ: </label>
            <input v-model="driverData.name" id="nameEdit" type="text" />
        </div>
        <div class="edit-driver__exp">
            <label for="expEdit">Стаж: </label>
            <input v-model="driverData.experience" id="expEdit" type="nuber" />
        </div>
        <div class="edit-driver__button">
            <v-btn variant="outlined" @click="onAction">{{ reactiveName }}</v-btn>
            <v-btn variant="outlined" @click="optOut">відмовитись</v-btn>
        </div>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
    name: 'DriversEdit',
    data() {
        return {
            driverData: {},
        }
    },
    computed: {
        ...mapGetters('driversM', ['getDriverItemById']),
        receivedId() {
            return this.$route.params.id
        },
        reactiveName() {
            return this.receivedId ? 'Оновити' : 'Зберегти'
        },
    },
    methods: {
        ...mapActions('driversM', ['updateItem', 'addItem']),
        onAction() {
            if (!this.receivedId) {
                this.addItem(this.driverData)
                this.$router.push({ name: 'drivers' })
            } else {
                const copyItemDriver = this.getDriverItemById(this.receivedId)
                const data = {}

                if (this.driverData.name !== copyItemDriver.name) data.name = this.driverData.name
                if (this.driverData.experience !== copyItemDriver.experience)
                    data.experience = this.driverData.experience
                this.updateItem({
                    itemId: this.driverData.id,
                    data,
                })
                this.driverData = {}
                this.$router.push({ name: 'drivers' })
            }
        },
        optOut() {
            this.$router.push({ name: 'drivers' })
        },
    },
    created() {
        this.driverData = { ...this.getDriverItemById(this.receivedId) }
    },
}
</script>

<style lang="scss" scoped></style>
