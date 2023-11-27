<template>
    <label class="edit-driver__lable">
        <span>ПІБ: </span>
        <input v-model="dataDriver.nameDrivers" type="text" />
    </label>
    <label class="edit-driver__lable">
        <span>Стаж: </span>
        <input v-model="dataDriver.workExperience" type="number" />
    </label>
    <div class="edit-driver__button">
        <button @click="onAction">{{ actionButtonName }}</button>
        <button @click="onReset"></button>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
    name: 'EditDrivers',
    data() {
        return {
            dataDriver: {},
        }
    },
    computed: {
        ...mapGetters('drivers', ['getDriverById']),
        recevedDriverId() {
            return this.$route.params.id
        },
        actionButtonName() {
            return this.recevedDriverId ? 'Зберегти' : 'Створити'
        },
    },
    methods: {
        ...mapActions('drivers', ['addDriverAction', 'updateDriverAction']),
        onAction() {
            if (!this.recevedDriverId) this.addDriverAction(this.dataDriver)
            else this.updateDriverAction(this.dataDriver)
            this.$router.push({ name: 'drivers' })
        },
    },
    created() {
        this.dataDriver = { ...this.getDriverById(this.recevedDriverId) }
        console.log(this.dataDriver)
    },
}
</script>

<style lang="scss" scoped></style>
