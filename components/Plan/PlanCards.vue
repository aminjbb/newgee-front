<template>
    <div class="relative" style="height: 100vh;">
        <!-- 
        <v-row justify="center" align="end" class="mt-15 ">
            <v-col cols="6">
                <v-card class="rounded-xl" dark min-height="504">

                </v-card>
            </v-col>
            <v-col cols="6">
                <v-card class="rounded-xl" color="#561DC5" min-height="599">

                </v-card>
            </v-col>
        </v-row> -->
        <div class="absolute">
            <v-img :aspect-ratio="16 / 9" :width="468" :height="468" :src="require('~/assets/img/proAccount2.png')"></v-img>
        </div>
        <div class="absolute1">
            <v-row justify="center" align="end" class="">
                <v-col cols="6">
                    <v-card class="rounded-xl " dark min-height="504" style="padding-top: 80px;">
                        <div class="pl-15 success--text  t30500 mb-5">
                            Trial Account
                        </div>
                        <div class="pl-15 white--text  t50400 mb-5">
                            Free
                        </div>
                        <div class="text-left  mb-10">
                            <v-row align="center" class="px-15 mb-2"><span class="mr-3"><img class="mt-2"
                                        src="~/assets/img/green-circle.svg" alt=""></span><span
                                    class="t20400 white--text">Access
                                    Featured Tournaments</span></v-row>
                            <v-row align="center" class="px-15 mb-2"><span class="mr-3"><img class="mt-2"
                                        src="~/assets/img/green-tik.svg" alt=""></span><span
                                    class="t20400 white--text">Search
                                    Players</span></v-row>
                            <v-row align="center" class="px-15 mb-2"><span class="mr-3"><img class="mt-2"
                                        src="~/assets/img/green-tik.svg" alt=""></span><span
                                    class="t20400 white--text">Unlimited
                                    Invitations</span></v-row>
                            <v-row align="center" class="px-15 mb-2"><span class="mr-3"><img class="mt-2"
                                        src="~/assets/img/green-circle.svg" alt=""></span><span
                                    class="t20400 white--text">Unlimited
                                    Participation</span></v-row>
                            <v-row align="center" class="px-15 mb-2"><span class="mr-3"><img class="mt-2"
                                        src="~/assets/img/green-tik.svg" alt=""></span><span
                                    class="t20400 white--text">Tournament
                                    Entry Fee Discount</span></v-row>
                        </div>
                    </v-card>
                </v-col>
                <v-col cols="6">
                    <v-card class=" rounded-xl " color="#561DC5" min-height="599">
                        <v-row justify="end" class="pa-15">
                            <div class="plan-filter ">
                                <v-btn width="100" color="white" class="br-29" @click="filterAccount = 'Y'"
                                    v-if="filterAccount == 'Y'">
                                    <span class="t14400 my-10 mx-5"
                                        :class="filterAccount == 'Y' ? 'black--text' : 'white--text'">

                                        Yearly
                                    </span>
                                </v-btn>
                                <v-btn text width="100" color="white" class="br-29" @click="filterAccount = 'Y'" v-else>
                                    <span class="t14400 my-10 mx-5"
                                        :class="filterAccount == 'Y' ? 'black--text' : 'white--text'">

                                        Yearly
                                    </span>
                                </v-btn>
                                <v-btn color="white" width="100" class="br-29" @click="filterAccount = 'M'"
                                    v-if="filterAccount == 'M'">
                                    <span class="t14400 my-10 mx-5"
                                        :class="filterAccount == 'M' ? 'black--text' : 'white--text'">
                                        Monthly
                                    </span>
                                </v-btn>
                                <v-btn text color="white" width="100" class="br-29" @click="filterAccount = 'M'" v-else>
                                    <span class="t14400 my-10 mx-5"
                                        :class="filterAccount == 'M' ? 'black--text' : 'white--text'">
                                        Monthly
                                    </span>
                                </v-btn>
                            </div>
                        </v-row>

                        <div class="text-left ">
                            <div class="pl-15 mb-5"><span class="t30500 white--text">Pro Account</span></div>
                        </div>
                        <div class="text-left ">
                            <div class="pl-15 mb-5" v-if="filterAccount == 'M'"><span class="t50400 white--text">9.99
                                    $</span> <span class="t20400 white--text">/Month</span></div>
                            <div class="pl-15 mb-5" v-else><span class="t50400 white--text">100 $</span> <span
                                    class="t20400 white--text">/Year</span> <span class="t20400 Mauve--text">(8.33 $ Per
                                    month)</span></div>
                        </div>
                        <div class="text-left  mb-10">
                            <v-row align="center" class="px-15 mb-2"><span class="mr-3"><img class="mt-2"
                                        src="~/assets/img/tik.svg" alt=""></span><span class="t20400 white--text">Access
                                    Featured Tournaments</span></v-row>
                            <v-row align="center" class="px-15 mb-2"><span class="mr-3"><img class="mt-2"
                                        src="~/assets/img/tik.svg" alt=""></span><span class="t20400 white--text">Search
                                    Players</span></v-row>
                            <v-row align="center" class="px-15 mb-2"><span class="mr-3"><img class="mt-2"
                                        src="~/assets/img/tik.svg" alt=""></span><span class="t20400 white--text">Unlimited
                                    Invitations</span></v-row>
                            <v-row align="center" class="px-15 mb-2"><span class="mr-3"><img class="mt-2"
                                        src="~/assets/img/tik.svg" alt=""></span><span class="t20400 white--text">Unlimited
                                    Participation</span></v-row>
                            <v-row align="center" class="px-15 mb-2"><span class="mr-3"><img class="mt-2"
                                        src="~/assets/img/tik.svg" alt=""></span><span class="t20400 white--text">Tournament
                                    Entry Fee Discount</span></v-row>
                        </div>
                        <v-row justify="center">
                            <ModalPlan/>
                          
                        </v-row>

                    </v-card>
                </v-col>

                <v-col cols="12">
                    <div class="text-left">
                        <div><span class="white--text t30500">Use our pro programs </span></div>
                        <div><span class="white--text t30500">for more feature </span></div>
                    </div>
                </v-col>
            </v-row>
        </div>

    </div>
</template>

<script>
import ModalPlan from '~/components/Home/ModalPlan'
export default {
    components:{
        ModalPlan
    },
    data() {
        return {
            filterAccount: 'M'
        }
    }
}
</script>