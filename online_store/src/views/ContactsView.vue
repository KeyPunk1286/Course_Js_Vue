<template>
    <info-page>
        <div class="contact-page">
            <h3 class="contact-page__title">Нащі контакти:</h3>
            <ul class="contact-page__list">
                <li>Адреса: Київ, вул. Драгоманова 31-д</li>
                <li>Менеджер: Сергій</li>
                <li>Заступник: Баба галя</li>
            </ul>
        </div>
    </info-page>
</template>

<script>
import InfoPage from '@/masterPage/InfoPage.vue'
export default {
    name: 'ContactsView',
    components: {
        InfoPage,
    },
}
</script>

<style lang="scss" scoped></style>
