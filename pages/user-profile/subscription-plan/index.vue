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
                                <div class="user-info-menu mt-4" @click="$router.push('/user-profile/frind-list')">
                                    <v-row justify="center" align="center" class="pt-7">
                                        <span class="t16400 white--text ">Friend List</span>
                                    </v-row>


                                </div>
                                <div class="user-info-menu-active mt-7" @click="$router.push('/user-profile/subscription-plan')">
                                    <v-row justify="center" align="center" class="pt-5">
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
                                <div class="user-info-box h-281" id="userInfoBox">
                                    <v-row justify="center" align="center" class="py-10 ">
                                        <v-col cols="7">
                                            <v-row justify="start" align="center" class="pt-6 pl-13 ">
                                                <span class="t16400 white--text">
                                                    Current Plan
                                                </span>
                                                <span class="t16400 white--text ml-15">
                                                    Pro Plan
                                                </span>
                                            </v-row>
                                            <v-row justify="start" align="center" class="pt-8 pl-13">
                                                <span class="t16400 white--text ">
                                                    Days Remaining
                                                </span>
                                                <span class="t25400 white--text ml-8">
                                                    <span class="success--text">365</span> Days
                                                </span>
                                            </v-row>
                                            <v-row justify="start" align="center" class="pt-12 pl-13">
                                                <span class="t16400 Grey2--text ">
                                                    Improve your plan
                                                </span>
                                                <span class="t16400 white--text ml-5">
                                                    <v-btn color="MainBtn" width="134" height="38" class="br-29">
                                                    <span class="t14400 FlashWhite--text">See Plans</span>
                                                </v-btn>
                                                </span>
                                            </v-row>
                                        </v-col>
                                        <v-col cols="5">
                                            <v-row justify="center" align="center" class="pr-5">
                                                <img src="~/assets/img/paiChart.png" alt="">
                                            </v-row>
                                        </v-col>

                                  
                                    </v-row>
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