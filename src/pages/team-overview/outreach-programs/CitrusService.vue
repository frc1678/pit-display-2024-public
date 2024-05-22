<script setup lang="ts">
    import { trackActions } from '../../../components/InteractionTracker.ts';
    trackActions('outreachPageSwitch','CitrusService');
</script>

<template>
    <div class="citrus-service">
        <h1>Citrus Service</h1>
        <hr class="solid">

        <div class="row">
            <div class="column">
                <img src="/images/outreach_programs/citrus-service-1.jpg" alt="Citrus Service" className="image-left" />
            </div>

            <div class="column">
                <p className="margin-right">
                    Citrus Service is an outreach program started in 2017 with the purpose of aiding other teams during
                    competition by providing mechanical, electrical and programming support, as well as lending tools
                    and providing small parts. Citrus Service is composed of six dedicated Citrus Circuits members who
                    are selected through a nomination and interview process, and who receive training on how to
                    troubleshoot robots and work with other teams.
                </p>
            </div>
        </div>

        <div class="row">
            <div class="column">
                <p className="margin-left">
                    During competitions, Citrus Service members scout the pits and actively help teams who need
                    assistance, as well as staffing a Citrus Service cart with tools that can be loaned out. Through
                    2023, Citrus Service was active at 21 competitions, including regionals and Championships, and has
                    worked with over 400 teams.
                </p>
            </div>

            <div class="column">
                <img src="/images/outreach_programs/citrus-service-2.jpg" alt="Citrus Service" className="image-right" />
            </div>
        </div>
        
        <hr class="solid">
        <br>
        <br>
        
        <router-link :to="{path: '/team-overview/outreach-programs'}">
            <button class="return"/>
        </router-link>
    </div>
</template>

<style scoped>
    .citrus-service {
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
</style>
