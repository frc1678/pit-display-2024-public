<script setup lang="ts">
    import { trackActions } from '../../../components/InteractionTracker.ts';
    trackActions('robotDetailsPageSwitch','2013');
</script>

<template>
    <div className="robot-history-2013">
        <h1>2013: THE E-LIME-O-NATOR</h1>
        <hr class="header">
        <img src="/images/robot_history_images/2013 robo 1.jpeg" alt="THE E-LIME-O-NATOR" class="center" />
        <br>
        <hr class="divider">

        <h2>Scoring</h2>
        <hr class="scoring">
        <p>
            The E-lime-o-nator's final revision (as seen at 2013 World Championships) scoring mechanism used a partially
            curved shooter with a single, high-speed rubber wheel to accelerate Frisbee discs from the shooter. A grip
            on one side of the Frisbee combined with the fast spinning shooter wheel caused the Frisbee to spin upon
            exit for maximum accuracy. A previous incarnation of this system (as seen at Central Valley Regional 2013)
            had no curve and used two spinning Banebots wheels (at different speeds) to accelerate the Frisbee. This
            system was retired and switched for the system mentioned above which proved to be more consistent and
            reliable.
        </p>

        <h2>Drivetrain</h2>
        <hr class="drivetrain">
        <p>
            The E-lime-o-nator has machined six wheel drop center tank drive (for ease while turning) powered by four
            CIM motors connected to two Vex Pro ball shifter gearboxes. This drivetrain was the team's first to be CNC
            machined and features the improved speed and agility versus those of previous years.
        </p>

        <h2>Operating Interface</h2>
        <hr class="operating-interface">
        <p>
            The E-lime-o-nator was controlled by two joystick controllers and a gamepad. The drive system used a simple
            tank drive, meaning that one joystick controls one side of the drivetrain. The driver also controlled the
            majority of functions including running the intake, hopper, and shooter mechanisms. The manipulator (using a
            gamepad) controlled the intake and hopper pneumatics (essentially "folding" the robot to fit inside of its
            frame perimeter). They also controlled the hanging mechanism and stopped the shooter wheel (after the driver
            had finished shooting).
        </p>

        <h2>Electrical</h2>
        <hr class="electrical">
        <p>
            The E-lime-o-nator's controls system used Wi-Fi communications and a National Instruments cRIO, implemented
            by FIRST in 2009. Motors were controlled by Victor speed controllers, pneumatics were controlled by Vex Pro
            Spike relays and solenoids. Encoders on the drivetrain were used to move accurately in autonomous mode,
            winning three awards over the course of the 2013 season.
        </p>

        <h2>Pyramid Hanging Mechanism</h2>
        <hr class="pyramid">
        <p>
            The final revision of the E-lime-o-nator used two hooks (made from modified rock climbing carabiners)
            mounted on top of pneumatic pistons which pull the root off of the ground shortly before the end of the
            match. A previous version of the system did not use pistons and instead was completely passive using only a
            sloped piece of plywood. This system was removed after it proved too difficult to properly align and
            therefore unreliable.
        </p>

        <hr class="divider">

        <h2>Achievements</h2>
        <div class="row">
            <div class="column">
                <h3>FIRST Championship</h3>
                <h4>Curie Division Winners</h4>
            </div>

            <div class="column">
                <h3>Central Valley Regional</h3>
                <h4>
                    Regional Winners<br>
                    <hr class="solid">
                    <br>Innovation in Control Award<br>
                    <h5>sponsored by</h5>
                    <br>
                    <h4>Rockwell Automation</h4>
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
    .robot-history-2013 {
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