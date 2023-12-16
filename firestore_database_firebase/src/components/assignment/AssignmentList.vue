<template>
    <div class="assignment-list">
        <div v-if="isLoading" class="assignment-list__loading">
            <v-progress-linear model-value="20" :height="9"></v-progress-linear>
        </div>
        <div v-else-if="hasError" class="assignment-list__error">Error</div>
        <template v-else>
            <div class="assignment-list__box-item">
                <div v-for="assignment in getAssignmentList" :key="assignment.id" class="box-item__appointment">
                    <div class="appointment__txt">
                        <span>{{ assignment.driverName }}</span>
                        <span>{{ assignment.busNumber }}</span>
                    </div>
                    <div class="appointment__button"><button @click="deleteItem(assignment.id)">delete</button></div>
                </div>
            </div>
        </template>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
    name: 'AssignmentCreator.vue',
    computed: {
        ...mapGetters('assignmentsM', ['getAssignmentList', 'isLoading', 'hasError']),
    },
    methods: {
        ...mapActions('assignmentsM', ['loadList', 'deleteItem']),
    },
    created() {
        this.loadList()
    },
}
</script>

<style lang="scss" scoped></style>
