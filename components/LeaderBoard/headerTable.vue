<template>
    <v-row justify="center" align="center">
        <v-row align="center" class="leader_boadrd_header px-10">
            <v-col cols="6">
                <v-row justify="center" align="center" class="pt-1">
                    <v-col cols="2" class="pl-3">
                        <span class="f400-16">
                            Rang
                        </span>
                    </v-col>
                    <v-col cols="3" class="pl-9 ">
                        <span class="f400-16">
                            Tier
                        </span>
                    </v-col>
                    <v-col cols="3" class="mr-5">
                        <span class="f400-16 ">
                            Avatar
                        </span>
                    </v-col>
                    <v-col cols="2" class="pl-0">
                        <span class="f400-16">
                            user
                        </span>
                    </v-col>
                    <!-- <v-col cols="2" class="pl-0">
                        <span class="f400-16">
                            Bracket State
                        </span>
                    </v-col> -->
                </v-row>
            </v-col>
            <v-col cols="6">
                <v-row justify="end" align="center">
                    <v-col cols="6" v-if="tournament">
                        <span class="f400-16">
                            Bracket State
                        </span>
                    </v-col>
                    <v-col cols="4">
                        <span class="f400-16">
                            Total Score
                        </span>
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