<template>
    <div class="container">
        <nav class="navigator-home">
            <router-link to="/">Головна</router-link> | <router-link to="/drivers">водії</router-link> |
            <router-link to="/buses">водії</router-link> | <router-link to="/assignment">призначення</router-link> |
            <router-link to="/contact">контакти</router-link>
        </nav>
        <router-view />
    </div>
</template>

<style lang="scss">
@import '@/assets/scss/index.scss';
// #app {
//     font-family: Avenir, Helvetica, Arial, sans-serif;
//     -webkit-font-smoothing: antialiased;
//     -moz-osx-font-smoothing: grayscale;
//     // text-align: center;
//     color: #2c3e50;
// }

// nav {
//     padding: 30px;

//     a {
//         font-weight: bold;
//         color: #2c3e50;

//         &.router-link-exact-active {
//             color: #42b983;
//         }
//     }
// }
</style>
