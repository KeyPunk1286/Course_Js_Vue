<template>
    <div class="assignment-creator">
        <div class="assignment-creator__driver-select">
            <label for="assignmentDriver">Шофер: </label>
            <select v-model="assignmentItem.driverId" id="assignmentDriver">
                <option v-for="driver in getDriversList" :key="driver.id" :value="driver.id">
                    <span>{{ driver.name }} - {{ driver.experience }} (років стажу)</span>
                </option>
            </select>
        </div>

        <div class="assignment-creator__bus-select">
            <label for="assignmentBus">Автобус: </label>
            <select v-model="assignmentItem.busId" id="assignmentBus">
                <option v-for="bus in getBusesListAll" :key="bus.id" :value="bus.id">
                    <span>{{ bus.plates }}</span> - <span>{{ bus.numberSeats }} (місць)</span>
                </option>
            </select>
        </div>

        <div class="assignment-creator__button">
            <v-btn variant="outlined" @click="onAssignment">призначити</v-btn>
            <!-- <button @click="onAssignment">призначити</button> -->
        </div>
    </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
    name: 'AssignmentCreator',
    data() {
        return {
            assignmentItem: {},
        }
    },
    computed: {
        ...mapGetters('driversM', ['getDriversList']),
        ...mapGetters('busesM', ['getBusesListAll']),
    },
    methods: {
        ...mapActions('driversM', ['loadList']),
        ...mapActions('busesM', ['loadBusesList']),
        ...mapActions('assignmentsM', ['addItem']),
        onAssignment() {
            this.addItem(this.assignmentItem)
            this.assignmentItem = {}
        },
    },
    created() {
        this.loadList()
        this.loadBusesList()
    },
}
</script>

<style lang="scss" scoped></style>
