<template>
    <div class="error-message">
        <div v-if="selectSubjectsMessage" class="error-message__subject">
            Для того щоб обрати вчителів, спочатку оберіть предемети
        </div>
        <div v-if="selectTeachersMessage" class="error-message__Teacher">
            Для того щоб побачити список треба обрати вчителів
        </div>
        <div class="error-message__button"><button @click="returnHomePage">повернутись на початок</button></div>
    </div>
</template>

<script>
export default {
    name: 'ErrorMessage',
    data() {
        return {
            selectSubjectsMessage: false,
            selectTeachersMessage: false,
        }
    },
    computed: {
        recevedMessageId() {
            return this.$route.params.id
        },
    },
    methods: {
        defineMessage() {
            if (!this.recevedMessageId) return (this.selectSubjectsMessage = true)
            else return (this.selectTeachersMessage = true)
        },
        returnHomePage() {
            this.$router.push({
                name: 'subject',
            })
        },
    },
    created() {
        this.defineMessage()
    },
}
</script>

<style lang="scss" scoped></style>
