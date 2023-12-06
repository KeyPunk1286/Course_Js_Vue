<template>
    <div class="subject-page">
        <div v-for="subject in getSubjectList" :key="subject.id" class="subject-page__item">
            <label :for="subject.id">{{ subject.name }}</label>
            <input v-model="selectObjectList" :value="subject.id" type="checkbox" :id="subject.id" />
        </div>
        <div class="subject-page__button"><button @click="onSelectedObject">додати</button></div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
    name: 'SubjectPage',
    data() {
        return {
            selectObjectList: [],
        }
    },
    computed: {
        ...mapGetters('subjects', ['getSubjectList']),
    },
    methods: {
        onSelectedObject() {
            if (this.selectObjectList.length > 0) {
                this.$router.push({
                    name: 'selected-subject',
                    params: { idSubject: this.selectObjectList },
                })
            } else {
                this.$router.push({
                    name: 'error-message',
                })
            }
        },
    },
}
</script>

<style lang="scss" scoped></style>
