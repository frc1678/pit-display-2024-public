<script setup lang="ts">
    import { trackActions } from '../../../components/InteractionTracker.ts';
    trackActions('outreachPageSwitch','RoboCamps');
</script>

<template>
    <div class="robocamps">
        <img src="/images/outreach_programs/robocamps-logo.png" alt="Robocamps Logo" class="logo" />
        <h1 class="header">Robocamps</h1>
        <hr class="solid">
        
        <div class="row">
            <div class="column">
                <p class="margin-left">
                    In Robocamps, students discover and develop science, math, engineering and programming skills
                    through designing, building, and programming a robot. The week-long camp takes students through a
                    project-based challenge, culminating in a fun and interactive competition with peers where students
                    get to put their creations to the test.
                </p>
            </div>

            <div class="column">
                <img src="/images/outreach_programs/robocamps-1.jpeg" alt="Robocamps" class="image-right" />
            </div>
        </div>

        <div class="row">
            <div class="column">
                <img src="/images/outreach_programs/robocamps-2.jpeg" class="image-left" />
            </div>

            <div class="column">
                <p class="margin-right">
                    Our RoboCamps are for all youth ranging from kindergarten to eighth grade. We also host WISE (Women
                    in STEM Empowerment) camps exclusively for girls and non-binary kids, with an all-female camp staff
                    team. At camp, counselors experienced with the robot kits work one-on-one with students to help
                    their designing and programming processes. The program reaches over 250 students each summer and is
                    staffed by counselors from Citrus Circuits.
                </p>
            </div>
        </div>

        <div class="row">
            <div class="column">
                <p class="margin-left">
                    Our RoboCamps offer diverse and inclusive options geared towards all students with or without
                    experience. The Introductory/ Intermediate, Intermediate/Advanced, Seedling, WISE, and Programming
                    Skills camps all have different focuses based on experience and interest. We also provide Seedling
                    Camps for kindergarteners to third graders, who are provided with entry-level learning robots using
                    Sphero Indi.
                </p>
            </div>

            <div class="column">
                <img src="/images/outreach_programs/robocamps-3.jpg" class="image-right" />
            </div>
        </div>

        <div class="row">
            <div class="column">
                <img src="/images/outreach_programs/robocamps-4.jpg" class="image-left" />
            </div>
            
            <div class="column">
                <p class="margin-right">
                    With colored tiles and the Indi robot, the program explores imaginative, play-based learning by
                    teaching campers the basics of coding, problem-solving, and computational thinking skills. Our
                    programs extend to communities outside of our own to provide opportunities for disadvantaged youth.
                    Our RoboCamps have expanded to Dixon where we have collaborated with World Changers Academy to offer
                    a low-cost program for local youth.
                </p>
            </div>
        </div>

        <hr class="solid">
        <br>
        <br>
        <br>

        <router-link :to="{path: '/team-overview/outreach-programs'}">
            <button class="return"/>
        </router-link>
    </div>
</template>

<style scoped>
    .robocamps {
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
</style>
