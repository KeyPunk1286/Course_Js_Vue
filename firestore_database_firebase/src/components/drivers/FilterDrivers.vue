<template>
    <div class="filter-driver">
        <div class="filter-driver__box">
            <div class="box__input">
                <div class="input__name">
                    <span>Фільри:</span>
                    <label for="name">ПІБ</label>
                    <input v-model="driverObj.name" type="text" id="name" />
                </div>

                <div class="input__age">
                    <span>Стаж:</span>
                    <div class="age__min">
                        <label for="minAge">Від:</label>
                        <input v-model="driverObj.minAge" type="number" id="minAge" />
                    </div>
                    <div class="age__max">
                        <label for="maxAge">До:</label>
                        <input v-model="driverObj.maxAge" type="number" id="maxAge" />
                    </div>
                </div>
            </div>

            <div class="box__button">
                <v-btn variant="outlined" @click="onReset">скинути фільтр</v-btn>
            </div>
        </div>
    </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
    name: 'FilterDrivers',
    data() {
        return {
            driverObj: {},
        }
    },

    watch: {
        driverObj: {
            handler(newValue) {
                this.updateFilter(newValue)
            },
            deep: true,
        },
    },
    methods: {
        ...mapActions('driversM', ['updateFilter']),
        onReset() {
            this.driverObj = {}
        },
    },
}
</script>

<style lang="scss" scoped></style>
