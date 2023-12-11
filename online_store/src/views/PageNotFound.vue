<template>
    <main-page>
        <div class="page-not-found">
            <div class="page-not-found__title">Page_Not_Found</div>
            <font-awesome-icon :icon="['fas', 'wifi']" />
        </div>
    </main-page>
</template>

<script>
import MainPage from '@/masterPage/MainPage.vue'
export default {
    name: 'PageNotFound',
    MainPage,
}
</script>

<style lang="scss" scoped></style>
