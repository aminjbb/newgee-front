<template>
    <v-row justify="center" align="center" class="mt-15">
        <div class="user-list-box mt-5">
            <div class="header-user-list">

                <v-row justify="center" align="center" class="pt-8">
                    <span class="t20400 FlashWhite--text">
                        Friend Finder
                    </span>

                </v-row>

                <v-row justify="center" align="center" class="pt-15">
                    <v-col cols="4">
                        <div id="searchChar" class="position__relative">
                            <v-text-field color="MainBtn" prepend-inner-icon="mdi-magnify"
                                class="custom-placeholer-color z-3" :loading="loading" v-model="search"
                                background-color="#000" dense outlined hide-details>
                                <template #label>
                                    <span class="Grey2--text t14400">Search a character </span>
                                </template>

                            </v-text-field>
                            <div class="search-icon-box">
                                <v-icon color="white">
                                    <!-- mdi-magnify -->
                                    mdi-arrow-right
                                </v-icon>
                            </div>

                        </div>
                    </v-col>
                </v-row>

                <v-row justify="center" align="center" class="mt-10">
                    <v-col cols="10">
                        <div class="user-list-card ">
                            <div class="avatatar-user">
                                <img width="56" class="ml-0 " src="~/assets/img/Untitled design (2) 1.png"
                                    alt="NEWGEE logo">
                            </div>

                            <v-row justify="space-between" align="center" class="pt-3 pl-15">
                                <div class="pl-15">
                                    <span class="t16400 white--text">
                                        Amin.JBB
                                    </span>
                                </div>
                                <div class="user-score mr-9">
                                    <v-row justify="center" align="center" class="pt-7 ">
                                        <span class="mx-2"><img src="~/assets/img/GameController.svg" alt=""></span>

                                        <span class=" t16400 FlashWhite--text mx-2">
                                            Total Points
                                        </span>
                                        <span class="actor-font t25400 white--text mx-2">
                                            12980
                                        </span>
                                    </v-row>
                                </div>
                                <div>
                                    <v-row justify="center" align="center" class="pt-6 pr-12">
                                        <span><img src="~/assets/img/addbtn.svg" alt=""></span>

                                        <span><img src="~/assets/img/chatLarge.svg" alt=""></span>
                                    </v-row>
                                </div>
                            </v-row>
                        </div>
                        <div class="user-list-card mt-8">
                            <div class="avatatar-user">
                                <img width="56" class="ml-0 " src="~/assets/img/Untitled design (2) 1.png"
                                    alt="NEWGEE logo">
                            </div>

                            <v-row justify="space-between" align="center" class="pt-3 pl-15">
                                <div class="pl-15">
                                    <span class="t16400 white--text">
                                        Amin.JBB
                                    </span>
                                </div>
                                <div class="user-score mr-9">
                                    <v-row justify="center" align="center" class="pt-7 ">
                                        <span class="mx-2"><img src="~/assets/img/GameController.svg" alt=""></span>

                                        <span class=" t16400 FlashWhite--text mx-2">
                                            Total Points
                                        </span>
                                        <span class="actor-font t25400 white--text mx-2">
                                            12980
                                        </span>
                                    </v-row>
                                </div>
                                <div>
                                    <v-row justify="center" align="center" class="pt-6 pr-12">
                                        <span><img src="~/assets/img/addbtn.svg" alt=""></span>

                                        <span><img src="~/assets/img/chatLarge.svg" alt=""></span>
                                    </v-row>
                                </div>
                            </v-row>
                        </div>
                    </v-col>
                </v-row>
            </div>
        </div>
    </v-row>
</template>

<script>
export default {

}
</script>