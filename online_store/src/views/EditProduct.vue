<template>
    <div class="edit-product">
        <div class="edit-product__name">
            <label for="newName">введіть назву товару</label>
            <input v-model="newProductObj.name" type="text" id="newName" />
        </div>
        <div class="edit-product__img">
            <label for="newImg">введіть адресу фото</label>
            <input v-model="newProductObj.img" type="text" id="newImg" />
        </div>
        <div class="edit-product__price">
            <label for="newPrice">введіть ціну товару</label>
            <input v-model="newProductObj.price" type="text" id="newPrice" />
        </div>
        <div class="edit-product__button">
            <button @click="onClickNewProduct">додати</button>
        </div>
    </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
    name: 'EditProduct',
    data() {
        return {
            newProductObj: {},
        }
    },
    methods: {
        ...mapActions('product', ['addNewProduct']),
        onClickNewProduct() {
            this.addNewProduct(this.newProductObj)
            this.$router.push({
                name: 'product',
            })
            this.newProductObj = {}
        },
    },
}
</script>

<style lang="scss" scoped></style>
