<template>
    <div class="parent__assignment-creator">
        <h2 class="assignment-creator__title">Нове призначення :</h2>
        <label for="name" class="assignment-creator__label">Шофер :</label>
        <select v-model="assignment.driverId" id="name" class="assignment-creator__select">
            <option v-for="name in getDriverList" :key="name.id" :value="name.id">
                {{ name.nameDrivers }} - стаж {{ name.workExperience }} років
            </option>
        </select>
        <label for="bus" class="assignment-creator__label">Автобус :</label>
        <select v-model="assignment.busId" id="bus" class="assignment-creator__select">
            <option v-for="bus in getBusesList" :key="bus.id" :value="bus.id">
                {{ bus.numberPlates }} - {{ bus.numberOfPieces }} місць в автобусі
            </option>
        </select>
        <div class="assignment-creator__button"><button @click="onAdd">Додати</button></div>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
    name: 'AssignmentCreator',
    data() {
        return {
            assignment: {},
        }
    },
    computed: {
        ...mapGetters('drivers', ['getDriverList']),
        ...mapGetters('buses', ['getBusesList']),
    },
    methods: {
        ...mapActions('assignment', ['addNewAssignmentsActions']),
        onAdd() {
            this.addNewAssignmentsActions(this.assignment)
            this.assignment = {}
        },
    },
}
</script>

<style lang="scss" scoped></style>
