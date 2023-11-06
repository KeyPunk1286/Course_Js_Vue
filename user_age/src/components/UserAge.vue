<template>
    <label>
        Введіть вік:
        <input type="number" v-model="ageControl" class="inputColorage" :class="colorAge" />
    </label>
</template>

<script>
export default {
    name: 'UserAge',
    props: {
        modelValue: {
            type: Number,
        },
        modelModifiers: {
            default: () => ({}),
        },
    },
    data() {
        return {
            colorAge: null,
        }
    },
    computed: {
        ageControl: {
            get() {
                return this.modelValue
            },
            set(val) {
                if (this.modelModifiers.check) {
                    if (val >= 150) val = 0
                }
                if (this.modelModifiers.setColor) {
                    this.colorAge = this.colorControlAge(val)
                }
                this.$emit('update:modelValue', val)
            },
        },
    },
    methods: {
        colorControlAge(val) {
            let colorClass = null
            if (val <= 10) colorClass = 'green'
            else if (val <= 21) colorClass = 'yellow'
            else colorClass = 'orange'
            return colorClass
        },
    },
}
</script>

<style lang="scss" scoped></style>
