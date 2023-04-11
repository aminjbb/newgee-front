<template>
    <v-row justify="center" align="center" class="mt-8">
        <v-col cols="5">
            <div id="searchChar" class="position__relative" >
                <v-text-field color="MainBtn" prepend-inner-icon="mdi-magnify" class="custom-placeholer-color z-3" :loading="loading" v-model="search"
                    background-color="#000" dense outlined hide-details>
                    <template #label>
                        <span class="Grey2--text t14400">Search a character </span>
                    </template>

                </v-text-field>
                <div class="search-icon-box">
                    <v-icon color="white">
                        <!-- mdi-magnify -->
                        mdi-arrow-right
                    </v-icon>
                </div>
         
            </div>
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