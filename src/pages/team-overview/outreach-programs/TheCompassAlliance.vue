<script setup lang="ts">
    import { trackActions } from '../../../components/InteractionTracker.ts';
    trackActions('outreachPageSwitch', 'TheCompassAlliance');
</script>

<template>
    <div className="the-compass-alliance">
        <img src="/images/outreach_programs/compass-alliance-logo.png" className="logo" style="width: 30%" />
        <h1 class="header">The Compass Alliance</h1>
        <hr class="solid">
        <img src="/images/outreach_programs/compass-alliance.jpeg" class="image" name="top" />
        <hr class="solid">
        
        <p className="paragraph">
            The Compass Alliance (TCA) is a collection of established teams working together to provide and create
            resources for new and inexperienced FRC teams, Citrus Circuits is one of the founding members of The Compass
            Alliance.
        </p>

        <p className="paragraph">
            The international organization supports rookie teams by providing resources to become successful and
            impactful in their communities. Recently, it implemented the Quiet Rooms that are stationed at official FRC
            events for students to de-stress. On the website, organized “pathways” lead rookie teams to all the
            essential information and techniques they need for starting and running an FRC team. The website is
            translated into Mandarin, Hebrew, and Spanish for prospective teams around the world.
        </p>

        <hr class="solid">
        <h2>Go to www.thecompassalliance.org to learn more about the initiative or to start your pathway journey.</h2>

        <div>
            <img src="/images/outreach_programs/compass-alliance-qr.png" className="qr" />
            <br>
            <br>
        </div>

        <hr class="solid">
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>

        <router-link :to="{path: '/team-overview/outreach-programs'}">
            <button class="return"/>
        </router-link>
    </div>
</template>

<style scoped>
    .the-compass-alliance {
        margin-left: 5%;
        margin-right: 5%;
        font-size: medium;
    }
    
    .section-header {
        text-align: center;
    }

    .description {
        text-align: center;
    }

    .paragraph {
        color: #242424;
        font-family: Helvetica;
        background-color: white;
        padding: 20px;
        margin-left: 0.5em;
        margin-right: 0em;
        font-size: 20px;
    }

    .header {
        font-family: "Bebas Neue";
        text-align: center;
    }

    .center {
        margin: auto;
        padding-left: inherit;
        padding: 50px;
        width: 80%;
        vertical-align: baseline;
    }

    .image {
        margin-left: -1.2em;
        padding-left: inherit;
        padding: 50px;
        vertical-align: baseline;
        width: 94%;
    }
    
    h1 {
        color: #40d635;
        font-family: "Bebas Neue";
        text-align: center;
        margin-bottom: 0em;
        font-size: 100px;
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

    .logo {
        width: 40%;
        margin-left: 22.5em;
        margin-top: 7em;
        padding-right: 0.5%;
        margin-bottom: -11em;
        padding-top: 1%;
        padding-bottom: 1%;
        vertical-align: middle;
    }

    .qr {
        margin: auto;
        padding-top: 3em;
        padding-left: 22.5em;
        vertical-align: baseline;
        width: 30%;
    }

    h2 {
        color: #40d635;
        font-size: 40px;
        font-family: "Bebas Neue";
        text-align: center;
        margin-top: 0.5em;
        margin-bottom: -0.5em;
        letter-spacing: 0.03em;
    }

    hr.solid {
        border-top: 0.1em solid;
        width: 57em;
        margin-left: 2em;
        margin-top: 2.5em;
        margin-bottom: 1em;
    }
</style>
