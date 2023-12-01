<template>
    <div class="parent-component__candidate">
        <div class="candidate__container">
            <h2 class="container__title">Кандидати на посаду:</h2>
            <div v-for="persone in getCandidateList" :key="persone.id" class="container__item-candidate">
                <div class="item-candidate__name">{{ persone.fullName }}</div>
                <div class="item-candidate__position">{{ persone.position }}</div>
                <div class="item-candidate__button">
                    <button @click="onEdit(persone.id)" class="item-candidate__edit">змінити</button>
                    <button @click="deleteCandidate(persone.id)" class="item-candidate__delete">видалити</button>
                </div>
            </div>
            <div class="container__button"><button @click="onAddNewCandidate">додати кандидата</button></div>
        </div>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
    name: 'CandidateView',
    computed: {
        ...mapGetters('candidate', ['getCandidateList']),
    },
    methods: {
        ...mapActions('candidate', ['deleteCandidate']),
        onAddNewCandidate() {
            this.$router.push({
                name: 'candidate-edit',
            })
        },
        onEdit(personeId) {
            this.$router.push({
                name: 'candidate-edit',
                params: {
                    id: personeId,
                },
            })
        },
    },
}
</script>

<style lang="scss" scoped></style>
