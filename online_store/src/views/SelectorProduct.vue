<template>
    <div class="selector-product">
        <div class="selector-product__input">
            <label for="searchProduct">введіть назву продукції</label>
            <input v-model="searchName" type="text" id="searchProduct" />
        </div>
    </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
    name: 'SelectorProduct',
    data() {
        return {
            searchName: null,
        }
    },

    watch: {
        searchName(val) {
            this.addNewValueNameProduct(val)
        },
    },
    methods: {
        ...mapActions('product', ['addNewValueNameProduct']),
    },
}
</script>

<style lang="scss" scoped></style>
