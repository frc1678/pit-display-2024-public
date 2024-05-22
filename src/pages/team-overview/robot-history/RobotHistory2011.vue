<script setup lang="ts">
    import { trackActions } from '../../../components/InteractionTracker.ts';
    trackActions('robotDetailsPageSwitch', '2011');
</script>

<template>
    <div className="robot-history-2011">
        <h1>2011: OPTIMUS LIME</h1>
        <hr class="header">
        <img src="/images/robot_history_images/2011-robo-pic.jpg" class="center" />
        <br>
        <hr class="divider">

        <h2>Electrical</h2>
        <hr class="electrical">
        <p>
            Optimus Limes’ control system was built on a platform utilizing wi-fi communications and a National
            Instruments Compact Rio system, Jaguar and Victors (motor speed controllers), Vex Pro spike relays (for the
            on-board pneumatic compressor), and solenoid relays for the pneumatic devices. Optimus Limes’ software could
            simultaneously monitor sensors used for tube control, which always kept the tube in our possession, and line
            tracking, which allowed the robot to plot its route to the tube rack. The software also had such features as
            preset values for the rack peg heights which allowed the driver to score faster.
        </p>

        <h2>Operating Interface</h2>
        <hr class="operating-interface">
        <p>
            The Operator Interface — basically video game controllers — allowed two operators to control the robot at
            once. One driver controlled the motion of the robot, while the other controlled the tube handler.
        </p>

        <hr class="divider">
        
        <h2>Achievements</h2>
        <h3>Sacramento Regional</h3>
        <h4>
            Regional Winners
            <br>
            <hr class="solid">
            <br>
            Quality Award<br>
            <h5>sponsored by</h5>
            <br>
            <h4>Motorola</h4>
        </h4>
        
        <router-link :to="{path: '/team-overview/robot-history'}">
            <button class="return"/>
        </router-link>
        <br>
    </div>
</template>

<style scoped>
    .robot-history-2011 {
        margin-left: 5%;
        margin-right: 5%;
        font-size: medium;
    }

    .robot-history-2011 {
        margin-left: 5%;
        margin-right: 5%;
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
</style>
