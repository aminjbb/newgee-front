<template>
    <v-row class="ma-0" justify="center">
        <v-col cols="10">
            <div>
                <span class="white--text">
                    Filter By
                </span>
                <div class="d-flex ms-0 divFilte mt-4 position__relative ">
                    <div class="select-box z-4" @click="select1 = !select1 ; select2 = false">
                        <v-row justify="space-between" class="pa-4 px-5">
                            <span class="white--text t18400">
                                {{ filter1Txt }}
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

                                <div class="mx-3 my-2" @click="filter1Txt = 'This week'; select1 = false">
                                    <span class="MidGrey--text">This week</span>
                                </div>
                                <v-divider color="white" class="mt-1"></v-divider>
                                <div class="mx-3 my-2" @click="filter1Txt = 'This month'; select1 = false">
                                    <span class="MidGrey--text">This month</span>
                                </div>
                                <v-divider color="white" class="mt-1"></v-divider>
                                <div class="mx-3 my-2" @click="filter1Txt = 'This Year'; select1 = false">
                                    <span class="MidGrey--text">This Year</span>
                                </div>
                                <!-- <v-divider color="white" class="mt-1"></v-divider> -->
                            </div>
                        </div>
                    </div>

                </div>
                <div class="d-flex ms-0 divFilte mb-4  mt-4 position__relative ">
                    <div class="select-box z-2" @click="select2 = !select2 ; select1 = false">
                        <v-row justify="space-between" class="pa-4 px-5">
                            <span class="white--text t18400">
                                {{filter2Txt}}
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

                            <div class="mx-3 my-2" @click="filter2Txt = ' Single Elimination'; select2 = false">
                                <span class="MidGrey--text"> Single Elimination </span>
                            </div>
                            <v-divider color="white" class="mt-1"></v-divider>
                            <div class="mx-3 my-2" @click="filter2Txt = ' Double Elimination'; select2 = false">
                                <span class="MidGrey--text"> Double Elimination</span>
                            </div>
                            <v-divider color="white" class="mt-1"></v-divider>
                            <div class="mx-3 my-2" @click="filter2Txt = ' Group Stage'; select2 = false">
                                <span class="MidGrey--text"> Group Stage</span>
                            </div>
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
            select1: false,
            select2: false,
            filter1Txt: 'Any time',
            filter2Txt: 'Any Format'
        }
    }
}
</script>