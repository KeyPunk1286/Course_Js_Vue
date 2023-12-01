<template>
    <div class="parent__edit">
        <div class="edit__container">
            <!-- <h2 class="container__candidate-title"></h2> -->
            <label for="inName" class="container__candidate-lable">ім'я :</label>
            <input v-model="updateCandidate.fullName" type="text" id="inName" class="container__candidate-input" />
            <label for="inPosition" class="container__candidate-lable">посада :</label>
            <input v-model="updateCandidate.position" type="text" id="inPosition" class="container__candidate-input" />
            <div class="container__candidate-button">
                <button @click="onAction">{{ actionButtonName }}</button>
                <button @click="onReset">скинути</button>
            </div>
            <div v-if="messageError" class="container__error">{{ messageError }}</div>
        </div>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
    name: 'EditCandidate',
    data() {
        return {
            updateCandidate: {},
        }
    },
    computed: {
        ...mapGetters('candidate', ['getCandidateById', 'getErrorMessage']),

        recevedCandidateId() {
            return this.$route.params.id
        },
        actionButtonName() {
            return this.recevedCandidateId ? 'зберегти' : 'створити'
        },
        messageError() {
            return this.getErrorMessage
        },
    },
    methods: {
        ...mapActions('candidate', ['addNewCandidate', 'updateCandidateAction']),
        onAction() {
            if (!this.recevedCandidateId) this.addNewCandidate(this.updateCandidate)
            else this.updateCandidateAction(this.updateCandidate)

            this.$router.push({ name: 'candidate' })
        },
        onReset() {
            this.$router.push({ name: 'candidate' })
        },
    },
    created() {
        this.updateCandidate = { ...this.getCandidateById(this.recevedCandidateId) }
    },
}
</script>

<style lang="scss"></style>
