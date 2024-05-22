<script setup lang="ts">
    import { trackActions } from '../../../components/InteractionTracker.ts';
    trackActions('robotDetailsPageSwitch','2019');
</script>

<template>
    <div className="robot-history-2019">
        <h1>2019: BUZZ LIME-YEAR</h1>
        <hr class="header">
        <img src="/images/robot_history_images/2019 robo.jpeg" alt="BUZZ LIME-YEAR" class="center" />
        <br>
        <hr class="divider">

        <h2>Scoring</h2>
        <hr class="scoring">
        <p>
            Buzz Lime-Year has a multiple part intake system, which includes a Hatch panel intake, a Cargo Intake, and
            an elevator. Our Human Player Hatch Intake is designed with an arrowhead shape to quickly pierce through the
            center of the hatch when laced in the Human Player salon. Two double acting pneumatic cinders trigger
            outward to hold the hatch in place during transport, then release to score. Our Cargo Intake is designed to
            quickly gain possession of the cargo with the touch-it, own-it design concept, making this mechanism highly
            reliable. Two proximity sensors send a signal to our driveteam when cargo is intaked. Our elevator allows
            for our cargo and Human Player hatch intakes to pass through it, enabling us to score from either side of
            the robot.
        </p>

        <h2>Drivetrain</h2>
        <hr class="drivetrain">
        <p>
            Our drivetrain is a 6-wheeled system with a 3-MiniCIM gearbox on each side, designed to reach a maximum
            speed of 12 feet per second. Omni-directional wheels on each end maximize our robot's turning capabilities.
            Many electrical components have 3D-printed mounts, including a HoboRIO-PDP combination mount. and pneumatic
            manifold-PCM combination mount that creates more space for mechanisms on the bellypan.
        </p>

        <h2>Operating Interface</h2>
        <hr class="operating-interface">
        <p>
            The robot is driven with a wheel and vertical joystick. The wheel controls the angle of the robot's drive
            base and point turns, while the joystick enables the driver to place game objects on both the rocket and
            cargo ship with precision. The wheel enables the robot to achieve tight turns while also maneuvering
            smoothly around defense. The hatch and cargo intakes, elevator, and climbing system are controlled by an
            Xbox 360 game controller. The drive team used to see video from cameras mounted on the front of the robot.
        </p>

        <h2>Electrical</h2>
        <hr class="electrical">
        <p>
            Buzz Lime-Year was driven with a wheel and vertical joystick. The wheel controls the angle of the robot's
            drive base and point turns, while the joystick enables the driver to place game objects on both the rocket
            and cargo ship with precision. The wheel enables the robot to achieve tight turns while also maneuvering
            smoothly around defense. The hatch and cargo intakes, elevator, and climbing system are controlled by an
            Xbox 360 game controller. The drive team used to see video from cameras mounted on the front of the robot.
            The automatic vision processing system made game element acquisition and placement much easier.
        </p>

        <hr class="divider">

        <h2>Achievements</h2>
        <div class="row">
            <div class="column">
                <h3>FIRST Championship</h3>
                <h4>
                    Carver Division Winners<br>
                    <hr class="solid">
                    <br>Entrepreneurship Award<br>
                    <h5>sponsored by</h5>
                    <br>
                    <h4>Kleiner, Porkins, Caulfeld, and Byers</h4>
                </h4>
            </div>

            <div class="column">
                <h3>Central Valley Regional</h3>
                <h4>
                    Regional Winners<br>
                    <hr class="solid">
                    <br>Chairman's Award
                </h4>
            </div>
        </div>

        <div class="row">
            <div class="column">
                <h3>Sacramento Regional</h3>
                <h4>
                    Regional Winners<br>
                    <hr class="solid">
                    <br>Industrial Design Award<br>
                    <h5>sponsored by</h5>
                    <br>
                    <h4>General Motors</h4>
                </h4>
            </div>

            <div class="column">
                <h3>Aerospace Valley Regional</h3>
                <h4>
                    Regional Winners<br>
                    <hr class="solid">
                    <br>Excellence in Engineering Award<br>
                    <h5>sponsored by</h5>
                    <br>
                    <h4>Delphi</h4>
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
    .robot-history-2019 {
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
