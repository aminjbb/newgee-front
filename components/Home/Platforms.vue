<template>
    <div class="mt-5">

        <v-row class="ma-0" justify="center">
            <v-col cols="10">
                <span class="white--text">
                    Platforms
                </span>
                <v-row class="ma-0">
                    <v-col cols="4">
                        <PlatformsCard />
                    </v-col>
                    <v-col cols="4">
                        <PlatformsCard />
                    </v-col>
                    <v-col cols="4">
                        <PlatformsCard />
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