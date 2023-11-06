<template>
    <div class="parent-box">
        <div class="task">
            <p class="txt">Завдання перше</p>
            <user-age v-model.check.setColor="controlAge" />
        </div>
        <div class="task">
            <p class="txt">Завдання друге</p>
            <file-path v-model.checkPath="pathFile" />
        </div>
        <div class="task">
            <p class="txt">Завдання третє</p>
            <user-email v-model.check="ueserName" />
        </div>
        <div class="task">
            <p class="txt">Завдання четверте</p>
            <login-age-control v-model:loginInput.checkName="ueserLogin" v-model:ageInput.checkAge="userAge" />
        </div>
    </div>
</template>

<script>
import UserAge from './components/UserAge.vue'
import FilePath from './components/FilePath.vue'
import UserEmail from './components/UserEmail.vue'
import LoginAgeControl from './components/LoginAgeControl.vue'
export default {
    name: 'App',
    components: {
        UserAge,
        FilePath,
        UserEmail,
        LoginAgeControl,
    },
    data() {
        return {
            controlAge: null,
            pathFile: null,
            ueserName: null,
            ueserLogin: null,
            userAge: null,
        }
    },
}
</script>

<style lang="scss">
@import './assets/scss/index.scss';
</style>
