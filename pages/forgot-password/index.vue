<!-- @format -->

<template>
    <v-row align="center" justify="center" class="ma-0 fill-height">
        <v-col cols="12" sm="10" md="10" lg="7" xl="6" class="pa-0 pa-sm-4">
            <v-row class="ma-0">
                <v-col cols="12">

                    <v-row class="ma-0" justify="center">
                        <v-col cols="8">
                            <v-row class="ma-0" justify="start">
                                <img src="../../assets/img/NEWGEE-LOGO.png" class="img-logo" alt="" />
                            </v-row>

                        </v-col>
                        <v-col cols="8">
                            <v-card color="#333333" min-height="432" min-width="493"
                                class=" rounded-xl mt-4 d-flex justify-center align-center pa-5">
                                <div class="login-box-login">
                                    <div class=" forgot-password-box">
                                        <p class="white--text forgot-password-title">Trouble with logging in?</p>
                                        <p class="white--text forgot-password-sub-title text-justify">Enter your email
                                            address, phone
                                            number or username, and we'll send you a code to get back into your account.
                                        </p>
                                    </div>
                                    <!-- <span v-if="error">نام کاربری یا رمز عبور اشتباه است</span> -->
                                    <v-form>
                                        <v-text-field dark label=" Email address" v-model="username" :rules="Rule"
                                            class="rounded-xl" outlined :name="Math.random()" autocomplete="off" />



                                    </v-form>

                                    <v-col>
                                        <v-btn class="rounded-xl" block :loading="loadinglogin" color="#8E66FF "
                                            @click="login()" dark>
                                            Send Login code

                                        </v-btn>

                                    </v-col>
                                    <v-col>
                                        <v-row align="center" justify="center " class=" pl-4">
                                            <span class="grey--text mr-3">or</span>
                                            <v-divider dark></v-divider>
                                        </v-row>
                                      
                                    </v-col>
                                    <v-col>
                                       
                                        <v-row align="center" justify="center ">
                                            <p  class="New-Account success--text">Create New Account</p>
                                        </v-row>
                                    </v-col>
                                    <v-col >
                                        <v-divider dark></v-divider>
                                    </v-col>

                                    
                                </div>
                            </v-card>
                        </v-col>
                    </v-row>
                </v-col>
            </v-row>
        </v-col>
    </v-row>
</template>
  
<script>
import axios from "axios";
export default {
    layout: "empty",
    data() {
        return {
            username: "",
            error: false,
            password: "",
            loader: null,
            loadinglogin: false,
            Rule: [(v) => !!v || "required"],

            code: "",
            codeError: false,
            codeErrorText: "",
            capcha: "",
            show1: false,
        };
    },
    methods: {

        login() {
            this.loadinglogin = true;
            axios({
                method: "post",
                url: process.env.apiUrl + "user/login/",
                data: {
                    mobile: this.username,
                    password: this.password,
                },
            })
                .then((response) => {
                    this.loadinglogin = false;
                    // zakhire Bearer ha va id customer dar cookie

                    this.$cookies.set("customer_Bearer", response.data.access);
                    this.$cookies.set(
                        "customer_name",
                        response.data.first_name +
                        " " +
                        response.data.last_name
                    );
                    this.$router.push("/");
                })
                .catch((err) => {
                    this.openToast(err.response.data.message, "error");
                    this.capchaz();
                    this.error = true;
                    this.loadinglogin = false;
                });
        },

        openToast(text, color) {
            var toastForm = {
                bool: true,
                text: text,
                color: color,
            };
            this.$store.commit("setToast", toastForm);
            setTimeout(() => {
                var toastForm = {
                    bool: false,
                    text: "",
                    color: "",
                };
                this.$store.commit("setToast", toastForm);
            }, 4000);
        },
    },



    // mounted(){
    //   if (this.$cookies.get("customer_Bearer")) {
    //     this.$router.push('/') 
    //   }
    // }
};
</script>
  