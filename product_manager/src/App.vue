<template>
    <manager-product-select />
    <form-credit-card v-model:card.divader="numberCard" v-model:date.backslash="expiryDate" v-model:code="secureCode" />
</template>

<script>
import ManagerProductSelect from './components/ManagerProductSelect.vue'
import FormCreditCard from './components/task6/FormCreditCard.vue'

export default {
    name: 'App',
    components: {
        ManagerProductSelect,
        FormCreditCard,
    },
    data() {
        return {
            numberCard: null,
            expiryDate: null,
            secureCode: null,
        }
    },
}
</script>

<style lang="scss">
@import './assets/scss/index.scss';
</style>
