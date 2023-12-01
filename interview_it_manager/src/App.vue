<template>
    <nav>
        <router-link to="/">Головна</router-link> | <router-link to="/workers">Працівники</router-link> |
        <router-link to="/candidate">Кандидати</router-link> | <router-link to="/interview">Співбесіди</router-link>
    </nav>
    <router-view />
</template>

<style lang="scss">
@import '../src/assets/scss/';
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    // text-align: center;
    color: #2c3e50;
}

nav {
    padding: 30px;

    a {
        font-weight: bold;
        color: #2c3e50;

        &.router-link-exact-active {
            color: #42b983;
        }
    }
}
</style>
