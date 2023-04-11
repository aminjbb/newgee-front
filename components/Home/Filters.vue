<template>
    <v-row class="ma-0" justify="center">
        <v-col cols="10">
            <div>
                <span class="white--text">
                    Filter By
                </span>
                <div class="d-flex ms-0 divFilte mt-4 position__relative ">
                    <div class="select-box z-4" @click="select1=!select1 ; select2=false">
                        <v-row justify="space-between" class="pa-4 px-5">
                            <span class="white--text t18400">
                                Any time
                            </span>
                            <span>
                                <v-icon color="white">
                                    mdi-chevron-down
                                </v-icon>
                            </span>
                            <!-- <span>
                                <v-icon>
                                    mdi-chevron-up

                                </v-icon>
                            </span> -->
                        </v-row>
                    </div>
                    <div class="items-select z-3" v-if="select1">
                        <div class="text-left">
                            <div class="text-left mt-10">

                                <div class="mx-3">
                                    <span class="MidGrey--text">This week</span>
                                </div>
                                <v-divider color="white" class="mt-1"></v-divider>
                            </div>
                        </div>
                    </div>

                </div>
                <div class="d-flex ms-0 divFilte mb-4  mt-4 position__relative ">
                    <div class="select-box z-2" @click="select2=!select2 ; select1=false">
                        <v-row justify="space-between" class="pa-4 px-5">
                            <span class="white--text t18400">
                                Any time
                            </span>
                            <span>
                                <v-icon color="white">
                                    mdi-chevron-down
                                </v-icon>
                            </span>
                            <!-- <span>
                                <v-icon>
                                    mdi-chevron-up

                                </v-icon>
                            </span> -->
                        </v-row>


                    </div>
                    <div class="items-select z-1" v-if="select2">
                        <div class="text-left mt-10">

                            <div class="mx-3">
                                <span class="MidGrey--text">This week</span>
                            </div>
                            <v-divider color="white" class="mt-1"></v-divider>
                        </div>
                    </div>

                </div>
            </div>
        </v-col>
    </v-row>
</template>

<script>
export default {
    data() {
        return {
            items: [],
            select1:false,
            select2:false,
        }
    }
}
</script>