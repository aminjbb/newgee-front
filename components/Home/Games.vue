<template>
    <div class="position__relative">
        <div class="circle-box-game"></div>
        <v-row class="ma-0" justify="center">
            <v-col cols="10">
                <span class="white--text">
                    games
                </span>
                <v-row class="ma-0">
                    <v-col cols="6" lg="4">
                        <!-- <GamesCard /> -->
                        <div class="mt-5 game-card border-radius13">
                            <v-img class="border-radius13" :aspect-ratio="16 / 9" :height="80" :width="80"
                                :src="require('~/assets/img/unnamed.png')"></v-img>
                        </div>
                    </v-col>
                    <v-col cols="6" lg="4">
                        <!-- <GamesCard /> -->
                        <div class="mt-5 game-card border-radius13">
                            <v-img class="border-radius13" :aspect-ratio="16 / 9" :height="80" :width="80"
                                :src="require('~/assets/img/unnamed.png')"></v-img>
                        </div>
                    </v-col>
                    <v-col cols="6" lg="4">
                        <!-- <GamesCard /> -->
                        <div class="mt-5 game-card border-radius13">
                            <v-img class="border-radius13" :aspect-ratio="16 / 9" :height="80" :width="80"
                                :src="require('~/assets/img/PlayerUnknowns_Battlegrounds_Mobile 1.png')"></v-img>
                        </div>
                    </v-col>
                    <v-col cols="6" lg="4">
                        <!-- <GamesCard /> -->
                        <div class="mt-5 game-card border-radius13">
                            <v-img class="border-radius13" :aspect-ratio="16 / 9" :height="80" :width="80"
                                :src="require('~/assets/img/unnamed.png')"></v-img>
                        </div>
                    </v-col>
                    <v-col cols="6" lg="4">
                        <!-- <GamesCard /> -->
                        <div class="mt-5 game-card border-radius13">
                            <v-img class="border-radius13" :aspect-ratio="16 / 9" :height="80" :width="80"
                                :src="require('~/assets/img/unnamed.png')"></v-img>
                        </div>
                    </v-col>
                    <v-col cols="6" lg="4">
                        <!-- <GamesCard /> -->
                        <div class="mt-5 game-card border-radius13">
                            <v-img class="border-radius13" :aspect-ratio="16 / 9" :height="80" :width="80"
                                :src="require('~/assets/img/PlayerUnknowns_Battlegrounds_Mobile 1.png')"></v-img>
                        </div>
                    </v-col>
                    <v-col cols="6" lg="4">
                        <!-- <GamesCard /> -->
                        <div class="mt-5 game-card border-radius13">
                            <v-img class="border-radius13" :aspect-ratio="16 / 9" :height="80" :width="80"
                                :src="require('~/assets/img/unnamed.png')"></v-img>
                        </div>
                    </v-col>
                    <v-col cols="6" lg="4">
                        <!-- <GamesCard /> -->
                        <div class="mt-5 game-card border-radius13">
                            <v-img class="border-radius13" :aspect-ratio="16 / 9" :height="80" :width="80"
                                :src="require('~/assets/img/PlayerUnknowns_Battlegrounds_Mobile 1.png')"></v-img>
                        </div>
                    </v-col>
                    <v-col cols="6" lg="4">
                        <!-- <GamesCard /> -->
                        <div class="mt-5 game-card border-radius13">
                            <v-img class="border-radius13" :aspect-ratio="16 / 9" :height="80" :width="80"
                                :src="require('~/assets/img/unnamed.png')"></v-img>
                        </div>
                    </v-col>
                   
                </v-row>
            </v-col>


        </v-row>
    </div>
</template>

<script>
import GamesCard from '~/components/Home/GamesCard.vue'
export default {
    components: {
        GamesCard
    }
}
</script>