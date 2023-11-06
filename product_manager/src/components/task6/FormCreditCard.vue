<template>
    <div class="parent-form">
        <p>Card Number</p>
        <input type="text" class="form-input" v-model="cardNumber" />
        <div class="form-box">
            <div class="box-date">
                <p>EXPIRY DATE</p>
                <input type="text" class="box-input" v-model="dateExpiry" />
            </div>
            <div class="box-code">
                <p>SECURE CODE</p>
                <input type="text" class="box-input" v-model="codeSecure" />
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'FormCreditCard',
    props: {
        card: {
            type: String,
        },
        cardModifiers: {
            default: () => ({}),
        },
        date: {
            type: String,
        },
        dateModifiers: {
            default: () => ({}),
        },
        code: {
            type: String,
        },
        codeModifiers: {
            default: () => ({}),
        },
    },
    computed: {
        cardNumber: {
            get() {
                return (this.card ?? '').toString().replace(/\B(?=(\d{4})+(?!\d))/g, ' ')
            },
            set(val) {
                if (this.cardModifiers.divader) val = val.replace(/\s/g, '')
                this.$emit('update:card', val)
            },
        },
        dateExpiry: {
            get() {
                return (this.date ?? '').toString().replace(/(\d{2})(\d{2})/, '$1/$2')
            },
            set(val) {
                if (this.dateModifiers.backslash) this.$emit('update:date', val)
            },
        },
        codeSecure: {
            get() {
                return this.code
            },
            set(val) {
                this.$emit('update:code', val)
            },
        },
    },
}
</script>

<style lang="scss" scoped></style>
