<template>
    <nav class="app-nav">
        <div class="app-nav__menu">
            <router-link to="/">головна</router-link>
            <router-link to="/subject">предменти</router-link>
            <router-link to="/teachers">вчителі</router-link>
        </div>
        <div class="app-nav__login">
            <router-link to="/loginPge">login</router-link>
        </div>
    </nav>
    <router-view />
</template>

<style lang="scss">
@import '../src/assets/scss/';
</style>
