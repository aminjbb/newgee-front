<template>
    <div id="sarchGame" class="position__relative" style="width: 539px;">
        <v-text-field color="MainBtn" class="custom-placeholer-color z-3" :loading="loading" v-model="search" @keyup="searchGame()"
            background-color="#111A17" dense outlined hide-details >
            <template #label>
                <span class="Grey2--text t18400">Search a game </span>
            </template>

        </v-text-field>
        <div class="search-icon-box">
            <v-icon color="white">
                mdi-magnify
            </v-icon>
        </div>
        <div class="search-box" v-if="isSearch">
            <div class="text-left mt-10">
                <div>
                    <span class="t20400 MidGrey--text mx-3">
                        Call Of Duty Sega
                    </span>
                    <v-divider color="grey" class="my-3"></v-divider>
                </div>
            </div>
        </div>
    </div>
</template> 
<script>
import axios from 'axios'
export default {
    data: () => ({
        items: [],
        values: '',
        search: '',
        productSelected: null,
        loading: false,
        isSearch:false,
    }),

    methods: {
        searchGame() {
            if (this.search) {
                this.loading = true;
                this.items = []
                this.isSearch= true
               
            } else {
                this.loading = false
                this.items = [];
                this.isSearch= false
            }
        },
    },


}
</script>
  