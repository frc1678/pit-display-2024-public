<script setup lang="ts">
    import { trackActions } from '../../../components/InteractionTracker.ts';
    trackActions('outreachPageSwitch','DavisYouthRobotics');
</script>

<template>
    <div class="davis-youth-robotics">
        <img src="/images/outreach_programs/dyr-logo.png" alt="Davis Youth Robotics Logo" class="logo" />
        <h1 class="header">Davis Youth Robotics</h1>
        <hr class="solid">

        <div class="row">
            <div class="column">
                <img src="/images/outreach_programs/dyr-1.jpeg" alt="Davis Youth Robotics" class="image-left" />
            </div>

            <div class="column">
                <p class="margin-right">
                    Davis Youth Robotics (DYR) organizes various robotics programs aimed at students ages 8 to 14.
                    Students collaborate in teams to design and engineer a robot, then challenge these skills through
                    robot competitions with other teams. The DYR League program teaches students skills like teamwork,
                    programming, communication, and engineering. Parent coaches run DYR teams, with technical and
                    skill-based support from Citrus Circuits student mentors.
                </p>
            </div>
        </div>

        <div class="row">
            <div class="column">
                <p class="margin-left">
                    DYR School Programs are geared for elementary students that don’t have access to robotics or the
                    parental support to participate in the DYR League program. The School Programs provide the
                    opportunity for all students to participate in robotics for free at their school. This after-school
                    program is operated throughout the school year and members of Citrus Circuits volunteer as student
                    mentors to run the program. All of the school programs have the opportunity to participate together
                    in an end-of-the-year competition.
                </p>
            </div>

            <div class="column">
                <img src="/images/outreach_programs/dyr-2.jpeg" alt="Davis Youth Robotics" class="image-right" />
            </div>
        </div>

        <hr class="solid">

        <router-link :to="{path: '/team-overview/outreach-programs'}">
            <button class="return"/>
        </router-link>
    </div>
</template>

<style scoped>
    .davis-youth-robotics {
        margin-left: 5%;
        margin-right: 5%;
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
        width: 57.25em;
        margin-left: 1.6em;
        margin-top: 3em;
        margin-bottom: 2em;
    }

    .logo {
        margin: auto;
        margin-top: 15%;
        size: 35%;
        width: 30%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        margin-bottom: -11em;
        padding-top: 1%;
        padding-bottom: 1%;
    }

    @font-face {
        font-family: "Lemon Milk Regular";
        src: url("/public/fonts/LEMONMILK-Regular.otf") format("opentype");
        font-weight: normal;
        text-align: center;
    }
</style>
