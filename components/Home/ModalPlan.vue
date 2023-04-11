<template>
    <div class="text-center rounded-xl">
        <v-dialog v-model="dialog" width="954" class="">
            <template v-slot:activator="{ on, attrs }">
                <v-btn color="white" class="br-29" height="45" width="354" v-bind="attrs" v-on="on">
                                <span class="t20700  my-10 mx-5">
                                    Become a pro
                                </span>
                            </v-btn>
            </template>

            <v-card color="#333333">
                <v-card-title class=" pa-5 modalTile">
                    <span class="white--text">Join Pro Plan</span>
                </v-card-title>

                <v-card-text>
                    <v-card class="ma-10 relative" min-width="768" min-height="517" color="#4F4F4F">
                        <div class="yearlyPlan d-flex justify-center align-center">
                            <span class="white--text f500-18">Yearly Plan</span>
                        </div>
                        <img class="imgPlan " height="224" width="400" src="../../assets/img/planModalimage.png" alt="">
                       
                        <div class="px-15">
                            <v-container fluid>
                                <v-radio-group v-model="radios">
                                    <v-radio color="#2EE17A" value="Google">
                                        <template v-slot:label>
                                            <div><span class="white--text f500-18">Debit/Credit card</span></div>
                                        </template>
                                    </v-radio>
                                    <div class="px-10">
                                        <p class="f400-14 grey--text lighten-1">Lorem ipsum dolor sit amet, consectetur
                                            adipiscing elit, sed do eiusmod
                                            tempor incididunt ut labore et dolore
                                            magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                                            laboris nisi ut aliquip ex ea commodo consequat.</p>
                                    </div>

                                    <div class=" px-10">
                                        <v-radio-group v-model="radios">
                                            <v-radio color="#2EE17A" value="Google">
                                                <template v-slot:label>
                                                    <div><span class="greyf2--text f400-14">**** **** **** 4923</span>
                                                        <span class="ml-5 greyf2--text f400-14">Emmanuel Irako</span>
                                                    </div>
                                                </template>
                                            </v-radio>
                                            <v-radio color="#2EE17A" value="Duckduckgo" class="mt-2">
                                                <template v-slot:label>
                                                    <div><span class="greyf2--text f400-14">**** **** **** 4923</span>
                                                        <span class="ml-5 greyf2--text f400-14">Emmanuel Irako</span>
                                                    </div>
                                                </template>
                                            </v-radio>
                                        </v-radio-group>
                                    </div>
                                    <div class=" px-10">
                                        <v-btn min-width="337" min-height="28" class="my-2 rounded-xl" outlined
                                            color="#2EE17A">
                                            Outlined Button
                                        </v-btn>
                                    </div>
                                    <v-radio color="#2EE17A" value="Duckduckgo" class="mt-2">
                                        <template v-slot:label>
                                            <div><span class="white--text f500-18">PayPal</span></div>
                                        </template>
                                    </v-radio>
                                    <div class="px-10">
                                        <p class="f400-14 grey--text lighten-1">Lorem ipsum dolor sit amet, consectetur
                                            adipiscing elit, sed do eiusmod
                                            tempor incididunt ut labore et dolore
                                            magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                                            laboris nisi ut aliquip ex ea commodo consequat.</p>
                                    </div>
                                </v-radio-group>
                            </v-container>
                        </div>
                    </v-card>
                </v-card-text>



                <!-- <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="primary" text @click="dialog = false">
                        I accept
                    </v-btn>
                </v-card-actions> -->
            </v-card>
        </v-dialog>
    </div>
</template>

<script>
export default {
    data() {
        return {
            dialog: false,
            radios: ''
        }
    },
}
</script>