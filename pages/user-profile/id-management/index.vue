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
                                <div class="user-info-menu-active mt-6" @click="$router.push('/user-profile/id-management')">
                                    <v-row justify="center" align="center" class="pt-5">
                                        <span class="t16400 white--text ">ID Managment</span>
                                    </v-row>


                                </div>
                                <div class="user-info-menu mt-4" @click="$router.push('/user-profile/frind-list')">
                                    <v-row justify="center" align="center" class="pt-7">
                                        <span class="t16400 white--text ">Friend List</span>
                                    </v-row>


                                </div>
                                <div class="user-info-menu mt-4" @click="$router.push('/user-profile/subscription-plan')">
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
                                <div class="user-info-box px-3" id="userInfoBox">
                                    <v-row justify="center" align="center" class="py-10 ">
                                        <v-col cols="3">
                                            <span class="t16400 white--text ">
                                                PSN ID
                                            </span>
                                        </v-col>
                  
                                        <v-col cols="8">
                                            <v-text-field background-color="#4F4F4F" dense outlined hide-details
                                                color="#D9D9D9">
                                                <template #label>
                                                    <span class="Grey2--text t14400">PSN ID</span>
                                                </template>

                                            </v-text-field>
                                        </v-col>
                                        <v-col cols="3">
                                            <span class="t16400 white--text ">
                                                Xbox Live ID
                                            </span>
                                        </v-col>
                                        <v-col cols="8">
                                            <div>
                                                <v-text-field background-color="#4F4F4F" dense outlined hide-details
                                                    color="#D9D9D9">
                                                    <template #label>
                                                        <span class="Grey2--text t14400">Xbox Live ID</span>
                                                    </template>

                                                </v-text-field>
                                            </div>
                                        </v-col>
                                        <v-col cols="3">
                                            <span class="t16400 white--text ">
                                                Steal ID
                                            </span>
                                        </v-col>
                                        <v-col cols="8">
                                            <div>
                                                <v-text-field background-color="#4F4F4F" dense outlined hide-details
                                                    color="#D9D9D9">
                                                    <template #label>
                                                        <span class="Grey2--text t14400">Steal ID</span>
                                                    </template>

                                                </v-text-field>
                                            </div>
                                        </v-col>
                                        <v-col cols="3">
                                            <span class="t16400 white--text ">
                                                Battle.net ID
                                            </span>
                                        </v-col>
                                        <v-col cols="8">
                                            <div>
                                                <v-text-field background-color="#4F4F4F" dense outlined hide-details
                                                    color="#D9D9D9">
                                                    <template #label>
                                                        <span class="Grey2--text t14400">Battle.net ID</span>
                                                    </template>

                                                </v-text-field>
                                            </div>
                                        </v-col>

                                        <v-col cols="12">
                                            <v-row justify="space-between" align="center" class="py-3 px-10 pl-14">
                                                <span class="t12400 OldSilver--text">You can only change your ID every 6 months.</span>
                                                <v-btn color="MainBtn" width="116" height="38" class="br-29">
                                                    <span class="t14400 FlashWhite--text">Edit</span>
                                                </v-btn>

                                              
                                            </v-row>
                                        </v-col>

                                    </v-row>
                                </div>

                                <v-row justify="center" class="py-15 pl-15 ">
                                   
                                    <v-btn color="OldSilver" width="116" height="38" class="br-29 mx-4" outlined>
                                        <span class="t14400 white--text">Cancel</span>
                                    </v-btn>
                                    <v-btn color="success" width="116" height="38" class="br-29">
                                        <span class="t14400 white--text">save</span>
                                    </v-btn>
                                </v-row>
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