<!-- @format -->

<template>
    <v-row align="center" justify="center" class="ma-0 fill-height">
        <v-col cols="12" sm="10" md="10" lg="7" xl="6" class="pa-0 pa-sm-4">
            <v-row class="ma-0" justify="center" align="center">
                <v-col class=" hidden-sm-and-down ma-0 pa-0 d-flex justify-center align-center" cols="6" md="6">
                    <div>
                        <div class="ma-0 mb-15" justify="start">
                            <img src="../../assets/img/NEWGEE-LOGO.png" class="img-logo" alt="" />
                        </div>
                        <div>
                            <span class="white--text">
                                Start for free
                            </span>
                            <p class="ft60 white--text">
                                Create <span class="ft60 error--text">new</span> Account.
                            </p>
                        </div>
                        <div>
                            <img src="../../assets/img/registerImage1.png" class="img-fluid2" alt="" />
                        </div>
                    </div>
                </v-col>
                <v-col cols="6" md="6">
                    <v-card color="#333333" min-height="654" min-width="493"
                        class=" rounded-xl d-flex justify-center align-center">
                        <div class="login-box-login">
                            <span v-if="error">نام کاربری یا رمز عبور اشتباه است</span>
                            <v-form class="pa-7">
                                <v-row>
                                    <v-col cols="6" class="pa-0 px-2">
                                        <div class="mb-3 ml-4">
                                            <span class="white--text">First name</span>
                                        </div>
                                        <v-text-field dark label="First name" v-model="username" :rules="Rule"
                                            class="rounded-xl" outlined :name="Math.random()" autocomplete="off" />
                                    </v-col>
                                    <v-col cols="6" class="pa-0 px-2">
                                        <div class="mb-3 ml-4">
                                            <span class="white--text">First name</span>
                                        </div>
                                        <v-text-field outlined dark label="Username" class="rounded-xl" />
                                    </v-col>
                                    <v-col cols="12" class="pa-0">
                                        <div class="mb-3 ml-4">
                                            <span class="white--text">First name</span>
                                        </div>
                                        <v-text-field outlined dark label="Email" class="rounded-xl" />
                                    </v-col>
                                    <v-col cols="12" class="pa-0">
                                        <div class="mb-3 ml-4">
                                            <span class="white--text">First name</span>
                                        </div>
                                        <v-text-field dark class="rounded-xl" :type="show1 ? 'text' : 'password'"
                                            :rules="Rule" label="password" v-model="password"
                                            :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                                            @click:append="show1 = !show1" outlined :name="Math.random()"
                                            autocomplete="new-password" />
                                    </v-col>

                                    <v-col cols="12" class="pa-0">
                                        
                                        <v-btn class="rounded-xl" block :loading="loadinglogin" color="#8E66FF"
                                            @click="login()" dark>
                                            Create Account
                                        </v-btn>

                                    </v-col>

                                </v-row>


                            </v-form>
                            <v-row align="center" justify="center" class="mb-4">
                                <span class="white--text t18400">Already a member?</span>
                                <span>
                                    <v-btn text to="/login">
                                       <span class=" t18400 success--text">
                                           login
                                       </span>
                                    </v-btn>
                                </span>
                            </v-row>


                        </div>
                    </v-card>
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
  