<template>
    <v-row justify="center" class="mt-10 mb-15">
        <div class="leader-board-container">
            <v-row class="pa-5" justify="space-between">
                <div>
                    <v-btn @click="tab = 0" text value="0" class=" mx-2" :class="tab == 0 ? 'MainBtn--text active-tournament-btn' : 'white--text'"> 
                        About
                    </v-btn>
                    <v-btn @click="tab = 1" text value="1" class=" mx-2" :class="tab == 1 ? 'MainBtn--text active-tournament-btn' : 'white--text'">
                        <span> Bracket</span>
                    </v-btn>
                    <v-btn @click="tab = 2" text value="2" class=" mx-2" :class="tab == 2 ? 'MainBtn--text active-tournament-btn' : 'white--text'">
                        Standings
                    </v-btn>
                    <v-btn @click="tab = 3" text value="2" class=" mx-2" :class="tab == 3 ? 'MainBtn--text active-tournament-btn' : 'white--text'">
                        Matches
                    </v-btn>
                </div>

                <div class=" mx-2">
                    <v-btn width="257" dark color="#8E66FF" class="pl-5 pr-5 ma-0 white--text rounded-xl">
                        You have registered
                    </v-btn>
                </div>
            </v-row>
            <template v-if="tab == 0">
                <v-row justify="center" class="mt-8">
                    <v-card class="border-r-25" height="470" width="828" color="#333333">
                        <v-img class="border-r-25" :aspect-ratio="16 / 9" :height="408" :width="828"
                            src="https://cdn.vuetifyjs.com/images/parallax/material.jpg">

                        </v-img>

                        <v-row justify="space-between  t20700">
                            <span class="success--text ma-8">
                                PUBG Tournament By red bull
                            </span>
                            <div class="ma-6">
                                <v-btn width="205" dark color="success" class="pl-5 pr-5 ma-0 white--text rounded-xl">
                                    Join now
                                </v-btn>
                            </div>
                        </v-row>

                        <v-row justify="start" class="px-10">
                            <p class="MainBtn--text t20700">PUBG Game storyline</p>
                            <p class="white--text t16400">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                                nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                                labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                                laboris nisi ut aliquip ex ea commodo consequat.</p>
                        </v-row>
                    </v-card>
                </v-row>
            </template>
            <template v-if="tab == 1">
                <v-row justify="center">
                    <v-col cols="12">
                        <div class="theme theme-dark tournoment-bg">
                            <div class="bracket  disable-image">
                                <div class="column one">
                                    <BracketTopWin />

                                    <BracketBottomWin />

                                    <BracketTopWin />

                                    <BracketBottomWin />
                                    <BracketTopWin />

                                    <BracketBottomWin />
                                    <BracketTopWin />

                                    <BracketBottomWin />



                                </div>

                                <div class="column two">
                                    <BracketTopWin />

                                    <BracketBottomWin />
                                    <BracketTopWin />

                                    <BracketBottomWin />


                                </div>

                            </div>

                        </div>
                    </v-col>
                </v-row>
            </template>
            <template v-if="tab == 2">
                <v-row justify="center" class="mt-15 ma-0">
                    <v-col cols="10">
                        <v-row justify="center">
                            <v-col cols="2" class="ma-0">
                                <!-- <HomeMenu/> -->
                            </v-col>
                            <v-col cols="8" class="ma-0">
                                <div>
                                    <headerTable />
                                    <searchTable />
                                    <bodyTable />
                                </div>

                            </v-col>
                            <v-col cols="2" class="ma-0">

                            </v-col>
                        </v-row>

                    </v-col>
                </v-row>
            </template>

            <template v-if="tab == 3">
                <v-row justify="center" class="mt-15">
                    <MatchGame />
                    <MatchDefeatedGame/>
                    <MatchWinGame/>
                </v-row>
                
            </template>

        </div>
    </v-row>
</template>




<script>
import BracketBottomWin from '~/components/Tournoment/BracketBottomWin'
import BracketTopWin from '~/components/Tournoment/BracketTopWin'
import headerTable from '~/components/LeaderBoard/headerTable.vue'
import searchTable from '~/components/LeaderBoard/searchTable.vue'
import bodyTable from '~/components/LeaderBoard/bodyTable.vue'
import MatchGame from '~/components/Public/MatchGame.vue'
import MatchDefeatedGame from '~/components/Public/MatchDefeatedGame.vue'
import MatchWinGame from '~/components/Public/MatchWinGame.vue'
export default {
    components: {
        BracketTopWin, BracketBottomWin,
        headerTable,
        searchTable,
        bodyTable,
        MatchGame,
        MatchDefeatedGame,
        MatchWinGame

    },
    data() {
        return {
            tab: 0
        }
    }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Source+Sans+Pro:400,600,700');

html {
    height: 100%;
    width: 100%;
}

.circle {
    width: 8px;
    height: 8px;
    background: #7B7B7B;
    border-radius: 100%;
}

body {
    font-family: 'source sans pro', sans-serif;
    height: 100%;
    width: 100%;
}

.theme {
    height: 100%;
    width: 100%;
    position: absolute;
}

.bracket {
    padding: 40px;
    margin: 5px;
}

.bracket {
    display: flex;
    flex-direction: row;
    position: relative;
}

.column {
    display: flex;
    flex-direction: column;
    min-height: 100%;
    justify-content: space-around;
    align-content: center;
}

.match {
    position: relative;
    display: flex;
    flex-direction: column;
    min-width: 240px;
    max-width: 240px;
    height: 62px;
    margin: 12px 24px 12px 0;
}

.match .match-top {
    border-radius: 2px 2px 0 0;
}

.match .match-bottom {
    border-radius: 0 0 2px 2px;
}

.match .team {
    display: flex;
    align-items: center;
    width: 100%;
    height: 100%;
    border: 1px solid black;
    position: relative;
}

.match .team span {
    padding-left: 8px;
}

.match .team span:last-child {
    padding-right: 8px;
}

.match .team .score {
    margin-left: auto;
}

.match .team:first-child {
    margin-bottom: -1px;
}

.match-lines {
    display: block;
    position: absolute;
    top: 50%;
    bottom: 0;
    margin-top: 0px;
    right: -1px;
}

.match-lines .line {
    background: red;
    position: absolute;
}

.match-lines .line.one {
    height: 1px;
    width: 12px;
}

.match-lines .line.two {
    height: 44px;
    width: 1px;
    left: 11px;
}

.match-lines.alt {
    left: -12px;
}

.match:nth-child(even) .match-lines .line.two {
    transform: translate(0, -100%);
}

.column:first-child .match-lines.alt {
    display: none;
}

.column:last-child .match-lines {
    display: none;
}

.column:last-child .match-lines.alt {
    display: block;
}

.column:nth-child(2) .match-lines .line.two {
    height: 88px;
}

.column:nth-child(3) .match-lines .line.two {
    height: 175px;
}

.column:nth-child(4) .match-lines .line.two {
    height: 262px;
}

.column:nth-child(5) .match-lines .line.two {
    height: 349px;
}

.theme-light {
    background: #f9fafd;
    border-color: #e6eaf7;
}

.theme-light .match-lines .line {
    background: #dadfe3;
}

.theme-light .team {
    background: #fff;
    border-color: #dadfe3;
    color: #708392;
}

.theme-light .winner-top .match-top,
.theme-light .winner-bottom .match-bottom {
    background: #fff;
    color: #272f36;
    border-color: #dadfe3;
    z-index: 1;
}

.theme-light .match .seed {
    color: #9fafbf;
}

.theme-light .match .score {
    color: #9fafbf;
}

.theme-light .match .seed {
    font-size: 12px;
    min-width: 10px;
}

.theme-light .match .score {
    font-size: 14px;
}

.theme-dark {
    background: #0e1217;
    border-color: #040607;
}

.theme-dark .match-lines .line {
    background: #36404e;
}

.theme-dark .team {
    background: #182026;
    border-color: #232c36;
    color: #6b798c;
}

.theme-dark .winner-top .match-top,
.theme-dark .winner-bottom .match-bottom {
    background: #232c36;
    color: #e3e8ef;
    border-color: #36404e;
    z-index: 1;
}

.theme-dark .winner-top .match-top .score,
.theme-dark .winner-bottom .match-bottom .score {
    color: #03d9ce;
}

.theme-dark .match .seed {
    font-size: 12px;
    min-width: 10px;
}

.theme-dark .match .score {
    font-size: 14px;
}

.theme-dark-trendy {
    background: #2b5876;
    background: -webkit-linear-gradient(to right, #171721, #122b29);
    background: linear-gradient(to right, #171721, #122b29);
    border-color: #040607;
}

.theme-dark-trendy .match-lines .line {
    background: #36404e;
}

.theme-dark-trendy .team {
    background: rgba(50, 54, 65, 0.4);
    color: #6b798c;
    border: 2px solid transparent;
}

.theme-dark-trendy .team:first-child {
    margin-bottom: 2px;
}

.theme-dark-trendy .team:last-child {
    margin-top: 2px;
}

.theme-dark-trendy .winner-top .match-top,
.theme-dark-trendy .winner-bottom .match-bottom {
    background: black;
    color: #e3e8ef;
    z-index: 1;
}

.theme-dark-trendy .winner-top .match-top .score,
.theme-dark-trendy .winner-bottom .match-bottom .score {
    color: #03d9ce;
}

.theme-dark-trendy .match {
    margin-right: 48px;
}

.theme-dark-trendy .match .team .name {
    text-transform: uppercase;
    font-size: 14px;
    letter-spacing: 0.5px;
}

.theme-dark-trendy .match .seed {
    display: none;
}

.theme-dark-trendy .match .match-top {
    border-radius: 0;
}

.theme-dark-trendy .match .match-bottom {
    border-radius: 0;
}

.theme-dark-trendy .match-lines {
    opacity: 0.75;
    right: -12px;
}

.theme-dark-trendy .match-lines .line {
    background: #03d9ce;
}

.theme-dark-trendy .match-lines.alt {
    left: -24px;
}

.theme-dark-trendy .team {
    overflow: hidden;
}

.theme-dark-trendy .score:before {
    opacity: 0.25;
    position: absolute;
    z-index: 1;
    content: '';
    display: block;
    background: black;
    min-height: 50px;
    min-width: 70px;
    transform: translate(-12px, 0) rotate(25deg);
}

.disable-image .image,
.disable-seed .seed,
.disable-name .name,
.disable-score .score {
    display: none !important;
}

.disable-borders {
    border-width: 0px !important;
}

.disable-borders .team {
    border-width: 0px !important;
}

.disable-seperator .match-top {
    border-bottom: 0px !important;
}

.disable-seperator .match-bottom {
    border-top: 0px !important;
}

.disable-seperator .team:first-child {
    margin-bottom: 0px;
}

.theme-switcher {
    position: absolute;
    top: 20px;
    right: 20px;
    padding: 24px;
    border: 1px solid #c0cfdd;
    background: #6b798c;
}

.theme-switcher h2 {
    color: #e1e8ef;
    text-transform: uppercase;
    font-size: 12px;
    margin: 0 0 12px 0;
}

.theme-switcher button {
    line-height: 1em;
    font-size: 14px;
    font-weight: 500;
    padding: 10px 16px;
    border-radius: 2px;
    border: 1px solid #ccc;
    cursor: pointer;
    background: #6b798c;
    color: #ccc;
    border: 1px solid #eee;
}

.theme-light .theme-switcher #theme-light,
.theme-dark .theme-switcher #theme-dark,
.theme-dark-trendy .theme-switcher #theme-dark-trendy,
.theme-none .theme-switcher #theme-none {
    background: black;

}
</style>

