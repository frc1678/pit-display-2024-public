<script setup lang="ts">
    import { trackActions } from '../../../components/InteractionTracker.ts';
    trackActions('outreachPageSwitch','FallWorkshops');
</script>

<template>
    <div class="fall-workshops">
        <img src="/images/outreach_programs/fall-workshops-logo.png" alt="Fall Workshops Logo" class="logo" />
        <div>
            <h1 className="header">Fall Workshops</h1>
            <hr class="divider">
            <img src="/images/outreach_programs/fall-workshops-2.jpeg" alt="Fall Workshops" class="image"/>
            <hr class="divider">

            <p class="paragraph">
                1678 hosts an annual Fall Workshops series at the offseason competition, Capital City Classic. 
                Designed to educate other teams about software and hardware skills, the workshops cover a large 
                range of topics, from Impact Award, Outreach, to Strategic Design. Both mentors and students 
                present on the topics. This enables 1678 members to practice public speaking and presentation 
                skills while educating other teams and sharing our knowledge and resources. 
                These videos are available on our Youtube channel.
            </p>

            <hr class="divider"> 
            <br>
            <br>
            <br>  
        </div>

        <router-link :to="{path: '/team-overview/outreach-programs'}">
            <button class="return"/>
        </router-link>
    </div>
</template>

<style scoped>
    .fall-workshops {
        margin-left: 5%;
        margin-right: 5%;
        font-size: medium;
    }
    
    .image {
        vertical-align: baseline;
        width: 10%;
        display: flex;
        flex-direction: column;
        justify-content: center;
    }

    .image {
        width: 92.5%;
        margin: auto;
        padding: 3%;
    }

    .paragraph {
        font-family: Helvetica;
        font-size: 20px;
        margin-left:  2.5%;
        margin-right: 2.5%;
    }

    .logo {
        margin: auto;
        margin-top: 10%;
        size: 45%; 
        width: 15%;
        display: flex;
        flex-direction: column;
        justify-content: center;
    }

    .header {
        margin: auto;
        padding: 3%;
    }

    hr.divider {
        border-top: 0.1em solid;
        width: 57em;
        margin-left:2em;
        margin-top: 2.5em;
        margin-bottom: 1em;
    }
</style>
