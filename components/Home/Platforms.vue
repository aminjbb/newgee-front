<template>
    <div class="mt-5">

        <v-row class="ma-0" justify="center">
            <v-col cols="10">
                <span class="white--text">
                    Platforms
                </span>
                <v-row class="ma-0">
                    <v-col cols="6" lg="4">
                        <div class="mt-5 platform-card">
                            <img src="~/assets/img/PlayStation_logo 1.png" alt="">
                            <!-- <v-img :aspect-ratio="16/9" :height="80" :width="80" :src="required('')"></v-img> -->
                        </div>
                        <div class="text-center mt-1" style=" width: 84px;">
                            <span class="t16400 white--text">Playstation</span>
                        </div>
                    </v-col>
                    <v-col cols="6" lg="4">
                        <div class="mt-5 platform-card">
                            <img src="~/assets/img/Xboxlogo.png" alt="">
                            <!-- <v-img :aspect-ratio="16/9" :height="80" :width="80" :src="required('')"></v-img> -->
                        </div>
                        <div class="text-center mt-1" style=" width: 84px;">
                            <span class="t16400 white--text ">Xbox</span>
                        </div>
                    </v-col>
                    <v-col cols="6" lg="4">
                        <div class="mt-5 platform-card">
                            <img src="~/assets/img/steam-logo.png" alt="">
                            <!-- <v-img :aspect-ratio="16/9" :height="80" :width="80" :src="required('')"></v-img> -->
                        </div>
                        <div class="text-center mt-1" style=" width: 84px;">
                            <span class="t16400 white--text">Steam</span>
                        </div>
                    </v-col>
                </v-row>

            </v-col>


        </v-row>
    </div>
</template>

<script>
import PlatformsCard from '~/components/Home/PlatformsCard.vue'
export default {
    components: {
        PlatformsCard
    }
}
</script>