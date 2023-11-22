<template>
    <div class="wrapper-components">
        <search-component />
        <add-new-contact />
        <contact-list />
    </div>
</template>

<script>
import SearchComponent from '@/components/SearchComponent.vue'
import AddNewContact from '@/components/AddNewContact.vue'
import ContactList from '@/components/ContactList.vue'
export default {
    components: {
        SearchComponent,
        AddNewContact,
        ContactList,
    },
}
</script>

<style lang="scss" scoped></style>
