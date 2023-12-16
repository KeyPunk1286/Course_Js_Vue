<template>
    <div class="list-driver">
        <div v-if="isLoading" class="list-driver__loader">
            <v-progress-linear model-value="20" :height="9"></v-progress-linear>
        </div>
        <div v-else-if="hasError" class="list-driver__error">Error</div>
        <template v-else>
            <div class="list-driver__box">
                <div v-for="driver in getFilteredDrivers" :key="driver.id" class="box__item">
                    <div class="item__txt">
                        <p>{{ driver.name }}</p>
                        <p>{{ driver.experience }} (стаж)</p>
                    </div>
                    <div class="item__btn">
                        <button @click="onEdit(driver.id)">edit</button
                        ><button @click="deleteItem(driver.id)">delete</button>
                    </div>
                </div>
            </div>
            <div class="list-driver__button">
                <v-btn variant="outlined" @click="onAddDriver">Додати водія</v-btn>
            </div>
        </template>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
    name: 'ListDriver',
    computed: {
        ...mapGetters('driversM', ['getFilteredDrivers', 'isLoading', 'hasError']),
    },
    methods: {
        ...mapActions('driversM', ['loadList', 'deleteItem']),
        onEdit(driveriId) {
            this.$router.push({
                name: 'drivers-edit',
                params: {
                    id: driveriId,
                },
            })
        },
        onAddDriver() {
            this.$router.push({ name: 'drivers-edit' })
        },
    },
    created() {
        this.loadList()
    },
}
</script>

<style lang="scss" scoped></style>
