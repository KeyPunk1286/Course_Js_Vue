<template>
    <div class="interview-component">
        <div class="interview-component__container-creator">
            <div class="container-creator__workers-list">
                <label for="workers">Працівник</label>
                <select v-model="interviewList.fullNameWorker" id="workers">
                    <option v-for="worker in getWorkerList" :key="worker.id" :value="worker.id">
                        {{ worker.fullName }}
                    </option>
                </select>
            </div>

            <div class="container-creator__candidate-list">
                <label for="workers">Кандидат</label>
                <select v-model="interviewList.fullNameCandidate" id="workers">
                    <option v-for="candidate in getCandidateList" :key="candidate.id" :value="candidate.id">
                        {{ candidate.fullName }}
                    </option>
                </select>
            </div>

            <div class="container-creator__days-week">
                <label for="workers">День</label>
                <select v-model="interviewList.day" id="workers">
                    <option v-for="day in daysWeek" :key="day.id" :value="day.dayName">{{ day.dayName }}</option>
                </select>
            </div>
        </div>
        <div class="container-creator__button"><button @click="onAddInterview">Додати</button></div>
        <div v-if="messageError" class="container-creator__messageError">{{ messageError }}</div>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import { daysWeek } from './dataList.js'
export default {
    name: 'InterviewCreator',
    data() {
        return {
            interviewList: {},
        }
    },
    computed: {
        ...mapGetters('interview', ['getWorkerList', 'getCandidateList', 'getErrorMessage']),
        daysWeek() {
            return daysWeek
        },
        messageError() {
            return this.getErrorMessage
        },
    },
    methods: {
        ...mapActions('interview', ['addNewinterview']),
        onAddInterview() {
            this.addNewinterview(this.interviewList)
        },
    },
}
</script>

<style lang="scss" scoped></style>
