<template>
    <div class="assignment-view">
        <h2 class="assignment-view__new-appointment">Нове призначення:</h2>
        <assignment-creator />
        <h2 class="assignment-view__appointment">Призначені:</h2>
        <assignment-list />
    </div>
</template>

<script>
import AssignmentCreator from '@/components/assignment/AssignmentCreator.vue'
import AssignmentList from '@/components/assignment/AssignmentList.vue'
export default {
    name: 'AssignmentView',
    components: {
        AssignmentCreator,
        AssignmentList,
    },
}
</script>

<style lang="scss" scoped></style>
