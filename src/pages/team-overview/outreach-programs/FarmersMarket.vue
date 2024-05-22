<script setup lang="ts">
    import { trackActions } from '../../../components/InteractionTracker.ts';
    trackActions('outreachPageSwitch','FarmersMarket');
</script>

<template>
    <div class="farmers-market">
        <img
            src="/images/outreach_programs/davis-farmers-market-logo.png"
            style="vertical-align: middle;"
            alt="Farmer's Market Logo"
            class="logo"
        />

        <h1 class="section-header">Farmer's Market</h1>
        <hr class="solid">
        <img src="/images/outreach_programs/farmers-market.jpg" alt="Farmer's Market" style="" class="image" />
        <hr class="solid">

        <p class="paragraph">
            At the Davis Farmers Market Citrus Circuits booth, visitors can talk with 1678 students, get first-hand
            questions answered, and even play with a demonstration robot. Every Saturday from 7:00 a.m. to 1:00 p.m.
            anyone is welcome to stop by and learn about the team, as well as the Davis Youth Robotics programs, while
            enjoying the Farmers Market. Kids and adults alike enjoy operating the display robot and working through the
            challenges we set.
        </p>

        <hr class="solid">

        <router-link :to="{path: '/team-overview/outreach-programs'}">
            <button class="return"/>
        </router-link>
    </div>
</template>

<style scoped>
    .farmers-market {
        font-size: medium;
    }
    
    .section-header {
        text-align: center;
        margin: auto;
        padding: 2%;
    }

    .paragraph {
        color: #242424;
        font-family: Helvetica;
        background-color: white;
        font-size: 20px;
        margin-bottom: 0%;
    }

    .image {
        margin: auto;
        width: 80%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        margin-bottom: 0%;
        padding: 2%;
    }

    .logo {
        margin: auto;
        margin-top: 10%;
        size: 45%;
        display: flex;
        flex-direction: column;
        justify-content: center;
    }

    hr.solid {
        border-top: 0.1em solid;
        width: 54.5em;
        margin-top: 3em;
        margin-bottom: 2em;
    }
</style>
