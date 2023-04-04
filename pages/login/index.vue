<!-- @format -->

<template>
    <v-row align="center" justify="center" class="ma-0 fill-height">
        <v-col cols="12" sm="10" md="10" lg="7" xl="6" class="pa-0 pa-sm-4">
            <v-row class="ma-0">
                <v-col class="hidden-sm-and-down ma-0 pa-0 d-flex justify-center align-center" cols="12" md="6">
                    <div class="circle-box-login"></div>
                    <img src="../../assets/img/loginlogo.png" class="img-fluid2 z-10" style="height: 100%;" alt="" />
                </v-col>
                <v-col cols="12" md="6">
                    <v-row class="ma-0" justify="start">
                        <img src="../../assets/img/NEWGEE-LOGO.png" class="img-logo" alt="" />
                    </v-row>

                    <v-card color="#333333" height="350" min-width="493" class=" rounded-xl mt-4 d-flex justify-center align-center">
                        <div class="login-box">

                            <span v-if="error">نام کاربری یا رمز عبور اشتباه است</span>
                            <v-form>
                                <v-text-field dark label="username" v-model="username" :rules="Rule" class="rounded-xl"
                                    outlined :name="Math.random()" autocomplete="off"/>

                                <v-text-field dark class="rounded-xl" :type="show1 ? 'text' : 'password'" :rules="Rule"
                                    label="password" v-model="password" :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                                    @click:append="show1 = !show1" outlined :name="Math.random()"
                                    autocomplete="new-password" />

                            </v-form>

                            <v-col>
                                <v-btn class="rounded-xl" block :loading="loadinglogin" color="#8E66FF" @click="login()" dark>
                                   login

                                </v-btn>

                            </v-col>
                            <v-col>
                                <v-row justify="end">
                                    <span class="white--text">Forgot Password?</span>
                                </v-row>

                            </v-col>
                        </div>
                    </v-card>

                    <v-row class="ma-0 mt-3" justify="end">
                        <v-col cols="3">
                            <img src="../../assets/img/2560px-PlayStation_logo 2.png" width="66" height="51"  alt="" />
                        </v-col>
                        <v-col cols="3">
                            <img src="../../assets/img/1200px-Xbox_Logo 4.png" width="51" height="51"  alt="" />
                        </v-col>
                        <v-col cols="3">
                            <img src="../../assets/img/steam-logo-37A2862F0B-seeklogo 1.png" width="52" height="52" alt="" />
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
  