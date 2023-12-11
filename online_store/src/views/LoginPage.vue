<template>
    <div class="login-page">
        <div class="login-page__box">
            <label class="box__label">
                <span class="label__span">username</span>
                <input v-model="userName" type="text" class="label__input" />
            </label>
            <label class="box__label">
                <span class="label__span">password</span>
                <input v-model="password" type="text" class="label__input" />
            </label>
        </div>
        <div class="login-page__button"><button :disabled="!userName || !password" @click="onLogin">login</button></div>
    </div>
</template>

<script>
export default {
    name: 'LoginPage',
    data() {
        return {
            userName: null,
            password: null,
        }
    },
    methods: {
        onLogin() {
            localStorage.setItem(
                'authParams',
                JSON.stringify({
                    userName: this.userName,
                    token: 'testToken',
                })
            )
            this.$router.push({
                name: 'editor',
            })
        },
    },
}
</script>

<style lang="scss" scoped></style>
