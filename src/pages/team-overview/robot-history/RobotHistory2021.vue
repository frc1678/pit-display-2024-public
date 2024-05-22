<script setup lang="ts">
    import { trackActions } from '../../../components/InteractionTracker.ts';
    trackActions('robotDetailsPageSwitch','2021');
</script>

<template>
    <div className="robot-history-2021">
        <h1>2021: CLEMENTWINS</h1>
        <hr class="header">
        <img src="/images/robot_history_images/2021 robo.jpeg" alt="CLEMENTWINS" class="center" />
        <br>
        <hr class="divider">

        <h2>Clemen-Tiny</h2>
        <hr class="c-tiny">
        <p>
            Tiny featured a 12-falcon swerve drive packaged into a 17.5'x 17.5" frame. Two drive motors and one steering
            motor per module enabled the robot to quickly reach its top speed of 17 ft/sec. The bottom-loaded battery and
            flipped motors sat close to the ground, which lowered the robot's center of gravity to avoid tipping.
        </p>

        <h2>Clemen-Teeny</h2>
        <hr class="c-teeny">
        <p>
            Teeny featured a 17' x 17.75° FTC Treadrunner drivetrain modified to use eight falcons for maximum
            acceleration. Custom nitrile treads allowed Teeny to mainly gain traction at its top speed or 21 ft/sec.
        </p>

        <hr class="divider">

        <h2>Achievements</h2>
        <h3>Hydrogen Group - INFINITE RECHARGE At Home Challenge</h3>
        <h4>
            Skills Competition Winners<br>
            <hr class="solid">
            <br>Excellence in Engineering Award
        </h4>
        
        <hr class="divider">

        <router-link :to="{path: '/team-overview/robot-history'}">
            <button class="return"/>
        </router-link>
    </div>
</template>

<style scoped>
    .robot-history-2021 {
        margin-left: 5%;
        margin-right: 5%;
        font-size: medium;
    }

    .center {
        display: block;
        margin-left: auto;
        margin-right: auto;
        width: 80%;
    }

    h2 {
        color: #40d635;
        font-size: 90px;
        font-family: "Bebas Neue";
        text-align: center;
        margin-top: 0.5em;
        margin-bottom: -0.1em;
        letter-spacing: 0.03em;
    }

    h3 {
        font-size: 60px;
        font-family: "Bebas Neue";
        text-align: center;
        margin-bottom: -40px;
        margin-top: 1em;
    }

    h4 {
        font-size: 30px;
        font-weight: normal;
        font-family: Helvetica;
        text-align: center;
        margin-top: 2.05em;
    }
    
    hr.solid {
        border-top: 0.1em solid;
        width: 12em;
    }
</style>
