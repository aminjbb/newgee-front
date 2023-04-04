<template>
    <v-row class="mt-5 ma-0">
        <v-col cols="3" class="ma-0">
            <HomeMenu />
        </v-col>
        <v-col cols="6" class="ma-0">
            <!-- <HomeCarousel/>
        <TournamentsCard/> -->
            <PlanCards />
        </v-col>
        <v-col cols="3" class="ma-0">
            <Filters />
            <Games />
            <Platforms />
        </v-col>
    </v-row>
</template>
  
<script>
import PlanCards from '~/components/Plan/PlanCards.vue'
import TournamentsCard from '~/components/Home/TournamentsCard.vue'
import Filters from '~/components/Home/Filters.vue'
import Games from '~/components/Home/Games.vue'
import Platforms from '~/components/Home/Platforms.vue'
export default {
    components: {
        PlanCards,
        TournamentsCard,
        Filters,
        Games,
        Platforms,
    }
}
</script>
  