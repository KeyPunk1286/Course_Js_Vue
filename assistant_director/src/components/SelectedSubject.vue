<template>
    <div class="select-subject">
        <div v-for="subject in getNameSubject" :key="subject.id" class="select-subject__item">
            <span>{{ subject.name }}</span>
            <select v-model="teachersSelected" @change="nextIdSelectTeachers(teachersSelected)">
                <option v-for="teacher in getTeachersList(subject.id)" :key="teacher.id" :value="teacher.id">
                    <!-- мабуть так getTeachersList(subject.id)  краще не робити, але по іншему я не зрозумів як отримати  -->
                    {{ teacher.name }}
                </option>
            </select>
        </div>
        <div class="select-subject__button"><button @click="onShowListSelected">показати</button></div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
    name: 'SelectedSubject',
    props: {
        subjectSelectList: {
            type: Array,
            required: true,
        },
    },
    data() {
        return {
            teachersSelected: [],
            teachersSelectedList: [],
        }
    },
    computed: {
        ...mapGetters('subjects', ['getSubjectListById']),
        ...mapGetters('teachers', ['getTeachersList']),
        getNameSubject() {
            return this.getSubjectListById(this.subjectSelectList)
        },
    },
    methods: {
        // ...mapActions('teachers', ['addAssignmentList']),
        nextIdSelectTeachers(val) {
            console.log(val, 'testNewVal')
            this.teachersSelectedList.push(val)
        },
        onShowListSelected() {
            // this.addAssignmentList(this.teachersSelectedList)
            if (this.teachersSelectedList.length > 0) {
                this.$router.push({
                    name: 'selected-list',
                    params: {
                        teacherIdList: this.teachersSelectedList,
                    },
                })
            } else {
                this.$router.push({
                    name: 'error-message',
                    params: {
                        id: 1,
                    },
                })
            }
        },
    },
}
</script>

<style lang="scss" scoped></style>
