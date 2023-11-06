<template>
    <label>
        Введіть шлях до файлу:
        <input type="text" v-model="pathCheck" class="inputColorage" :class="colorNotValid" />
    </label>
    <!-- <span v-if="onValidate()">OK</span> -->
</template>

<script>
export default {
    name: 'FilePath',
    props: {
        modelValue: {
            type: String,
        },
        modelModifiers: {
            default: () => ({}),
        },
    },
    data() {
        return {
            colorNotValid: null,
        }
    },
    computed: {
        pathCheck: {
            get() {
                return this.modelValue
            },
            set(val) {
                if (this.modelModifiers.checkPath) {
                    if (val.endsWith('.js')) this.colorNotValid = null
                    else this.colorNotValid = 'red-valid'
                }
                this.$emit('update:modelValue', val)
            },
        },
    },
    // хотів разробити умовний рендерінг для слова ок
    // зробив для цього метод, але чомусь не спрацьовувало
    // видавало помилку.. типу. Підскажіть де я втпупив??? Дякую !
    // methods: {
    //   onValidate(val) {
    //     return val.endsWith('.js')
    //   }
    // },
}
</script>

<style lang="scss" scoped></style>
