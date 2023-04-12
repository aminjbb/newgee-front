<template>
    <div class=" position__relative">
        <v-row class="ml-10 d-flex align-center ">
            <div class="coin-box   mr-6 text-center d-flex align-center justify-center ">
                <v-row style="padding-left:10px;">
                    <!--  -->
                    <div class="img-coin-box pt-1 mt-1"><img width="32" src="../../assets/img/Coins.svg" alt="NEWGEE logo">
                    </div>
                    <span class="ma-4 t18700 success--text ml-15">1500</span>
                </v-row>
            </div>
            <div class="notif_box  mr-6 text-center d-flex align-center justify-center" @click="$router.push('/users-list')">
                <img width="25" src="../../assets/img/AddUserIcon.png" alt="NEWGEE logo">
            </div>
            <div class="position__relative">
                <div class="notif_box text-center  d-flex align-center justify-center position__relative"
                    @click="notif = !notif">
                    <img width="25" src="../../assets/img/MessageIcon.png" alt="NEWGEE logo">
                </div>
                <div  class="triangle-up" v-if="notif"></div>
                <div v-click-outside="outsideNotifbox" class="notif-modal-box" v-if="notif">
                    <v-row align="center" class="ma-3">
                        <span class="mt-2">
                            <img src="~/assets/img/notifimg.svg" alt="">
                        </span>
                        <span class="t12400 white--text ml-2">
                            new tournament has began
                        </span>
                    </v-row>
                    <v-divider color="white"></v-divider>
                </div>
            </div>
            <div class="position__relative">
                <div class="account_box ml-10 text-center d-flex align-center justify-center position__relative z-1"
                    @click="accountBox = !accountBox">
                    <img width="56" class="ml-0 " src="../../assets/img/Untitled design (2) 1.png" alt="NEWGEE logo">
                </div>
                <div v-click-outside="outsideloginbox" class="dashboard-box pt-15 " v-if="accountBox && isLogin">
                    <div class="text-left">
                        <span class="t20400 white--text ml-5">
                            User Name
                        </span>

                        <v-divider color="white" class="mt-5"></v-divider>
                        <div class="mt-10">
                            <v-row align="center">
                                <div class="ml-8 mr-2"><img src="~/assets/img/dashboard.svg" class="mt-2" alt=""></div>
                                <div class="t18400 white--text ">Dashboard</div>
                            </v-row>
                            <v-row align="center" class="mt-5">
                                <div class="ml-8 mr-2"><img src="~/assets/img/setting.svg" class="mt-2" alt=""></div>
                                <div class="t18400 white--text ">Settings</div>
                            </v-row>

                        </div>

                    </div>
                </div>
                <div v-click-outside="outsideloginbox" class="login-box pt-15 " v-if="accountBox && !isLogin">
                    <div class="text-left">
                        <div class="ml-15">
                            <span class="white--text">
                                You should login or register first!
                            </span>
                        </div>
                        <v-row justify="center" class="mt-8">
                            <v-btn to="/login" outlined dark class="btn-login mx-3">
                                <span class="t18400 white--text">
                                    login
                                </span>
                            </v-btn>
                            <v-btn to="/register" outlined dark class="btn-login mx-3">
                                <span class="t18400 white--text">
                                    Register
                                </span>
                            </v-btn>
                        </v-row>
                    </div>
                </div>
            </div>
        </v-row>



    </div>
</template>

<script>
export default {
    data() {
        return {
            accountBox: false,
            isLogin: false,
            notif: false
        }
    },

    methods:{
        outsideloginbox(){
            if(this.accountBox){
                this.accountBox = false
            }
        },
        outsideNotifbox(){
            if(this.notif){
                this.notif = false
            }
        },

        
    }
}
</script>