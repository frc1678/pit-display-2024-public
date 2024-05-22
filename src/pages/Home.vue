<script setup lang="ts">
    import { ref } from "vue";
    const selected = ref(-1);
    import { trackActions } from '../components/InteractionTracker.ts';
    trackActions('pageSwitch', 'Home');
    defineProps({showButton:Boolean});
</script>

<template>
    <div className="Home-page">
        <h1 class="home">HOME</h1>
        <hr class="divider-home" />

        <br>
        <br>
        <br>
        <h2>Click below to navigate</h2>
        <br>
        <br>
        <br>
        <br>
        <br>

        <div class="row">
            <div class="grid-item" @click="selected = selected === 0 ? -1 : 0">
                <img src="/images/home_page_images/home (1).jpg" class="button" />
                <button class="home-category">
                    Technical Specifications
                </button>
            </div>

            <ul class="home-dropdown" v-if="selected === 0">
                <div class="dropdown">
                    <li>
                        <router-link to="/technical-specifications/electrical-diagrams" @click="selected = -1, $emit('setShowButton', true)">
                            Electrical Diagrams
                        </router-link>
                    </li>

                    <li>
                        <router-link to="/technical-specifications/robot-details" @click="selected = -1, $emit('setShowButton', true)">
                            Robot Details
                        </router-link>
                    </li>

                    <li>
                        <router-link to="/technical-specifications/robot-images" @click="selected = -1, $emit('setShowButton', true)">
                            Robot Images
                        </router-link>
                    </li>

                    <li>
                        <router-link to="/technical-specifications/programming-outline" @click="selected = -1, $emit('setShowButton', true)">
                            Programming Outline
                        </router-link>
                    </li>
                </div>
            </ul>
        </div>

        <div class="row">
            <div class="grid-item" @click="selected = selected === 1 ? -1 : 1">
                <img src="/images/home_page_images/home (2).jpg" class="button" />
                <button class="home-category" >Team Overview</button>
            </div>

            <ul class="home-dropdown" v-if="selected === 1">
                <div class="dropdown">
                    <l1>
                        <router-link to="/team-overview/about" @click="selected = -1, $emit('setShowButton', true)"
                            >About Citrus Circuits</router-link
                        >
                    </l1>

                    <li>
                        <router-link to="/team-overview/subteam-breakdown" @click="selected = -1, $emit('setShowButton', true)">
                            Subteam Breakdown
                        </router-link>
                    </li>

                    <li>
                        <router-link to="/team-overview/robot-history" @click="selected = -1, $emit('setShowButton', true)">
                            Robot History
                        </router-link>
                    </li>
                </div>
            </ul>
        </div>
        
        <div class="row">
            <router-link to="/team-overview/outreach-programs" style="text-decoration: none; color: inherit" @click="selected = -1">
                <div class="grid-item">
                    <img src="/images/home_page_images/home (3).jpg" class="button" />
                    <button class="home-category" @click="$emit('setShowButton', true)">Outreach Programs</button>
                </div>
            </router-link>
        </div>
    </div>
</template>

<style scoped>
    .Home-page {
        margin-left: 5%;
        margin-right: 5%;
        font-size: medium;
    }

    .home {
        color: #40d635;
        font-family: "Bebas Neue";
        text-align: center;
        font-size: 10em;
        font-weight: normal;
        letter-spacing: 0.03em;
        margin-top: 0.75em;
        user-select: none;
    }

    .dropdown a {
        z-index: 4;
        color: white;
        text-decoration: none;
        padding: 24px;
        width: 105.7%;
        font-size: xx-large;
        background: rgb(56, 56, 56);
        display: block;
        text-align: center;
    }

    .grid-item {
        transition: transform 0.06s;
        position: relative;
        text-align: center;
        grid-row-start: 1;
        grid-row-end: 3;
    }

    .button {
        height: 30vw;
        width: 90vw;
        flex-shrink: 0;
        z-index: 2;
        background-position: center;
        background-size: cover;
        background-repeat: no-repeat;
        background-color: transparent;
        border: none;
        transition: transform 0.06s;
        object-fit: cover;
        display: block;
    }

    .home-category {
        z-index: 3;
        height: 30vw;
        width: 90vw;
        flex-shrink: 0;
        background-position: center;
        background-size: cover;
        background-repeat: no-repeat;
        background-color: transparent;
        margin-bottom: 12.5%;
        margin-top: -32.5%;
        color: white;
        border: none;
        transition: transform 0.06s;
        object-fit: cover;
        display: block;
        font-size: 6em;
        font-family: "Bebas Neue";
        text-shadow: 2px 2px 20px black;
        text-align: center;
    }

    .home-dropdown::before {
        z-index: 1;
    }

    .home-dropdown {
        z-index: 1;
        background: grey;
        list-style: none;
        padding: 0;
        margin: 0;
        margin-bottom: 4.2em;
        margin-top: -8.3em;
        animation: fadeIn 0.2s;
        width: 89.9%;
    }

    .column {
        float: left;
        width: 50%;
    }

    .row:after {
        content: "";
        display: table;
        clear: both;
    }
    
    @keyframes fadeIn {
    0% { opacity: 0; transform:translatey(-10em);}
    100% { opacity: 1; transform: translatey(0em);}
    }
</style>
