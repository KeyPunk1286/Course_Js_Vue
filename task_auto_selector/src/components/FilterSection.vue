<template>
    <div class="parent__filter-box">
        <h2 class="filter-box__type-auto">Тип транспорта</h2>
        <select v-model="inputType" class="filter-box__type-input" @change="setInputType">
            <option v-for="category in getFilter('type')" :key="category" :value="category">
                {{ category }}
            </option>
        </select>
        <h2 class="filter-box__type-auto">Тип кузова</h2>
        <div v-for="typeBody in getFilter('typeBody')" :key="typeBody" class="filter-box__check-parent">
            <input
                :id="typeBody"
                type="checkbox"
                :value="typeBody"
                @change="setSelectTypeBody(typeBody)"
                class="check-parent__check-box"
            />
            <label :for="typeBody" class="check-parent__lable">{{ typeBody }}</label>
        </div>
        <h2 class="filter-box__type-auto">Марка</h2>
        <select v-model="nameAuto" class="filter-box__name-auto" @change="setAutoName">
            <option v-for="name in getFilter('nameAuto')" :key="name" :value="name">{{ name }}</option>
        </select>
        <h2 class="filter-box__model">Модель</h2>
        <select v-model="modelAuto" class="filter-box__model-auto" @change="setModelAuto">
            <option v-for="model in getFilter('model')" :key="model" :value="model">{{ model }}</option>
        </select>
        <button @click="setRestFilter" class="filter-box__button">Оновити пошук</button>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
    name: 'FilterSection',
    data() {
        return {
            inputType: null,
            selectTypeBody: [],
            nameAuto: null,
            modelAuto: null,
        }
    },
    computed: {
        ...mapGetters(['getCarList']),
        getFilter() {
            return (filterKey) => {
                const filterValues = [...new Set(this.getCarList.map((carInfo) => carInfo[filterKey]))]
                return filterValues
            }
        },
    },
    methods: {
        ...mapActions(['filterTypeCar', 'filterTypeBody', 'filterNameAuto', 'filterModelAuto', 'resetFilter']),
        setInputType() {
            this.filterTypeCar(this.inputType)
        },
        setSelectTypeBody(typeBody) {
            const index = this.selectTypeBody.indexOf(typeBody)
            if (index === -1) this.selectTypeBody.push(typeBody)
            else this.selectTypeBody.splice(index, 1)
            this.filterTypeBody(this.selectTypeBody)
        },
        setAutoName() {
            this.filterNameAuto(this.nameAuto)
        },
        setModelAuto() {
            this.filterModelAuto(this.modelAuto)
        },
        setRestFilter() {
            this.resetFilter()
        },
    },
}
</script>

<style lang="scss" scoped></style>
