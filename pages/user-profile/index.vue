<template>
    <div class="user-profile-back pt-15">
        <v-row justify="center">
            <v-col cols="12">
                <v-row justify="center">
                    <div class="user-profile-avatar-box">
                        <img width="97" class="ml-0 " src="../../assets/img/Untitled design (2) 1.png" alt="NEWGEE logo">
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
                            <v-btn text>
                                <span class="t16400 Grey2--text">
                                    Statistics
                                </span>
                            </v-btn>
                            <v-btn text>
                                <span class="t16400 Grey2--text">
                                    Milestone
                                </span>
                            </v-btn>
                            <v-btn text>
                                <span class="t16400 Grey2--text">
                                    Profile
                                </span>
                            </v-btn>
                        </v-row>
                    </div>

                    <v-col cols="12" class="mt-10">
                        <v-row justify="center">
                            <v-col cols="4">
                                <div class="Statistics-1-menu mt-4">
                                    <v-row justify="space-between" align="center" class=" px-8">
                                        <v-row align="center" class="pa-3 pt-6">
                                            <span><img src="~/assets/img/SoccerBall.svg" alt=""></span>
                                            <span class="t12400 white--text ml-10">Matches played</span>
                                        </v-row>
                                        <div>
                                            <span class="actor-font white--text t35400"> 458</span>
                                        </div>
                                    </v-row>


                                </div>
                                <div class="Statistics-2-menu mt-9">
                                    <v-row justify="space-between" align="center" class=" px-8">
                                        <v-row align="center" class="pa-3 pt-6">
                                            <span><img src="~/assets/img/Trophy.svg" alt=""></span>
                                            <span class="t12400 white--text ml-10">Victories</span>
                                        </v-row>
                                        <div>
                                            <span class="actor-font white--text t35400"> 100</span>
                                        </div>
                                    </v-row>

                                </div>
                                <div class="Statistics-3-menu mt-9">
                                    <v-row justify="space-between" align="center" class=" px-8">
                                        <v-row align="center" class="pa-3 pt-6">
                                            <span><img src="~/assets/img/Skull.svg" alt=""></span>
                                            <span class="t12400 white--text ml-10">Loses </span>
                                        </v-row>
                                        <div>
                                            <span class="actor-font white--text t35400"> 100</span>
                                        </div>
                                    </v-row>

                                </div>
                                <div class="Statistics-4-menu mt-9">
                                    <v-row justify="space-between" align="center" class=" px-8">
                                        <v-row align="center" class="pa-3 pt-6">
                                            <span><img src="~/assets/img/GameController.svg" alt=""></span>
                                            <span class="t12400 white--text ml-10">Total Points </span>
                                        </v-row>
                                        <div>
                                            <span class="actor-font white--text t35400"> 12980</span>
                                        </div>
                                    </v-row>

                                </div>
                                <div class="Statistics-5-menu mt-9">
                                    <v-row justify="space-between" align="center" class=" px-8">
                                        <v-row align="center" class="pa-3 pt-6">
                                            <span><img src="~/assets/img/CrownSimple.svg" alt=""></span>
                                            <span class="t12400 white--text ml-10">Titles</span>
                                        </v-row>
                                        <div>
                                            <span class="actor-font white--text t35400"> 100</span>
                                        </div>
                                    </v-row>

                                </div>
                            </v-col>
                            <v-col cols="4" >
                                <div class="text-right "> <span class="  success--text">Total Played Hours chart</span> </div>
                                <img src="~/assets/img/chart.png" alt="">
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


    data() {
        return {
            show: false,
            planetChartData: {
                type: "area",
                data: {
                    labels: [],
                    datasets: [
                        {
                            label: "تعداد",
                            data: [],
                            yAxisID: "A",
                            borderColor: "#36495d",
                            borderWidth: 3,
                        },
                        {
                            label: "قیمت",
                            data: [],
                            yAxisID: "B",
                            borderColor: "#47b784",
                            borderWidth: 3,
                        },
                    ],
                },
                options: {
                    scales: {
                        yAxes: [
                            {
                                id: "A",
                                type: "linear",
                                position: "left",
                            },
                            {
                                id: "B",
                                type: "linear",
                                position: "right",
                            },
                        ],
                    },
                },
            },

            chartOptions: {
                chart: {
                    zoomType: "x",
                    type: "area",
                    backgroundColor: "#1E1E1E",
                },
                title: {
                    text: "",
                    style: {
                        color: "#ffffff",
                        fontWeight: "bold",
                    },
                },

                tooltip: {
                    formatter: function () {
                        return (
                            "<br> تاریخ :<b>" +
                            this.x +
                            "</b> <br>  قیمت :<b>" +
                            this.y +
                            "</b>"
                            // "<br>here is explanation"
                        );
                    },
                },

                xAxis: {
                    labels: {
                        enabled: false,
                    },
                    categories: [],
                    // visible: false,
                    plotLines: [],
                },
                yAxis: {
                    title: {
                        text: "قیمت",
                    },
                },
                legend: {
                    enabled: false,
                },
                plotOptions: {
                    series: {
                        animation: {
                            duration: 2000,
                        },
                    },
                },
                credits: {
                    enabled: false,
                },
                series: [
                    {
                        data: [],
                        turboThreshold: 100000000000,
                        fillColor: {
                            linearGradient: {
                                x1: 0,
                                y1: 0,
                                x2: 0,
                                y2: 1,
                            },
                            stops: [
                                [0, "#1976D2"],
                                [1, "#1E1E1E"],
                            ],
                        },
                    },
                ],
            },
        }
    },


    mounted(){
        setTimeout(() => {
            this.show = true
        }, 5000);
    }
}
</script>