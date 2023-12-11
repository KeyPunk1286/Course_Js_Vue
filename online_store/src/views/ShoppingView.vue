<template>
    <info-page>
        <div class="shopping-rules">
            <h3 class="shopping-rules__title">Правила купівлі</h3>
            <ul class="shopping-rules__list">
                <li>* Купуємо багато</li>
                <li>* Платимо швидко</li>
                <li>* Насолоджуємось товаром</li>
            </ul>
        </div>
    </info-page>
</template>

<script>
import InfoPage from '@/masterPage/InfoPage.vue'
export default {
    name: 'ShoppingView',
    components: {
        InfoPage,
    },
}
</script>

<style lang="scss" scoped></style>
