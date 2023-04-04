<template>
    <v-row class="mt-5 ma-0">
        <v-col cols="3" class="ma-0">
            <!-- <HomeMenu/> -->
        </v-col>
        <v-col cols="5" class="ma-0">
            <div>
                <FeedBanner/>
                <v-row class="mt-8">
                    <v-col cols="6">
                        <FeednewsCard/>
                    </v-col>
                    <v-col cols="6">
                        <FeednewsCard/>
                    </v-col>
                </v-row>
            </div>
        </v-col>
        <v-col cols="4" class="ma-0">
            <FeedNewsMenu/>
        </v-col>
    </v-row>
</template>

<script>
import FeednewsCard from '../../components/Feed/FeednewsCard.vue'
import FeedBanner from '../../components/Feed/FeedBanner.vue'
import FeedNewsMenu from '../../components/Feed/FeedNewsMenu.vue'

export default {
    components:{
        FeednewsCard,FeedBanner,FeedNewsMenu
    }
}
</script>