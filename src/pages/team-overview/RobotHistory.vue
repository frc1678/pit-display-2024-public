<script setup lang="ts">
    import { trackActions } from '../../components/InteractionTracker.ts';
    trackActions('pageSwitch','RobotHistory');
</script>

<template>
    <div className="robot-history">
        <h1 class="title-spacing">Robot History</h1>
        <hr class="solid">

        <h4 class="margin">
            This sections shows off all of our recent robots. Starting from our 2009 robot, "Lemon Squeeze", to our
            World Championship robot, "Lemon Drop", to our previous year's robot, "Tangerine Tumbler".
        </h4>

        <hr class="solid">
        <h2 class="header-text">Click below to learn more</h2>

        <div class="grid-container">
            <div class="grid-item">
                <router-link :to="{path: '/team-overview/robot-history/robot-history-2023'}">
                    <button>2023</button>
                    <img src="/images/robot_history_images/2023 robo.jpg" class="button" />
                </router-link>
            </div>

            <div class="grid-item">
                <router-link :to="{ path: '/team-overview/robot-history/robot-history-2022' }">
                    <button>2022</button>
                    <img src="/images/robot_history_images/2022 robo.jpeg" class="button" />
                </router-link>
            </div>

            <div class="grid-item">
                <router-link :to="{ path: '/team-overview/robot-history/robot-history-2021' }">
                    <button>2021</button>
                    <img src="/images/robot_history_images/2021 robo.jpeg" class="button" />
                </router-link>
            </div>
        </div>

        <div class="grid-container">
            <div class="grid-item">
                <router-link :to="{ path: '/team-overview/robot-history/robot-history-2020' }">
                    <button>2020</button>
                    <img src="/images/robot_history_images/2020 robo.jpeg" class="button" />
                </router-link>
            </div>

            <div class="grid-item">
                <router-link :to="{ path: '/team-overview/robot-history/robot-history-2019' }">
                    <button>2019</button>
                    <img src="/images/robot_history_images/2019 robo.jpeg" class="button" />
                </router-link>
            </div>

            <div class="grid-item">
                <router-link :to="{ path: '/team-overview/robot-history/robot-history-2018' }">
                    <button>2018</button>
                    <img src="/images/robot_history_images/2018 robo.jpeg" class="button" />
                </router-link>
            </div>
        </div>

        <div class="grid-container">
            <div class="grid-item">
                <router-link :to="{ path: '/team-overview/robot-history/robot-history-2017' }">
                    <button>2017</button>
                    <img src="/images/robot_history_images/2017 robo.jpeg" class="button" />
                </router-link>
            </div>

            <div class="grid-item">
                <router-link :to="{ path: '/team-overview/robot-history/robot-history-2016' }">
                    <button>2016</button>
                    <img src="/images/robot_history_images/2016 robo.jpeg" class="button" />
                </router-link>
            </div>

            <div class="grid-item">
                <router-link :to="{ path: '/team-overview/robot-history/robot-history-2015' }">
                    <button>2015</button>
                    <img src="/images/robot_history_images/2015 robo.jpeg" class="button" />
                </router-link>
            </div>
        </div>

        <div class="grid-container">
            <div class="grid-item">
                <router-link :to="{ path: '/team-overview/robot-history/robot-history-2014' }">
                    <button>2014</button>
                    <img src="/images/robot_history_images/2014 robo.jpeg" class="button" />
                </router-link>
            </div>

            <div class="grid-item">
                <router-link :to="{ path: '/team-overview/robot-history/robot-history-2013' }">
                    <button>2013</button>
                    <img src="/images/robot_history_images/2013 robo.jpeg" class="button" />
                </router-link>
            </div>

            <div class="grid-item">
                <router-link :to="{ path: '/team-overview/robot-history/robot-history-2012' }">
                    <button>2012</button>
                    <img src="/images/robot_history_images/2012 robo.jpeg" class="button" />
                </router-link>
            </div>
        </div>

        <div class="grid-container">
            <div class="grid-item">
                <router-link :to="{ path: '/team-overview/robot-history/robot-history-2011' }">
                    <button>2011</button>
                    <img src="/images/robot_history_images/2011-robo-pic.jpg" class="button" />
                </router-link>
            </div>

            <div class="grid-item">
                <router-link :to="{ path: '/team-overview/robot-history/robot-history-2010' }">
                    <button>2010</button>
                    <img src="/images/robot_history_images/2010-robo-pic.jpg" class="button" />
                </router-link>
            </div>

            <div class="grid-item">
                <router-link :to="{ path: '/team-overview/robot-history/robot-history-2009' }">
                    <button>2009</button>
                    <img src="/images/robot_history_images/2009-robo-pic.jpg" class="button" />
                </router-link>
            </div>
        </div>
    </div>
    
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
</template>

<style scoped>
    .center {
        display: block;
        margin-left: auto;
        margin-right: auto;
        width: 90%;
        margin-bottom: 5;
    }

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
        font-size: 75px;
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
    .grid-item:active{
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
        width: 55.5em;
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