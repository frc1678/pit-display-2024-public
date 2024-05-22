<script setup lang="ts">
    import { trackActions } from '../../../components/InteractionTracker.ts';
    trackActions('robotDetailsPageSwitch','2020');
</script>

<template>
    <div className="robot-history-2020">
        <h1>2020: EMPEROR PULP-ATINE</h1>
        <hr class="header">
        <img src="/images/robot_history_images/2020 robo.jpeg" alt="EMPEROR PULP-ATINE" class="center" />
        <hr class="divider">

        <h2>Scoring</h2>
        <hr class="scoring">
        <p>
            Emperor Pulp-atine's three roller actuating power cell ground intake was the first mechanism involved in the
            scoring of power cells. The indexer, or wheel of doom, spun constantly throughout the match as Emperor Pulp-atine
            picked up balls through the turret. A pocket-less design allowed for quick setling of power cells so that no
            time was wasted as the robot lined up for its shots. The whole shooter tower was supported to keep the tower
            and shooter stable as power cells were shot. It featured a dual shooter wheel set up. The upper shooter wheel
            was mounted to an adjustable hood with a telescoping backing. This allowed the shot to maintain uniform
            compression on its way through the shooter, and ensures that the ball hits the smaller roller at the same
            point of contanct relative to the exit point of the ball. The hood rotated around the same active shaft that
            the larger shooter wheel was mounted to, which ensured a linearly related exit angle-to-shot-angle ratio.
        </p>

        <h2>Drivetrain</h2>
        <hr class="drivetrain">
        <p>
            Emperor Pulp-atine's drivetrain was fitted with two Falcons 500s and four wheels on either side of the signature West Coast
            drivetrain provide extreme versatility on the field. With a 17 fU/sec maximum speed, 0.1 dropped 6 colsons
            in the middle, and 6° pneumatic wheel on the corners, our drivetrain allowed for smooth traversal of the
            rendezvous point and enough traction for accurate autonomous routines and driver control. The pocketed belly
            pan provided structural support and mounting space for most of the electronic compentents without
            compromising on weight savings.
        </p>

        <h2>Operating Interface</h2>
        <hr class="operating-interface">
        <p>
            Emperor Pulp-atine was driven with a wheel and vertical joystick. The wheel controlled the angle of the robot's drive
            base and point turns, while the joystick enabled the driver to place game objects on both the rocket and
            cargo ship with precision. The wheel enabled the robot to achieve tight turns while also maneuvering
            smoothly around defense. The hatch and cargo intakes, elevator, and climbing system were controlled by an
            Xbox 360 game controller. The drive team used to see video from cameras mounted on the front of the robot.
        </p>

        <h2>Electrical</h2>
        <hr class="electrical">
        <p>
            Emperor Pulp-atine saw interesting electrical changes from previous seasons. We switched from Mini CIMs and
            775 pros to Falcon 500s and NEO 550s. Because of this, we also went from using external speed controllers to
            the internal controllers in the Falcon 500s. Since we had a shooter with a turret in 2018, we used
            flexible conduit (plastic sheath, in which wires are placed to be protected) to guide wires up through the
            turret to protect them from excessive twisting. We used a Limelight 2+ camera to aim the turret and
            hood of the shooter, Like 2019, all robots that had a pneumatics system were required to use on-board
            compressors.
        </p>

        <hr class="divider">

        <h2>Achievements</h2>
        <div class="row">
            <div class="column">
                <h3>Los Angeles North Regional</h3>
                <h4>
                    Regional Winners<br>
                    <hr class="solid">
                    <br>Gracious Professionalism Award<br>
                    <h5>sponsored by</h5>
                    <br>
                    <h4>Johnson & Johnson</h4>
                </h4>
            </div>

            <div class="column">
                <h3>St. Louis Regional</h3>
                <h4>Chairman's Award</h4>
            </div>
        </div>

        <hr class="divider">
        
        <router-link :to="{path: '/team-overview/robot-history'}">
            <button class="return"/>
        </router-link>
    </div>
</template>

<style scoped>
    .robot-history-2020 {
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
