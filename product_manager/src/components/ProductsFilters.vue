<template>
    <div class="parent-filter">
        <div>
            <label>
                продавець:
                <select v-model="selectSeller" :class="colorBorderSeller">
                    <option>Оберіть продавця</option>
                    <option v-for="seller in sellerList" :key="seller" :value="seller">{{ seller }}</option>
                </select>
            </label>
        </div>
        <div>
            <label>
                Бренд:
                <select v-model="selectBrand" :class="coloBorderBrand">
                    <option>Оберіть бренд</option>
                    <option v-for="brand in brandList" :key="brand" :value="brand">{{ brand }}</option>
                </select>
            </label>
        </div>
    </div>
</template>

<script>
import { motorcycleList } from '../constants/Data_product'
export default {
    name: 'ProductsFilters',
    props: {
        sellers: {
            type: String,
        },
        sellersModifiers: {
            default: () => ({}),
        },
        brands: {
            type: String,
        },
        brandsModifiers: {
            default: () => ({}),
        },
    },
    data() {
        return {
            colorBorderSeller: null,
            coloBorderBrand: null,
        }
    },
    computed: {
        selectSeller: {
            get() {
                return this.sellers
            },
            set(val) {
                if (this.sellersModifiers.checkSeller) {
                    if (val === 'Оберіть продавця') this.colorBorderSeller = 'green-border'
                    else this.colorBorderSeller = null
                }
                this.$emit('update:sellers', val)
            },
        },
        selectBrand: {
            get() {
                return this.brands
            },
            set(val) {
                if (this.brandsModifiers.checkBrand) {
                    if (val === 'Оберіть бренд') this.coloBorderBrand = 'green-border'
                    else this.coloBorderBrand = null
                }
                this.$emit('update:brands', val)
            },
        },
        sellerList() {
            let sellersList = new Set(motorcycleList.map((seller) => seller.seller))
            return sellersList
        },
        brandList() {
            let brandList = new Set(motorcycleList.map((brand) => brand.brand))
            return brandList
        },
    },
}
</script>

<style lang="scss" scoped>
.green-border {
    border: 10px green solid;
}
</style>
