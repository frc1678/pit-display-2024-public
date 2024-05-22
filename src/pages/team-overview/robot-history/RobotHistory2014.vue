<script setup lang="ts">
    import { trackActions } from '../../../components/InteractionTracker.ts';
    trackActions('robotDetailsPageSwitch','2014');
</script>

<template>
    <div className="robot-history-2014">
        <h1>2014: BECA</h1>
        <hr class="header">
        <img src="/images/robot_history_images/2014 robo.jpeg" alt="BECA" class="center" />
        <br>
        <hr class="divider">

        <h2>Scoring</h2>
        <hr class="scoring">
        <p>
            Beca's finalized scoring mechanism consisted of a catapult powered by about 10 feet of speargun tubing. A
            spiral (drop-off) cam assisted the catapult crank-back, and a magnet on the cam coupled with a Hall effect
            sensor stopped the cam in the correct primed position. A nylon strap attached the top of the catapult to a
            sliding sled in the catapult frame determined shot power. Hard stops in the frame were deployed with
            pneumatic cylinders to stop the sled midway through its travel providing a lower powered "short shot."
            Previous versions of Beca's catapult used surgical tubing and the Hall effect sensor at the top of the
            catapult.
        </p>

        <h2>Drivetrain</h2>
        <hr class="drivetrain">
        <p>
            Beca featured a custom machined "West Coast" drive powered by 6 CIM motors connected to 2 Vex Pro ball
            shifter gearboxes. The top speed (free speed) of the drivetrain was approximately 22 feet/second, which made
            it the fastest Citrus Circuits robot to date and one of the fastest 2014 FRC robots.
        </p>

        <h2>Operating Interface</h2>
        <hr class="operating-interface">
        <p>
            The robot was controlled by two joystick controls and a gamepad. The drive system uses a simple tank drive,
            meaning that one joystick controls one side of the drive train. The driver also controls the robot's
            shooting mechanism. The manipulator controls the intake and settling mechanisms.
        </p>

        <h2>Electrical</h2>
        <hr class="electrical">
        <p>
            Beca's control system used Wi-Fi communications and a National Instruments cRIO, implemented by FIRST in
            2009. Motors were controlled by Talon speed controllers and pneumatics by Vex Pro Spike relays and
            solenoids. Encoders on the drivetrain were used to move accurately in autonomous mode. During the
            competition season, a camera detected the "hot" goal and helped the team earn extra points at the beginning
            of each match. We used C++ in the Wind River Workbench for robot code and Java in NetBeans for vision
            processing. We then used Network Tables to communicate information to the robot.
        </p>

        <hr class="divider">

        <h2>Achievements</h2>
        <div class="row">
            <div class="column">
                <h3>FIRST Championship</h3>
                <h4>
                    Championship Finalist<br>
                    <hr class="solid">
                    <br>Newton Division Winner<br>
                    <hr class="solid">
                    <br>Gracious Professionalism Award
                </h4>
            </div>

            <div class="column">
                <h3>Silicon Valley Regional</h3>
                <h4>
                    Regional Finalist<br>
                    <hr class="solid">
                    <br>Industrial Design Award<br>
                    <h5>sponsored by</h5>
                    <br>
                    <h4>General Motors</h4>
                </h4>
            </div>
        </div>

        <div class="row">
            <div class="column">
                <h3>Sacramento Regional</h3>
                <h4>
                    Regional Winner<br>
                    <hr class="solid">
                    <br>Excellence in Engineering Award<br>
                    <h5>sponsored by</h5>
                    <br>
                    <h4>Delphi</h4>
                </h4>
            </div>

            <div class="column">
                <h3>Inland Empire Regional</h3>
                <h4>
                    Regional Winners<br>
                    <hr class="solid">
                    <br>Creativity Award<br>
                    <h5>sponsored by</h5>
                    <br>
                    <h4>Xerox</h4>
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
    .robot-history-2014 {
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