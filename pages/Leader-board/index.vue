<template>
  <v-row class="mt-5 ma-0">
    <v-col cols="3" class="ma-0">
      <HomeMenu/>
    </v-col>
    <v-col cols="6" class="ma-0">
      <div>
        <headerTable />
        <searchTable />
        <bodyTable />
      </div>

    </v-col>
    <v-col cols="3" class="ma-0">
        <Filters/>
        <Games/>
        <Platforms/>
    </v-col>
  </v-row>
</template>
  
<script>

import headerTable from '~/components/LeaderBoard/headerTable.vue'
import searchTable from '~/components/LeaderBoard/searchTable.vue'
import bodyTable from '~/components/LeaderBoard/bodyTable.vue'
import Filters from '~/components/Home/Filters.vue'
import Games from '~/components/Home/Games.vue'
import Platforms from '~/components/Home/Platforms.vue'
import HomeMenu from '~/components/Home/HomeMenu.vue'
export default {
  components: {
    headerTable,
    searchTable,
    bodyTable,
    Filters,
    Games,
    Platforms,
    HomeMenu
  }
}
</script>
  