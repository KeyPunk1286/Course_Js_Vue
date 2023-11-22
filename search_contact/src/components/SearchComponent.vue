<template>
    <div class="search__parent">
        <input type="text" class="parent__input" placeholder="search" v-model="inputName" />
    </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
    name: 'SearchComponent',
    data() {
        return {
            inputName: null,
        }
    },
    watch: {
        inputName(newValue) {
            this.filterContact(newValue)
        },
    },
    methods: {
        ...mapActions(['filterContact']),
    },
}
</script>

<style lang="scss" scoped></style>
