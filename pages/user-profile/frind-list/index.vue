<template>
    <div class="user-profile-back pt-15">
        <v-row justify="center">
            <v-col cols="12">
                <v-row justify="center">
                    <div class="user-profile-avatar-box">
                        <img width="97" class="ml-0 " src="~/assets/img/Untitled design (2) 1.png" alt="NEWGEE logo">
                    </div>
                </v-row>
            </v-col>
            <v-col cols="12">
                <v-row justify="center">
                    <div class="mt--2 z-1 position__relative">
                        <img src="~/assets/img/user-profile-name-box.svg" alt="">
                        <div class="user-profile-name">
                            <span class="t24400 white--text">
                                Luca burn
                            </span>
                        </div>
                    </div>
                </v-row>

            </v-col>


            <div class="box-user-oprofile mt--2">
                <v-row justify="center mt-15">
                    <div class="user-profile-top-menu-box ">
                        <v-row justify="space-between" class="pa-6 px-10">
                            <v-btn text to="/user-profile">
                                <span class="t16400 Grey2--text">
                                    Statistics
                                </span>
                            </v-btn>
                            <v-btn text>
                                <span class="t16400 Grey2--text">
                                    Milestone
                                </span>
                            </v-btn>
                            <v-btn text  to="/user-profile/user-info">
                                <span class="t16400 MainBtn--text">
                                    Profile
                                </span>
                            </v-btn>
                        </v-row>
                    </div>

                    <v-col cols="12" class="mt-10">
                        <v-row justify="center">
                            <v-col cols="2">
                                <div class="user-info-menu mt-4" @click="$router.push('/user-profile/user-info')">
                                    <v-row justify="center" align="center" class="pt-7">
                                        <span class="t16400 white--text ">Basic Info</span>

                                    </v-row>


                                </div>
                                <div class="user-info-menu mt-4" @click="$router.push('/user-profile/id-management')">
                                    <v-row justify="center" align="center" class="pt-7">
                                        <span class="t16400 white--text ">ID Managment</span>
                                    </v-row>


                                </div>
                                <div class="user-info-menu-active mt-6" @click="$router.push('/user-profile/frind-list')">
                                    <v-row justify="center" align="center" class="pt-5">
                                        <span class="t16400 white--text ">Friend List</span>
                                    </v-row>


                                </div>
                                <div class="user-info-menu mt-4"  @click="$router.push('/user-profile/subscription-plan')">
                                    <v-row justify="center" align="center" class="pt-7">
                                        <span class="t16400 white--text ">Subscription Plan</span>
                                    </v-row>


                                </div>
                                <div class="user-info-menu mt-4" @click="$router.push('/user-profile/security')">
                                    <v-row justify="center" align="center" class="pt-7">
                                        <span class="t16400 white--text ">Security</span>
                                    </v-row>


                                </div>

                            </v-col>
                            <v-col cols="7">
                                <div class="user-info-box" id="userInfoBox">
                                    <v-col cols="12">
                                        <v-row justify="center" align="center" class="mt-5">
                                            <div class="frind-list-card">
                                                <div class="avatatar-frind">
                                                    <img width="56" class="ml-0 "
                                                        src="~/assets/img/Untitled design (2) 1.png" alt="NEWGEE logo">
                                                </div>

                                                <v-row justify="space-between" align="center" class="pt-3 pl-15">
                                                    <div class="ml-5">
                                                        <span class="t16400 white--text">
                                                            Amin.JBB
                                                        </span>
                                                    </div>
                                                    <div class="frind-score">
                                                        <v-row justify="center" align="center" class="pt-3 ">
                                                            <span class="mx-2"><img src="~/assets/img/GameController.svg"
                                                                    alt=""></span>

                                                            <span class="actor-font t25400 white--text mx-2">
                                                                12980
                                                            </span>
                                                        </v-row>
                                                    </div>
                                                    <div>
                                                        <v-row justify="center" align="center" class="pt-6 pr-12" >
                                                            <span ><img src="~/assets/img/deleteUser.svg"
                                                                    alt=""></span>

                                                            <span ><img src="~/assets/img/chat.svg"
                                                                    alt=""></span>
                                                        </v-row>
                                                    </div>
                                                </v-row>
                                            </div>
                                        </v-row>

                                    </v-col>

                                </div>

                            </v-col>
                        </v-row>
                    </v-col>
                </v-row>
            </div>


        </v-row>


    </div>
</template>

<script>
export default {





    mounted() {
        setTimeout(() => {
            this.show = true
        }, 5000);
    }
}
</script>