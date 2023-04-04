<template>
    <div class="position__relative">
        <div class="circle-box-game"></div>
        <v-row class="ma-0" justify="center">
            <v-col cols="10">
                <span class="white--text">
                    games
                </span>
                <v-row class="ma-0">
                    <v-col cols="4">
                        <GamesCard />
                    </v-col>
                    <v-col cols="4">
                        <GamesCard />
                    </v-col>
                    <v-col cols="4">
                        <GamesCard />
                    </v-col>
                    <v-col cols="4">
                        <GamesCard />
                    </v-col>
                    <v-col cols="4">
                        <GamesCard />
                    </v-col>
                    <v-col cols="4">
                        <GamesCard />
                    </v-col>
                    <v-col cols="4">
                        <GamesCard />
                    </v-col>
                    <v-col cols="4">
                        <GamesCard />
                    </v-col>
                    <v-col cols="4">
                        <GamesCard />
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