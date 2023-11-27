<template>
    <nav>
        <router-link to="/">Головна</router-link> | <router-link to="/drivers">Водії</router-link> |
        <router-link to="/buses">Автобуси</router-link> |
        <router-link to="/assignment">Призначення</router-link>
    </nav>
    <router-view />
</template>

<style lang="scss">
@import '../src/assets/scss/'; // #app {
//     font-family: Avenir, Helvetica, Arial, sans-serif;
//     -webkit-font-smoothing: antialiased;
//     -moz-osx-font-smoothing: grayscale;
//     text-align: center;
//     color: #2c3e50;
// }

nav {
    padding: 30px;
    max-width: 1000px;
    margin: 0 auto;

    a {
        font-weight: bold;
        color: #2c3e50;

        &.router-link-exact-active {
            color: #42b983;
        }
    }
}
</style>
