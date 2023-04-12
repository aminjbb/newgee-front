<template>
    <v-row justify="center" align="center">
        <v-row>
            <div class="circle-box-leaderBord"></div>
        </v-row>
        <v-row align="center" class="position__relative not_active_boadrd mt-10 mx-10">
            <div class="lader-board-cup">
                <img src="~/assets/img/cup.png" alt="">
            </div>
            <v-col cols="6">
                <v-row justify="start" align="center" class="pt-1">
                    <v-col cols="3">
                        <v-row justify="center" align="center">
                            <span class="f400-16 ">
                                1
                            </span>
                        </v-row>

                    </v-col>
                    <v-col cols="2">
                        <v-row justify="center" align="center">
                            <v-avatar size="25px" color="red">
                                <span class="white--text">-1</span>
                            </v-avatar>
                        </v-row>

                    </v-col>
                    <v-col cols="3">
                        <v-row justify="center" align="center">
                            <div class="leaderboard-avatar-box ">
                                <img width="29" src="../../assets/img/Untitled design (2) 1.png" alt="NEWGEE logo">
                            </div>
                        </v-row>

                    </v-col>
                    <v-col cols="4">
                        <v-row justify="center" align="center">
                            <span class="f600-16 mt-2">
                                Golzar Heidari
                            </span>
                           
                            <span><img src="~/assets/img/paris.png" alt=""></span>
                                <span class="t12400 Grey2--text pr-15">
                                    paris
                                </span>
                        </v-row>

                    </v-col>
                </v-row>
            </v-col>
            <v-col cols="6">
                <v-row justify="end" align="center">

                    <v-col cols="6" v-if="tournament">
                        <v-row justify="center" align="center" class="pr-15">
                            <span class=" t16600 Grey2--text">
                                Semi Final
                            </span>
                        </v-row>
                    </v-col>
                    <v-col cols="4">
                        <v-row justify="center" align="center">
                            <span class="vit f600-30 Mauve--text">
                                67
                            </span>
                        </v-row>
                    </v-col>
                </v-row>
            </v-col>
        </v-row>
        <v-row align="center" class="active_boadrd mt-5 ">
            <v-col cols="6">
                <v-row justify="start" align="center" class="pt-1 ">
                    <v-col cols="3">
                        <v-row justify="center" align="center">
                            <span class="t32600 Mauve--text ">
                                1
                            </span>
                        </v-row>

                    </v-col>
                    <v-col cols="3">
                        <v-row justify="center" align="center">
                            <v-avatar size="25px" color="red" class="ml-9">
                                <span class="white--text">-1</span>
                            </v-avatar>
                        </v-row>

                    </v-col>
                    <v-col cols="2">
                        <v-row justify="center" align="center">
                            <div class="leaderboard-avatar-box ml-4">
                                <img width="29" src="../../assets/img/Untitled design (2) 1.png" alt="NEWGEE logo">
                            </div>
                            <!-- <v-avatar size="30px">
                                <img src="https://cdn.vuetifyjs.com/images/john.jpg" alt="John">
                            </v-avatar> -->
                        </v-row>

                    </v-col>
                    <v-col cols="4">
                        <v-row justify="center" align="center">
                            <span class="f600-16  ml-4 mt-2">
                                Golzar Heidari
                            </span>
                           
                            <span><img src="~/assets/img/paris.png" alt=""></span>
                                <span class="t12400 Grey2--text pr-10">
                                    paris
                                </span>
                        </v-row>

                    </v-col>
                </v-row>
            </v-col>
            <v-col cols="6">
                <v-row justify="end" align="center">
                    <v-col cols="6" v-if="tournament">
                        <v-row justify="center" align="center" class="pr-15 mr-8">
                            <span class=" t16600 Grey2--text">
                                Semi Final
                            </span>
                        </v-row>
                    </v-col>
                    <v-col cols="4">
                        <v-row justify="center" align="center">
                            <span class="vit f600-30 FlashWhite--text">
                                67
                            </span>
                        </v-row>
                    </v-col>
                </v-row>
            </v-col>
        </v-row>
    </v-row>
</template>

<script>
export default {
    props: {
        tournament: false
    }
}
</script>