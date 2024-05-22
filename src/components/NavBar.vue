<script setup lang="ts">
    import { ref } from "vue";
    defineProps({showButton:Boolean});
    // -1 is nothing selected, 0 is technical specifications selected, 1 is team overview selected
    const selected = ref(-1);
</script>

<template>
    <div class="shade" v-if="selected !== -1" @click="selected = -1" />
    <ul class="navbar">
        <li class="category">
            <div class="category-title" @click="selected = selected === 0 ? -1 : 0">Technical Specifications</div>
            <ul class="category-dropdown" v-if="selected === 0">
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
                <li>
                   <!-- <router-link to="/technical-specifications/controls-diagram" @click="selected = -1">
                        Controls Diagram
                    </router-link>-->
                </li>
            </ul>
        </li>
        <li class="category">
            <div class="category-title" @click="selected = selected === 1 ? -1 : 1">Team Overview</div>
            <ul class="category-dropdown" v-if="selected === 1">
                <l1>
                    <router-link to="/team-overview/about" @click="selected = -1, $emit('setShowButton', true)">About Citrus Circuits</router-link>
                </l1>
                <li>
                    <router-link to="/team-overview/subteam-breakdown" @click="selected = -1, $emit('setShowButton', true)">
                        Subteam Breakdown
                    </router-link>
                </li>
                <li>
                    <router-link to="/team-overview/robot-history" @click="selected = -1, $emit('setShowButton', true)"> Robot History </router-link>
                </li>
            </ul>
        </li>
        <li class="category">
            <router-link to="/team-overview/outreach-programs" @click="selected = -1, $emit('setShowButton', true)"> Outreach Programs </router-link>
        </li>
    </ul>
</template>

<style scoped>
    .navbar {
        position: relative;
        width: 100%;
        top: 0;
        z-index: 3;
        margin: 0;
        background: black;
        list-style-type: none;
        padding: 0px;
        color: white;
        display: flex;
        flex-direction: row;
        font-size: 1.25em;
        position: fixed;
    }

    .category {
        z-index: 2;
        flex-grow: 1;
        position: relative;
    }

    .category-title {
        z-index: 2;
        text-align: center;
        padding: 24px;
        font-weight: 500;
    }

    .category-dropdown {
        z-index: 2;
        position: absolute;
        background: black;
        list-style: none;
        padding: 0;
        margin: 0;
        width: 100%;
        animation: fadeIn 0.2s;
    }

    .navbar a {
        z-index: 3;
        color: white;
        text-decoration: none;
        padding: 24px;
        background: black;
        display: block;
        text-align: center;
    }

    .shade {
        position: absolute;
        width: 100%;
        height: 200%;
        z-index: 1;
        margin-top: -10em;
        background: black;
        opacity: 0.5;
    }

    @keyframes fadeIn {
    0% { opacity: 0; transform:translatey(-10em);}
    100% { opacity: 1; transform: translatey(0em);}
    }
</style>
