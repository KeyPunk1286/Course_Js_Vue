<template>
    <div class="wrapper__box-add">
        <div class="box-add__component" @click="toggleVisibleInputComponent">
            <div class="component__plus">+</div>
            <div class="component__title">Новий контакт</div>
        </div>
        <div v-if="isVisibleInput" class="box-add__input-box">
            <input type="text" placeholder="Name" class="input-box__name" v-model="inputName" />
            <input type="text" placeholder="E-mail" class="input-box__email" v-model="inputEmail" />
            <button class="input-box__button" @click="addContact">Add</button>
        </div>
    </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
    name: 'AddNewContact',
    data() {
        return {
            isVisibleInput: false,
            inputName: null,
            inputEmail: null,
        }
    },
    methods: {
        ...mapActions(['addNewContact']),
        toggleVisibleInputComponent() {
            this.isVisibleInput = !this.isVisibleInput
        },
        addContact() {
            this.addNewContact({ name: this.inputName, email: this.inputEmail })
            this.inputName = null
            this.inputEmail = null
            this.isVisibleInput = !this.isVisibleInput
        },
    },
}
</script>

<style lang="scss" scoped></style>
