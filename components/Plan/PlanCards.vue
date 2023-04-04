<template>
    <div class="relative">
        <!-- 
        <v-row justify="center" align="end" class="mt-15 ">
            <v-col cols="6">
                <v-card class="rounded-xl" dark min-height="504">

                </v-card>
            </v-col>
            <v-col cols="6">
                <v-card class="rounded-xl" color="#561DC5" min-height="599">

                </v-card>
            </v-col>
        </v-row> -->
        <div class="absolute">
            <v-img :aspect-ratio="16/9" :width="468" :height="468"
                :src="require('~/assets/img/PlanImage.png')"></v-img>
        </div>
        <div class="absolute1">
            <v-row justify="center" align="end" class="">
                <v-col cols="6">
                    <v-card class="rounded-xl" dark min-height="504">

                    </v-card>
                </v-col>
                <v-col cols="6">
                    <v-card class="rounded-xl" color="#561DC5" min-height="599">

                    </v-card>
                </v-col>
            </v-row>
        </div>
    </div>

</template>

<script>
export default {
    data() {
        return {

        }
    }
}
</script>