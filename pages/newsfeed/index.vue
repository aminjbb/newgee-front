<template>
    <v-row class="mt-5 ma-0">
        <v-col cols="3" class="ma-0">
            <HomeMenu />
        </v-col>
        <v-col cols="5" class="ma-0">
            <div>
                <FeedBanner />
                <div class="mt-10 px-5">
                    <p class="t30400 white--text">
                        COMPLETE FORTNITE’S PARADISE DISCORD QUEST FOR THREE IN-GAME REWARDS!
                    </p>

                    <p class="t16400 white--text mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                        et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                        aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                        cillum dolore eu fugiat nulla pariatur.</p>
                </div>
                <v-row class="mt-8">
                    <v-col cols="6">
                        <FeednewsCard />
                    </v-col>
                    <v-col cols="6">
                        <FeednewsCard />
                    </v-col>
                </v-row>
            </div>
        </v-col>
        <v-col cols="4" class="ma-0">
            <FeedNewsMenu />
        </v-col>
    </v-row>
</template>

<script>
import FeednewsCard from '../../components/Feed/FeednewsCard.vue'
import FeedBanner from '../../components/Feed/FeedBanner.vue'
import FeedNewsMenu from '../../components/Feed/FeedNewsMenu.vue'
import HomeMenu from '~/components/Home/HomeMenu.vue'
export default {
    components: {
        FeednewsCard, FeedBanner, FeedNewsMenu, HomeMenu
    }
}
</script>