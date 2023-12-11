<template>
    <main-page>
        <div class="home-page">
            <p class="home-page__txt">Вітаємо у нашому інтернет магазині!</p>
            <h1 class="home-page__title">Тут кожен музи чний фанат знаходить свою гармонію.</h1>
        </div>
        <template #rightSide>
            <div class="box-info__right-side">власник: Роман</div>
        </template>
    </main-page>
</template>

<script>
// @ is an alias to /src
import MainPage from '@/masterPage/MainPage.vue'

export default {
    name: 'HomeView',
    components: {
        MainPage,
    },
}
</script>
