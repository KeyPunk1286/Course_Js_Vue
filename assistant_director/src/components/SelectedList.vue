<template>
    <div class="select-List">
        <h2 class="select-List__title">Список призначених вчителів:</h2>
        <div v-for="assigment in nameTeachers" :key="assigment.id" class="select-List__item">
            {{ assigment.name }} - {{ getSubjectById(assigment.subjectId).name }}
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
    name: 'SelectedList',
    props: {
        SelectListTeachers: {
            type: Array,
            required: true,
        },
    },
    computed: {
        ...mapGetters('teachers', ['getTeacherName']),
        ...mapGetters('subjects', ['getSubjectById']),
        nameTeachers() {
            return this.getTeacherName(this.SelectListTeachers)
        },
    },
}
</script>

<style lang="scss" scoped></style>
