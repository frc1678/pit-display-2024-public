<script setup lang="ts">
    import { trackActions } from '../../../components/InteractionTracker.ts';
    trackActions('robotDetailsPageSwitch','2016');
</script>

<template>
    <div className="robot-history-2016">
        <h1>2016: ADRIAN</h1>
        <hr class="header">
        <img src="/images/robot_history_images/2016 robo.jpeg" alt="ADRIAN" class="center" />
        <hr class="divider">

        <h2>Scoring</h2>
        <hr class="scoring">
        <p>
            Adrian has a complex utility arm to score into the high tower. The boulder intake consisted of a front
            roller and belting, in addition to a set of mecanum wheels to funnel the ball to the center of the robot.
            After the ball was acquired, the arm lifted into shooting position. The shooting wheels on Adrian spun up to
            a speed of 6000 RPM in order to shoot the boulder accurately. The robot used its vision guidance system to
            locate the reflective tape on the opposing team's, tower in order to reliably line up each slot. Adrian was
            also one of the few robots this season able to run a two-ball autonomous routine under the low bar. The
            visioning system allowed Adrian to acquire the tower target and shoot accurately in autonomous mode. Adrian
            also used an elevator on the utility arm to quickly scale the tower and lift the robot above the low goal.
        </p>

        <h2>Drivetrain</h2>
        <hr class="drivetrain">
        <p>
            With 10 wheels, three pneumatic and two colon wheels on each side, the robot was able to cross all of the
            defenses without being hung up. Each side was driven by a two CIM, two-speed gearbox.
        </p>

        <h2>Operating Interface</h2>
        <hr class="operating-interface">
        <p>
            Adrian was operated with a wheel joystick for driving, a regular joystick for speed control, and an Xbox
            gamepad to control the preset positions the robot would move to, including shooting positions, boulder
            intake positions, and climbing.
        </p>

        <h2>Electrical</h2>
        <hr class="electrical">
        <p>
            Adrian featured not only eight Victor SP speed controllers but also an additional Talon SRX speed
            controller, which increased driving and maneuvering sensitivity. Custom circuits provide power to sensors,
            as well as converting the signals back down to five volts, and a roboRIO from FIRST® makes downloading
            programs and real-time processing a far quicker operation. This is assisted also by the power distribution
            pane, which is designed to work with roboRIO FIRST® Robotics Competition control system.
        </p>

        <hr class="divider">

        <h2>Achievements</h2>
        <div class="row">
            <div class="column">
                <h3>FIRST Championship</h3>
                <h4>
                    Hopper Division Winner<br>
                    <hr class="solid">
                    <br>Championship Semi-Finalist
                </h4>
            </div>

            <div class="column">
                <h3>Sacramento Regional</h3>
                <h4>
                    Regional Winners<br>
                    <hr class="solid">
                    <br>Woodie Flowers Finalist Award<br>(Michael Corsetto)<br>
                    <hr class="solid">
                    <br>Excellence in Engineering Award<br>
                    <h5>sponsored by</h5>
                    <br>
                    <h4>Delphi</h4>
                </h4>
            </div>
        </div>

        <div class="row">
            <div class="column">
                <h3>Central Valley Regional</h3>
                <h4>
                    Regional Winner<br>
                    <hr class="solid">
                    <br>Quality Award<br>
                    <h5>sponsored by</h5>
                    <br>
                    <h4>Motorola Solutions Foundation</h4>
                </h4>
            </div>

            <div class="column">
                <h3>Silicon Valley Regional</h3>
                <h4>
                    Regional Winner<br>
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
    .robot-history-2016 {
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