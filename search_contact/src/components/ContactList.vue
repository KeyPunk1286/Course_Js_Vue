<template>
    <div class="parent__contact-list">
        <div v-for="contact in getontsctList" :key="contact.id" class="contact-list__contact">
            <div class="contact__pic"></div>
            <div class="contact__info">
                <h2 class="info__title">{{ contact.name }}</h2>
                <p class="info__email">{{ contact.email }}</p>
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
    name: 'ContactList',
    computed: {
        ...mapGetters(['getontsctList']),
    },
}
</script>

<style lang="scss" scoped></style>
