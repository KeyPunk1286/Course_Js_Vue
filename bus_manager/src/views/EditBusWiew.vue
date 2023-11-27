<template>
    <div class="parent__edit-bus">
        <label class="edit-bus__lable">
            <span class="lable__txt">Номера:</span>
            <input v-model="busData.numberPlates" type="text" />
        </label>
        <label class="edit-bus__lable">
            <span class="lable__txt">Кількість місць:</span>
            <input v-model="busData.numberOfPieces" type="text" />
        </label>
        <div class="edit-bus__button">
            <button @click="onAction">{{ actionButtonTitle }}</button>
            <button @click="onCancel">Відміна(повернутись)</button>
        </div>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
    name: 'EditBusWiew',
    data() {
        return {
            busData: {},
        }
    },
    computed: {
        ...mapGetters('buses', ['getBusById']),
        recevedBusId() {
            return this.$route.params.id
        },
        actionButtonTitle() {
            return this.recevedBusId ? 'Зберегти' : 'Створити'
        },
    },
    methods: {
        ...mapActions('buses', ['addBusAction', 'updateBusAction']),
        onAction() {
            if (!this.recevedBusId) this.addBusAction(this.busData)
            else this.updateBusAction(this.busData)
            this.$router.push({ name: 'buses' })
        },
        onCancel() {
            this.$router.push({ name: 'buses' })
        },
    },
    created() {
        this.busData = { ...this.getBusById(this.recevedBusId) }
    },
}
</script>

<style lang="scss" scoped></style>
