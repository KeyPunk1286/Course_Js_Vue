<template>
    <div class="login-page">
        <div class="login-page__username">
            <label for="username">username</label>
            <input v-model="inUserName" type="text" id="username" />
        </div>
        <div class="login-page__pass">
            <label for="username">password</label>
            <input v-model="inPassword" type="password" id="username" />
        </div>
        <div class="login-page__button"><button @click="onLogin">login</button></div>
    </div>
</template>

<script>
export default {
    name: 'LoginPage',
    data() {
        return {
            inUserName: null,
            inPassword: null,
        }
    },
    methods: {
        onLogin() {
            window.userName = this.inUserName
            if (this.$route.query.redirect)
                this.$router.push({
                    path: this.$route.query.redirect,
                })
            else this.$router.push({ path: '/' })
        },
    },
}
</script>

<style lang="scss" scoped></style>
