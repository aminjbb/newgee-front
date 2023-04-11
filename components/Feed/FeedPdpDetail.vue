<template>
    <div>
        <div>
            <v-img class="border-r-41" :aspect-ratio="16 / 9" :height="413"
                src="https://cdn.vuetifyjs.com/images/parallax/material.jpg">
            </v-img>
            <v-row justify="center" class="mt-10">
                <v-col cols="8">
                    <div>
                        <p class="t30400 white--text">COMPLETE FORTNITE’S PARADISE DISCORD QUEST FOR THREE IN-GAME
                            REWARDS!</p>
                    </div>
                </v-col>
                <v-col cols="4">
                    <div class="owner-feed-card pl-5">
                        <span>
                            <img src="~/assets/img/PUBG_Mobile 5.png" alt="">
                        </span>
                        <div class="ml-5">
                            <div>
                                <span class="t18700 white--text">Written by</span>
                            </div>
                            <div>
                                <span class="t16400 white--text">Golzar Heidari</span>
                            </div>
                        </div>
                    </div>
                </v-col>
            </v-row>

            <div class="text-left mt-10">
                <p class="t16400 white--text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut
                    labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                    laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                    voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
            </div>
        </div>

        <v-row justify="center">
            <v-col cols="4"><PdpCardDetail/></v-col>
            <v-col cols="4"><PdpCardDetail/></v-col>
            <v-col cols="4"><PdpCardDetail/></v-col>
        </v-row>
    </div>
</template>

<script>
import PdpCardDetail from '~/components/Feed/PdpCardDetail.vue'
export default {
    components:{
        PdpCardDetail
    }
}
</script>