<template>
    <div class="ml-12">
        <v-row class="menu" align="center" @click="$router.push('/tournament')">
            <div class="menu_box d-flex align-content-center justify-center ">
                <img src="../../assets/img/Tournaments.svg" alt="" class=" my-auto" height="31" width="31" />
            </div>
            <div class="ml-4 d-flex align-content-center justify-center">
                <span class="f18">Tournaments</span>
            </div>
        </v-row>

        <v-row class="menu mt-7" align="center"  @click="$router.push('/Leader-board')">
            <div class="menu_box d-flex align-content-center justify-center ">
                <img src="../../assets/img/Leaderboard.svg" alt="" class=" my-auto" height="31" width="31" />
            </div>
            <div class="ml-4 d-flex align-content-center justify-center">
                <span class="f18">Leaderboard</span>
            </div>
        </v-row>

   
        <v-row class="menu  mt-7" align="center" @click="$router.push('/newsfeed')">
            <div class="menu_box d-flex align-content-center justify-center">
                <img src="../../assets/img/Newsfeed.svg" alt="" class=" my-auto" height="31" width="31" />
            </div>
            <div class="ml-4 d-flex align-content-center justify-center">
                <span class="f18">Newsfeed</span>
            </div>
        </v-row>

        <v-row class="menu relative " align="center">
            <div class="position__relative">
                <div class="circle-box-pro-account ml-10"></div>
                <v-card color="#333333" class="rounded-xl mt-20" dark min-height="260" min-width="200">
                    <!-- <div class="absolutePlanHome"> -->
                    <img class="mt-min20" src="../../assets/img/proAccount2.png" alt="">
                    <!-- <v-img :aspect-ratio="16/9" :width="200" :height="200"
                            :src="require('~/assets/img/proPlanHome.png')"></v-img> -->
                    <!-- </div> -->
                    <v-row justify="center" class="mt-min10">
                        <v-col cols="12">
                            <v-row justify="center">
                                <span class="f20 success-text">
                                    Pro Account
                                </span>
                            </v-row>

                        </v-col>
                        <v-col cols="12">
                            <v-row justify="center">
                                <p class="f12">
                                    Unlock all abilities
                                </p>
                            </v-row>

                        </v-col>
                        <v-col cols="12">
                            <v-row justify="center">
                               <ModalPlan/>
                            </v-row>

                        </v-col>
                    </v-row>
                </v-card>
            </div>

        </v-row>

    </div>
</template>

<script>
import ModalPlan from '~/components/Home/ModalPlan'
export default {
    components: {
        ModalPlan,
    }
}
</script>