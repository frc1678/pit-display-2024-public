<script setup lang="ts">
    import { trackActions } from '../../../components/InteractionTracker.ts';
    trackActions('robotDetailsPageSwitch','2010');
</script>

<template>
    <div class="robot-history-2010">
        <h1>2010: ORANGE CRUSH</h1>
        <hr class="header">
        <img src="/images/robot_history_images/2010-robo-pic.jpg" class="center" />
        <br>
        <hr class="divider">

        <h2>Drivetrain</h2>
        <hr class="drivetrain">
        <p>
            Orange Crush had a eight-wheel drive train designed specifically for Breakaway. It had four wheels on each
            side with two in the center right next to each other and lowered slightly for better turning. Eight wheels
            were used instead of six so that the robot could climb over a 12-inch bump in the field.
        </p>

        <h2>Ball-handling System</h2>
        <hr class="ball">
        <p>
            Orange Crush was capable of controlling a ball without physically holding the ball. This was accomplished by
            using a piece of steel rod covered in traction material that put back spin on the soccer ball. It scored by
            kicking the ball across the field into the goal. The kicker was located on the bottom of the robot, behind
            the rod. The kicker was built from aluminum, and a winch pulled it back before it released, which launched
            the kicker forward into ball, sending the ball flying upwards of 60 feet.
        </p>

        <h2>Arm</h2>
        <hr class="arm">
        <p>
            The arm was designed to be used in the last part of the match. The winch holding it in place would release,
            allowing the arm to extend, at which point we would then line up with a horizontal bar and engage the winch
            to lift Orange Crush off the ground, scoring two bonus points.
        </p>
        <br>

        <h2>Operating Interface</h2>
        <hr class="operating-interface">
        <p>
            Orange Crush was driven using two joysticks, one for each side of the drive train (referred to as ‘tank
            drive’). The kicker and arm was controlled by a second driver on a third joystick.
        </p>
        <br>
        
        <hr class="divider">
        
        <router-link :to="{path: '/team-overview/robot-history'}">
            <button class="return"/>
        </router-link>
    </div>
</template>

<style scoped>
    .robot-history-2010 {
        margin-left: 5%;
        margin-right: 5%;
        font-size: medium;
    }

    .header {
        font-family: "Bebas Neue";
        text-align: center;
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
    
    h5 {
        font-size: 30px;
        font-weight: normal;
        font-family: Helvetica;
        text-align: center;
        margin-top: -1em;
        margin-bottom: -2.45em;
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
</style>
