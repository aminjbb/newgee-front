<template>
  <v-row class="mt-5 ma-0">
    <v-col cols="3" class="ma-0">
      <!-- <HomeMenu/> -->
    </v-col>
    <v-col cols="6" class="ma-0">
      <div>
        <headerTable />
        <searchTable />
        <bodyTable />
      </div>

    </v-col>
    <v-col cols="3" class="ma-0">
      <!-- <Filters/>
        <Games/>
        <Platforms/> -->
    </v-col>
  </v-row>
</template>
  
<script>

import headerTable from '~/components/LeaderBoard/headerTable.vue'
import searchTable from '~/components/LeaderBoard/searchTable.vue'
import bodyTable from '~/components/LeaderBoard/bodyTable.vue'

export default {
  components: {
    headerTable,
    searchTable,
    bodyTable

  }
}
</script>
  