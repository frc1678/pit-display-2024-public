<script setup lang="ts">
    import { trackActions } from '../../components/InteractionTracker.ts';
    trackActions('pageSwitch','OutreachPrograms');
</script>

<template>
    <div className="outreach-programs">
        <!--Title of the page-->
        <h1>Outreach Programs</h1>
        <hr class="solid">

        <!--text that describes outreach-->
        <h4 class="margin">
            Outreach is a significant way for Citrus Circuits to give back the the community around us. Our outreach is
            STEM-focused, intended to create new opportunities for various communities, inspire others, and educate them
            about STEM and robotics.
        </h4>
        <hr class="solid">

        <!--Header for the outreach programs buttons-->
        <h2 class="header-text">Click below to learn more</h2>

        <!--Buttons that direct to the different outreach pages-->
        <div class="grid-container">
            <div class="grid-item">
                <router-link :to="{ path: '/team-overview/outreach-programs/citrus-service' }">
                    <button>Citrus<br>Service</button>
                    <img src="/images/outreach_programs/citrus-service-1.jpg" class="button" />
                </router-link>
            </div>

            <div class="grid-item">
                <router-link :to="{ path: '/team-overview/outreach-programs/davis-youth-robotics' }">
                    <button>Davis Youth Robotics</button>
                    <img src="/images/outreach_programs/dyr-2.jpeg" class="button" />
                </router-link>
            </div>
            
            <div class="grid-item">
                <router-link :to="{ path: '/team-overview/outreach-programs/farmers-market' }">
                    <button>Farmers Market</button>
                    <img src="/images/outreach_programs/farmers-market.jpg" class="button" />
                </router-link>
            </div>
        </div>

        <div class="grid-container">
            <div class="grid-item">
                <router-link :to="{ path: '/team-overview/outreach-programs/fall-workshops' }">
                    <button>Fall<br>Workshops</button>
                    <img src="/images/outreach_programs/fall-workshops-2.jpeg" class="button" />
                </router-link>
            </div>

            <div class="grid-item">
                <router-link :to="{ path: '/team-overview/outreach-programs/shelter-finder-app' }">
                    <button>Shelter <br>Finder App</button>
                    <img src="/images/outreach_programs/shelter-finder.jpeg" class="button" />
                </router-link>
            </div>

            <div class="grid-item">
                <router-link :to="{ path: '/team-overview/outreach-programs/wise' }">
                    <button>WiSE</button>
                    <img src="/images/outreach_programs/wise-2.jpeg" class="button" />
                </router-link>
            </div>
        </div>

        <div class="grid-container">
            <div class="grid-item">
                <router-link :to="{ path: '/team-overview/outreach-programs/robocamps' }">
                    <button>Robocamps</button>
                    <img src="/images/outreach_programs/robocamps-1.jpeg" class="button" />
                </router-link>
            </div>

            <div class="grid-item">
                <router-link :to="{ path: '/team-overview/outreach-programs/the-compass-alliance' }">
                    <button>Compass Alliance</button>
                    <img src="/images/outreach_programs/compass-alliance.jpeg" class="button" />
                </router-link>
            </div>

            <div class="grid-item">
                <router-link :to="{ path: '/team-overview/outreach-programs/citrus-for-change' }">
                    <button>Citrus For Change</button>
                    <img src="/images/outreach_programs/citrus-for-change-group-photo.jpg" class="button" />
                </router-link>
            </div>
        </div>
    </div>

    <br>
    <br>
    <br>
    <br>
</template>

<style scoped>
    /*.button style is for the images of the buttons*/
    .button {
        height: 27.65vw;
        width: 27.65vw;
        flex-shrink: 0;
        background-position: center;
        background-size: cover;
        background-repeat: no-repeat;
        background-color: transparent;
        border: none;
        transition: transform 0.06s;
        object-fit: cover;
        display: block;
    }

    /*Used for the text for the buttons*/
    button {
        letter-spacing: 0.04em;
        height: 27.65vw;
        width: 27.65vw;
        flex-shrink: 0;
        background-position: center;
        background-size: cover;
        background-repeat: no-repeat;
        background-color: transparent;
        border: none;
        transition: transform 0.06s;
        object-fit: cover;
        display: block;
        position: absolute;
        color: white;
        font-family: "Bebas Neue";
        overflow-wrap: break-word;
        font-weight: bold;
        font-size: 50px;
        text-shadow: 2px 2px 20px black;
    }

    /*The grid container*/
    .grid-container {
        display: grid;
        display: inline-grid;
        width: 92.5%;
        padding-top: 2em;
        padding-left: 3.5em;
        padding-right: 3.5em;
        grid-template-columns: 1fr 1fr 1fr;
    }

    /*When the items are clicked, makes the item's size increase*/
    .grid-item:active {
        z-index: 1;
        transform: scale(1.1);
    }

    /*The style for the items of the grid container*/
    .grid-item {
        transition: transform 0.06s;
        position: relative;
        text-align: center;
        grid-row-start: 1;
        grid-row-end: 3;
    }

    hr.solid {
        border-top: 0.1em solid;
        width: 57.5em;
        margin-bottom: 4em;
        margin-top: 4em;
    }

    .margin {
        margin-top: -0.35em;
        margin-bottom: 0.05em;
    }
    
    .header-text {
        margin-top: -0.35em;
        margin-bottom: 0.05em;
        font-size: 4.5em;
    }
</style>