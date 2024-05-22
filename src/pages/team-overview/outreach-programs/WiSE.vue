<script setup lang="ts">
    import { trackActions } from '../../../components/InteractionTracker.ts';
    trackActions('outreachPageSwitch','WiSE');
</script>

<template>
    <div class="wise">
        <img src="/images/outreach_programs/wise-logo.png" alt="WISE Logo" class="logo" />
        <h1 class="header">Women In STEM Empowerment</h1>
        <hr class="solid">
        <div class="row">
            <div class="column">
                <p class="margin-left">
                    In past years, team 1678 has supported Diversity in STEM with seminars presented by invited STEM
                    professionals of various backgrounds to share their experiences in STEM with the team. Through this
                    experience, our members have the opportunity to broaden their perspectives and appreciate diversity
                    in STEM. In 2018, Citrus Circuits hosted the first event of a new Diversity in STEM program now
                    known as Women in STEM Empowerment (WISE).
                </p>
            </div>

            <div class="column">
                <img src="/images/outreach_programs/wise-2.jpeg" alt="Citrus student showing girls robot" class="image-right" />
            </div>
        </div>

        <div class="row">
            <div class="column">
                <img src="/images/outreach_programs/1.12-Python-Workshop-8.jpg" class="image-left" />
            </div>

            <div class="column">
                <p class="margin-right">
                    Held in partnership with the Yolo County Library, WISE creates new STEM possibilities for young
                    girls in our area. These free events attract over 60 girls each month to participate in various
                    STEM-learning activities, such as creating acid-base reactions or erupting lemon volcanoes.WISE is
                    run by an all-female or nonbinary staff from Citrus Circuits who serve as role models who empower
                    girls in our community to explore the world of STEM. We have also held WISE events in our
                    neighboring communities of Dixon and Fairfield.
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
    .wise {
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
        width: 57.55em;
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
