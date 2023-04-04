<template>
    <v-row class="ma-0" justify="center">
        <v-col cols="10">
            <div>
                <span class="white--text">
                    Filter By
                </span>
                <div class="d-flex ms-0 divFilte mt-4">
                    <v-select class="custom-select ml-0" max-height="10" :loading="loading" v-model="productSelected"
                        solo background-color="#111A17" dark :items="items" label="Standard"></v-select>
                </div>
                <div class="d-flex ms-0 divFilte mb-4  mt-4">
                    <v-select class="custom-select ml-0" max-height="10" :loading="loading" v-model="productSelected"
                        solo background-color="#111A17" dark :items="items" label="Standard"></v-select>
                </div>
            </div>
        </v-col>
    </v-row>

</template>

<script>
export default {
    data() {
        return {
            items: []
        }
    }
}
</script>