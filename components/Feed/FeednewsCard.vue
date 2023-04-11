<template>
       <v-card max-height="419" dark color="TournomentCard" :loading="loading" class="mx-auto  rounded-xl tournament_card" to="/newsfeed/1">
                <template slot="progress">
                    <v-progress-linear color="deep-purple" height="10" indeterminate></v-progress-linear>
                </template>

                <img src="~/assets/img/PUBG_Mobile 1.png" width="100%">

                <v-card-title class="title"><span class="green--text mx-4">PUBG Tournament By red bull</span></v-card-title>

                <v-card-text>
                    <v-row align="center" class="mx-0">

                        <div class="white--text mx-4">
                            Jun 26 - Jun 27, 2020
                        </div>
                    </v-row>

                    <v-row align="center"  class="mb-2">

                        <div class=" ma-4 pr-4">
                          <p class="white--text t16400">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit
                          </p>
                        </div>

                      
                    </v-row>


                </v-card-text>


            </v-card>

</template>

<script>
export default {

}
</script>