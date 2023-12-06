<template>
    <div class="teacher-list">
        <div v-if="getWarningMessage" class="teacher-list__warning-message">
            <span>Поля треба було заповнити, нового вчителя не додано!</span>
            <button @click="onRemoveWarningMessage">не добавляти</button>
        </div>
        <div v-for="teacher in getTeachersListView" :key="teacher.id" class="teacher-list__item-teacher">
            <div class="item-teacher__name">
                <span>{{ teacher.name }}<span> - </span>{{ getSubjectById(teacher.subjectId).name }}</span>
            </div>
            <div class="item-teacher__button">
                <button @click="onDeleteTeacher(teacher.id)">видалити</button>
            </div>
        </div>
        <div class="teacher-list__button"><button @click="onAddNewTeacher">додати нового вчителя</button></div>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
    name: 'TeachersList',
    computed: {
        ...mapGetters('teachers', ['getTeachersListView', 'getWarningMessage']),
        ...mapGetters('subjects', ['getSubjectById']),
    },
    methods: {
        ...mapActions('teachers', ['onDeleteTeacher', 'removeWarningMessage']),
        onAddNewTeacher() {
            this.$router.push({
                name: 'newTeachers',
            })
        },
        onRemoveWarningMessage() {
            this.removeWarningMessage()
        },
    },
}
</script>

<style lang="scss" scoped></style>
