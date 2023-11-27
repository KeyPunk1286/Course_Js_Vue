<template>
    <div class="parent__filter-driver">
        <label class="filter-driver__lable" for="inputName">Фільтри: ПІБ</label>
        <input v-model="dataDriver.nameDrivers" type="text" id="inputName" class="filter-driver__input-name" />
        <label class="filter-driver__lable" for="min">Від:</label>
        <input v-model="dataDriver.workExperienceMin" id="min" type="number" class="filter-driver__workExperienc" />
        <label class="filter-driver__lable" for="max">До:</label>
        <input v-model="dataDriver.workExperienceMax" id="max" type="number" class="filter-driver__workExperienc" />
    </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
    name: 'FilteredDrivers',
    data() {
        return {
            dataDriver: {},
        }
    },
    watch: {
        dataDriver: {
            handler(newValue) {
                this.updateFilterActions(newValue)
            },
            deep: true,
        },
    },
    methods: {
        ...mapActions('drivers', ['updateFilterActions']),
    },
}
</script>

<style lang="scss" scoped></style>
