<template>
    <v-row class="mt-5 ma-0">
        <v-col cols="3" class="ma-0">
            <HomeMenu />
        </v-col>
        <v-col cols="6" class="ma-0">
           <FeedPdpDetail/>
        </v-col>
        <v-col cols="3" class="ma-0">
            <PdpMenuCard/>
        </v-col>
    </v-row>
</template>

<script>
import FeednewsCard from '~/components/Feed/FeednewsCard.vue'
import FeedPdpDetail from '~/components/Feed/FeedPdpDetail.vue'
import PdpMenuCard from '~/components/Feed/PdpMenuCard.vue'
import HomeMenu from '~/components/Home/HomeMenu.vue'
export default {
    components: {
        FeednewsCard, PdpMenuCard, HomeMenu,
        FeedPdpDetail
    }
}
</script>