<template>
    <v-card color="black border-r-25 mx-4" :min-height="291">
        <v-row>
            <v-col cols="7">
                <v-img class="border-r-25 ma-5 ml-7" :height="174" :width="280"
                    src="https://cdn.vuetifyjs.com/images/parallax/material.jpg">
                </v-img>
                <p class="title white--text t20700 ml-6"><span>PUBG Tournament By red bull</span></p>

                <div class="mb-5">
                    <v-row align="center" class="mx-0">

                        <div class="white--text ml-6 t16400">
                            Jun 26 - Jun 27, 2020
                        </div>
                    </v-row>
                </div>
            </v-col>
            <v-col cols="5">
                <p class="t16400 white--text mt-5 pr-3">
                    <v-clamp autoresize :max-lines="10">{{ text }}</v-clamp>

                </p>
            </v-col>
        </v-row>
    </v-card>
</template>

<script>
import VClamp from 'vue-clamp'
export default {
    components: {
        VClamp
    },
    data() {
        return {
            text: `  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                    dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                    ex ea commodo consequat.   Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                    dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                    ex ea commodo consequat.`
        }
    }
}
</script>