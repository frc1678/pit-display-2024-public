<script setup lang="ts">
    import { trackActions } from '../../../components/InteractionTracker.ts';
    trackActions('robotDetailsPageSwitch','2017');
</script>

<template>
    <div className="robot-history-2017">
        <h1>2017: POMELO PUMMELER</h1>
        <hr class="header">
        <img src="/images/robot_history_images/2017 robo.jpeg" alt="POMELO PUMMELER" class="center" />
        <br>
        <hr class="divider">

        <h2>Scoring</h2>
        <hr class="scoring">
        <p>
            Our 2017 robot was equipped with a shooter and a ground intake mechanism. The around fuel intake could
            collect about 60 fuel pieces from the game field, and funnel them into the magazine for storage. Using a
            belt and roller system the fuel then fed from the magazine into the shooter mechanism. The shooter had two
            different flywheels that allow two streams of balls to be fired at once, giving the robot the ability to
            achieve up to 40 KFA In autonomous mode. There was a gear intake designed to intake gears from the ground. A
            pop-up roller combined with AndyMark compliant wheels trapped the gear to be scored on the airship lift.
        </p>

        <h2>Drivetrain</h2>
        <hr class="drivetrain">
        <p>
            The West Coast Drive used on the Pomelo Pummeler had two omni wheels in the front, and four colson wheels to
            provide traction in the middle and pack. There were four CM motors allowing the robot to hit a top speed of
            17.5 feet per second.
        </p>

        <h2>Operating Interface</h2>
        <hr class="operating-interface">
        <p>
            A wheel and vertical joystick made driving the Pomelo Pummeler easy by controlling the angle and speed of
            the robot respectively. The wheel allowed for tight turns to be executed, maneuvering the robot smoothly
            around defense, while the throttle joystick enabled the driver to easily score gears and shoot fuel. A small
            screen was also used by the drive team to view video streamed from a camera mounted above the ground ear
            mechanism. The feed showed gears that couldn't be seen by the drivers, making gear acquisition and scoring
            much easier.
        </p>

        <h2>Electrical</h2>
        <hr class="electrical">
        <p>
            Unique to 2017, the Pomelo Pummeler was equipped with an NVIDIA Jetsor TY1 mounted to an Orbitty carrier
            board. A green LED highlights the retroreflective tape that surrounds the front of the boiler. The Microsoft
            LifeCam 3000 mounted in front of the shooter tracked the lap and in green light that it reflects, and the
            Jetson TX1 inputs the camera feed into, custom vision processing software. This allowed the robot to
            automatically align and shoot during a match. Along with the camera, a signal LED strip was used to
            communicate different messages to the drive team: The LEDs signal different autonomous routines, gear
            acquisition and scoring, vision status, and more. The VRMs (voltage regulator modules) gave power to custom
            circuits and controllers.
        </p>

        <hr class="divider">

        <h2>Achievements</h2>
        <div class="row">
            <div class="column">
                <h3>FIRST Championship</h3>
                <h4>
                    Newton Division Winners<br>
                    <hr class="solid">
                    <br>Championship Finalists<br>
                    <h5>sponsored by</h5>
                    <br>
                    <h4>Rockwell Automation</h4>
                </h4>
            </div>

            <div class="column">
                <h3>Sacramento Regional</h3>
                <h4>
                    Regional Winners<br>
                    <hr class="solid">
                    <br>Innovation in Control Award<br>
                    <h5>sponsored by</h5>
                    <br>
                    <h4>Rockwell Automations</h4>
                </h4>
            </div>
        </div>

        <div class="row">
            <div class="column">
                <h3>Las Vegas Regional</h3>
                <h4>
                    Regional Winners<br>
                    <hr class="solid">
                    <br>Innovation in Control Award<br>
                    <h5>sponsored by</h5>
                    <br>
                    <h4>Rockwell Automation</h4>
                </h4>
            </div>

            <div class="column">
                <h3>Central Valley Regional</h3>
                <h4>
                    Regional Winners<br>
                    <hr class="solid">
                    <br>
                    Quality Award<br>
                    <hr class="solid">
                    <br>
                    <h5>sponsored by</h5>
                    <br>
                    <h4>Motorola Solutions Foundations</h4>
                </h4>
            </div>
        </div>

        <hr class="divider">
        
        <router-link :to="{path: '/team-overview/robot-history'}">
            <button class="return"/>
        </router-link>
    </div>
</template>

<style scoped>
    .robot-history-2017 {
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