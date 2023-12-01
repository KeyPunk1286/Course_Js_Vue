<template>
    <div class="container__interview-list">
        <div v-for="interview in getInterviewList" :key="interview.id" class="interview-list__item">
            <div class="item__name-worker">працівник : {{ interview.nameWorker }}</div>
            <div class="item__name-candidate">кандидат : {{ interview.nameCandidate }}</div>
            <div class="item__day-name">день : {{ interview.dayName }}</div>
            <div class="item__button"><button @click="deleteInterview(interview.id)">видалити</button></div>
        </div>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
    name: 'InterviewList',
    computed: {
        ...mapGetters('interview', ['getInterviewList']),
    },
    methods: {
        ...mapActions('interview', ['deleteInterview']),
    },
}
</script>

<style lang="scss" scoped></style>
