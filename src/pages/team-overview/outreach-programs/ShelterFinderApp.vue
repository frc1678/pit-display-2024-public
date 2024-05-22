<script setup lang="ts">
    import { trackActions } from '../../../components/InteractionTracker.ts';
    trackActions('outreachPageSwitch','ShelterFinderApp');
</script>

<template>
    <div class="shelter-finder-app">
        <img src="/images/outreach_programs/shelter-finder-logo.png" alt="Shelter Finder Logo" class="logo" />
        <h1><b>Shelter Finder App</b></h1>
        <hr class="solid">
        
        <div class="row">
            <div class="column">
                <p class="margin-left">
                    Our programming team worked with the Davis Police Department and local homeless shelters to develop
                    a homeless shelter app available on both computers and cell phones. The app connects police
                    departments with shelter organizations and is intended to aid police officers in finding the nearest
                    available beds for homeless individuals. Officers can search for the number of beds they want, and
                    find a shelter that fits their requirements.
                </p>
            </div>

            <div class="column">
                <img src="/images/outreach_programs/shelter-finder.jpeg" alt="Shelter Finder" className="image-right" />
            </div>
        </div>

        <div class="row">
            <div class="column">
                <img src="/images/outreach_programs/shelter-finder-map.jpg" alt="Shelter Finder" className="image-left" />
            </div>

            <div class="column">
                <p className="margin-right">
                    The app was released to the Davis Police Department and local homeless shelters in January of 2018;
                    so far, there have been 100 uses of the app and 24 police officers, 43 homeless shelter volunteers,
                    and 18 emergency room personnel trained to use it. The team plans to update the app continuously and
                    hopes to spread it to surrounding communities and other trained professionals.
                </p>
            </div>
        </div>

        <hr class="solid">

        <router-link :to="{path: '/team-overview/outreach-programs'}">
            <button class="return"/>
        </router-link>
    </div>
</template>

<style scoped>
    .shelter-finder-app {
        margin-left: 5%;
        margin-right: 5%;
    }
    
    .subteam-breakdown {
        margin-left: 5%;
        margin-right: 5%;
        font-size: medium;
    }

    img {
        margin-top: 45px;
    }

    .h3-right {
        color: #40d635;
        font-size: 40px;
        font-family: "Bebas Neue";
        font-weight: normal;
        letter-spacing: 0.003em;
        white-space: nowrap;
        margin-left: -0.25em;
    }

    .h3-left {
        color: #40d635;
        font-size: 40px;
        font-family: "Bebas Neue";
        font-weight: normal;
        letter-spacing: 0.003em;
        white-space: nowrap;
        margin-left: 0.8em;
    }

    .h3-center {
        margin-left: 0.6em;
        margin-top: 1em;
    }

    .image-left {
        display: block;
        margin-left: auto;
        margin-right: auto;
        width: 90%;
    }
    
    .image-right {
        display: block;
        margin-left: auto;
        margin-right: auto;
        width: 90%;
        margin-top: 1.25em;
    }

    .column {
        float: left;
        width: 50%;
    }

    .margin-left {
        margin-top: 0em;
        width: 22.32em;
        margin-left: 0.75em;
    }

    .margin-right {
        width: 22em;
        margin-top: 1.35em;
        margin-left: 0.5em;
    }

    .margin-center {
        margin-left: 0.5em;
    }
    
    .row:after {
        content: "";
        display: table;
        clear: both;
        margin-bottom: 0.5em;
    }

    hr.solid {
        border-top: 0.1em solid;
        width: 57.55em;
        margin-left: 1.6em;
        margin-top: 3em;
        margin-bottom: 2em;
    }

    .logo {
        width: 40%;
        margin-left: 18.5em;
        margin-top: 10em;
        padding-right: 0.5%;
        margin-bottom: -11em;
        padding-top: 1%;
        padding-bottom: 1%;
        vertical-align: middle;
    }
</style>
