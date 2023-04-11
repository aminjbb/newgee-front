<template>
    <div class="ml-12">
        <v-row clas class="menu " :class="$route.name == 'index' ? 'active-menu' : ''" align="center"
            @click="$router.push('/')">
            <div class="menu_box d-flex align-content-center justify-center ">
                <img src="../../assets/img/tournaments-p.svg" alt="" class=" my-auto" height="31" width="31"
                    v-if="$route.name == 'index'" />
                <img src="../../assets/img/tournaments-w.svg" alt="" class=" my-auto" height="31" width="31" v-else />
            </div>
            <div class="ml-4 d-flex align-content-center justify-center">
                <span class="f18" :class="$route.name == 'index' ?'MainBtn--text' :''">Tournaments</span>
            </div>
        </v-row>

        <v-row class="menu mt-7" align="center" :class="$route.name == 'Leader-board' ? 'active-menu' : ''"
            @click="$router.push('/Leader-board')">
            <div class="menu_box d-flex align-content-center justify-center ">
                <img src="../../assets/img/leadebord-p.svg" alt="" class=" my-auto" height="31" width="31"
                    v-if="$route.name == 'Leader-board'" />
                <img src="../../assets/img/Leaderboard.svg" alt="" class=" my-auto" height="31" width="31" v-else />
            </div>
            <div class="ml-4 d-flex align-content-center justify-center">
                <span class="f18" :class="$route.name == 'Leader-board' ?'MainBtn--text' :''">Leaderboard</span>
            </div>
        </v-row>


        <v-row class="menu  mt-7" align="center" :class="$route.name == 'newsfeed'|| $route.name =='newsfeed-url' ? 'active-menu' : ''"
            @click="$router.push('/newsfeed')">
            <div class="menu_box d-flex align-content-center justify-center">
                <img src="../../assets/img/newsfeed-p.svg" alt="" class=" my-auto" height="31" width="31"
                    v-if="$route.name == 'newsfeed' || $route.name =='newsfeed-url'" />
                <img src="../../assets/img/Newsfeed.svg" alt="" class=" my-auto" height="31" width="31" v-else />
            </div>
            <div class="ml-4 d-flex align-content-center justify-center">
                <span class="f18" :class="$route.name == 'newsfeed' || $route.name =='newsfeed-url' ?'MainBtn--text' :''">Newsfeed</span>
            </div>
        </v-row>

        <v-row class="menu relative " align="center" v-if="$route.name != 'plan'">
            <div class="position__relative">
                <div class="circle-box-pro-account ml-10"></div>
                <v-card color="#333333" class="rounded-xl mt-20" dark min-height="260" width="324">
                    <!-- <div class="absolutePlanHome"> -->
                    <img class="mt-min20" src="../../assets/img/proAccount2.png" alt="">
                    <!-- <v-img :aspect-ratio="16/9" :width="200" :height="200"
                            :src="require('~/assets/img/proPlanHome.png')"></v-img> -->
                    <!-- </div> -->
                    <v-row justify="center" class="mt-min10">
                        <v-col cols="12">
                            <v-row justify="center">
                                <span class="t24700 success-text">
                                    Pro Account
                                </span>
                            </v-row>

                        </v-col>
                        <v-col cols="12">
                            <v-row justify="center">
                                <p class="t20400">
                                    Unlock all abilities
                                </p>
                            </v-row>

                        </v-col>
                        <v-col cols="12">
                            <v-row justify="center">
                                <!-- <ModalPlan/> -->
                                <v-btn color="#8E66FF" class="rounded-xl" dark  to="/plan">
                                    <span class="f12"> Become a pro</span>
                                </v-btn>
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
    },

    mounted() {
        console.log(this.$route);
    }
}
</script>