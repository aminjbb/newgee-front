<template>
    <v-row justify="center" align="center" class="mt-8">
        <v-col cols="5">
            <v-autocomplete class="custom-placeholer-color" :loading="loading" v-model="productSelected" :items="items"
                placeholder="search a game" background-color="#111A17" dense @keyup="searchProduct()" append-icon=""
                :search-input.sync="search" outlined hide-details></v-autocomplete>
        </v-col>
    </v-row>

</template>

<script>
export default {
    data() {
        return {
            search: ''
        }
    },
}
</script>