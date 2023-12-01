<template>
    <div class="interview-creator">
        <interview-creator />
    </div>
    <div class="interview-list-manager">
        <interview-list />
    </div>
</template>

<script>
import InterviewCreator from './InterviewCreator.vue'
import InterviewList from './InterviewList.vue'
export default {
    name: 'ManagerInterview',
    components: {
        InterviewCreator,
        InterviewList,
    },
}
</script>

<style lang="scss" scoped></style>
