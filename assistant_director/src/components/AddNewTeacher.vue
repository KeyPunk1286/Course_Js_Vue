<template>
    <div class="add-teacher">
        <div class="add-teacher__input-block">
            <div class="input-block__name">
                <label for="name">Введіть нове ім'я: </label>
                <input v-model="newTeacherObj.name" type="text" id="name" />
            </div>
            <div class="input-block__subject">
                <label for="subject">Введіть номер предмету: </label>
                <input v-model="newTeacherObj.subjectId" type="number" id="subject" />
            </div>
            <div class="input-block__button"><button @click="addNewTeacher">додати</button></div>
        </div>
        <h1 class="add-teacher__title">список предметів по номерам:</h1>
        <div v-for="teacher in getSubjectList" :key="teacher.id" class="add-teacher__item-subject">
            <span>{{ teacher.id }}</span> <span>{{ teacher.name }}</span>
        </div>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
    name: 'AddNewTeacher',
    data() {
        return {
            newTeacherObj: {},
        }
    },
    computed: {
        ...mapGetters('subjects', ['getSubjectList']),
    },
    methods: {
        ...mapActions('teachers', ['addTeacherInTeachersList']),
        addNewTeacher() {
            this.addTeacherInTeachersList(this.newTeacherObj)
            this.$router.push({
                name: 'teachers',
            })
        },
    },
}
</script>

<style lang="scss" scoped></style>
