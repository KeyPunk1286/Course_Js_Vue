<template>
    <h2 class="assignments__title">Призначення</h2>
    <div class="assignments__list">
        <assignment-list />
    </div>
    <div class="assignments__creator">
        <assignment-creator />
    </div>
</template>

<script>
import AssignmentList from './AssignmentList.vue'
import AssignmentCreator from './AssignmentCreator.vue'
export default {
    name: 'AssignmentWiew',
    components: {
        AssignmentList,
        AssignmentCreator,
    },
}
</script>

<style lang="scss" scoped></style>
