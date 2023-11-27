<template>
    <div class="driver-list__parent">
        <div v-for="driver in getFilteredDriverList" :key="driver.id" class="parent__drivers-item">
            <div class="drivers-item__bip">ПІБ: {{ driver.nameDrivers }}</div>
            <div class="drivers-item__workExperience">Стаж: {{ driver.workExperience }}</div>
            <div class="drivers-item__button">
                <button @click="onAction(driver.id)" class="button__edit">edit</button>
                <button @click="deleteDriverActions(driver.id)" class="button__delete">delete</button>
            </div>
        </div>
        <div class="parent__add-driver">
            <router-link :to="{ name: 'drivers-edit' }" class="add-driver__link">Додати водія</router-link>
        </div>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
    name: 'DriversList',
    computed: {
        ...mapGetters('drivers', ['getFilteredDriverList', 'getDriversList']),
    },
    methods: {
        ...mapActions('drivers', ['deleteDriverActions']),
        onAction(driverId) {
            this.$router.push({
                name: 'drivers-edit',
                params: {
                    id: driverId,
                },
            })
            console.log(driverId)
        },
    },
}
</script>

<style lang="scss" scoped></style>
