<template>
    <label>
        Введіть свій e-mail:
        <input type="text" v-model.lazy="imputEmail" class="inputColorage" :class="colorClass" />
        <span>Тицяй тут</span>
    </label>
</template>

<script>
const domenEmail = '@inv.mn.edu'
export default {
    name: 'UserEmail',
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
            colorClass: null,
        }
    },
    computed: {
        imputEmail: {
            get() {
                return this.modelValue
            },
            set(val) {
                if (this.modelModifiers.check) {
                    if (/\w*-\w*|\w*_\w*/.test(val)) {
                        val = val + domenEmail
                        this.colorClass = null
                    } else this.colorClass = 'red-valid'
                }
                this.$emit('update:modelValue', val)
            },
        },
    },
}
</script>

<style lang="scss" scoped></style>
