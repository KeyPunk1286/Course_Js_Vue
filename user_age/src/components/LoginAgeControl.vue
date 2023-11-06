<template>
    <label>
        Ім'я користувача
        <input type="text" v-model="loginUser" class="inputColorage" :class="colorClassLogin" />
    </label>
    <br />
    <label>
        Вік користувача
        <input type="number" v-model="ageUser" class="inputColorage" :class="colorClassAge" />
    </label>
</template>

<script>
export default {
    name: 'LoginAgeControl',
    props: {
        loginInput: {
            type: String,
        },
        loginInputModifiers: {
            default: () => ({}),
        },
        ageInput: {
            type: Number,
        },
        ageInputModifiers: {
            default: () => ({}),
        },
    },
    data() {
        return {
            colorClassLogin: null,
            colorClassAge: null,
        }
    },
    computed: {
        loginUser: {
            get() {
                return this.loginInput
            },
            set(val) {
                if (this.loginInputModifiers.checkName) {
                    if (val.length < 1) this.colorClassLogin = 'red-valid'
                    else this.colorClassLogin = null
                }
                this.$emit('update:loginInput', val)
            },
        },
        ageUser: {
            get() {
                return this.ageInput
            },
            set(val) {
                if (this.ageInputModifiers.checkAge) {
                    if (val < 18) this.colorClassAge = 'red-valid'
                    else this.colorClassAge = 'green'
                }
                this.$emit('update:ageInput', val)
            },
        },
    },
}
</script>

<style lang="scss" scoped></style>
