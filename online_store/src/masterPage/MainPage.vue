<template>
    <header class="header">
        <nav class="header-nav">
            <router-link to="/">Головна</router-link> | <router-link to="/product">товари</router-link> |
            <router-link to="/suppliers">постачальники</router-link> |
            <router-link to="/contacts">контакти</router-link> |
            <router-link to="/shopping-rules">правила купівлі</router-link>
        </nav>
    </header>
    <slot></slot>

    <div class="footer">
        <slot name="leftSide">
            <div class="footer__leftSide">рейтинг магазину: 54449</div>
        </slot>
        <slot name="rightSide">
            <div class="footer__rightSide">статус: <span>відчинео</span></div>
        </slot>
    </div>
</template>

<script>
export default {
    name: 'MainPage',
}
</script>

<style lang="scss" scoped></style>
