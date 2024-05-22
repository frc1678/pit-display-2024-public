<script setup lang="ts">
    import { trackActions } from '../../../components/InteractionTracker.ts';
    trackActions('robotDetailsPageSwitch','2012');
</script>

<template>
    <div className="robot-history-2012">
        <h1>2012: THE JUICER</h1>
        <hr class="header">
        <img src="/images/robot_history_images/2012 robo.jpeg" alt="THE JUICER" class="center" />
        <br>
        <hr class="divider">

        <h2>Scoring</h2>
        <hr class="scoring">
        <p>
            The Juicer's scoring mechanism involved a track that led up to two shooter wheels. The shooter wheels were
            covered in a high traction rubber, which spun at 12,000 RPM. Due to our fast spinning wheels, our high
            compression upon the ball's exit, and the large amount of backspin applied to the basketballs, our shooting
            mechanism was very accurate.
        </p>

        <h2>Drivetrain</h2>
        <hr class="drivetrain">
        <p>
            The Juicer has a six-wheel drop center tank drive (for ease while turning) powered by four CIM motors and
            two gearboxes.
        </p>

        <h2>Operating Interface</h2>
        <hr class="operating-interface">
        <p>
            The Juicer was controlled by three joystick controllers: two for the driver, and one for the manipulator,
            who controlled the shooting mechanism. The driver used tank drive, meaning that one joystick controls one
            side of the drive train. The manipulator pushed a button to set up the system for shooting, another button
            to start the high speed shooter wheels, and then finally a trigger to shoot, with very little effort
            required on the part of the manipulator as the robot monitored the shooter speed and the location of the
            balls within the robot.
        </p>

        <h2>Electrical</h2>
        <hr class="electrical">
        <p>
            The Juicer's control system used WI-FI communications and a National Instruments cRIO, implemented by FIRST
            in 2009. Motors are controlled by Victor speed controllers, pneumatics are controlled by Vex Pro Spike
            relays and solenoids. Sensors included a limit switch for detecting the location of balls within the
            shooting mechanism and encoders for the drive train.
        </p>

        <hr class="divider">

        <h2>Achievements</h2>
        <h3>Sacramento Regional</h3>
        <h4>
            Regional Winners
            <br>
            <hr class="solid">
            <br>
            Industrial Design Award
            <br>
            <h5>sponsored by</h5>
            <br>
            <h4>General Motors</h4>
        </h4>

        <hr class="divider">
        
        <router-link :to="{path: '/team-overview/robot-history'}">
            <button class="return"/>
        </router-link>
    </div>
</template>

<style scoped>
    .robot-history-2012 {
        margin-left: 5%;
        margin-right: 5%;
        font-size: medium;
    }

    .robot-history-2012 {
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