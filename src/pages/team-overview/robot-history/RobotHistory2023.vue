<script setup lang="ts">
    import { trackActions } from '../../../components/InteractionTracker.ts';
    trackActions('robotDetailsPageSwitch','2023');
</script>

<template>
    <div className="robot-history-2023">
        <h1>2023: Tangerine Tumbler</h1>
        <hr class="header">
        <img src="/images/robot_history_images/2023 robo.jpg" alt="Tangerine Tumbler" class="center" />
        <br>
        <hr class="divider">

        <h2>Scoring</h2>
        <hr class="scoring">
        <p>
            The Tangerine Tumbler’s intake had a triple roller allowed the robot to pick up cones and cubes from the
            ground. It was mounted on a 3 stage continuous elevator, a pivot point which allowed the robot to pick up
            game pieces off the ground and shelf to score. The fork lift was placed on the same pivot point as the
            elevator, giving it the same high gear ratio. LEDs indicate to the human player which game piece the drive
            team wants.
        </p>

        <h2>Drivetrain</h2>
        <hr class="drivetrain">
        <p>
            Our drivetrain was made using the SDS Mk4 Swerve modules with a 16 ft/sec maximum speed, and rotatable
            wheels. This enabled us to go in any direction on the field with extreme speed and dexterity. The pocketed
            belly pan provided structural support and mounting space for most of the electronic components without
            compromising on weight savings.
        </p>

        <h2>Operating Interface</h2>
        <hr class="operating-interface">
        <p>
            Tangerine Tumbler drove and operated using xbox controllers. The driver’s joystick controlled the robot’s
            rotation, and the operator’s controlled the robot’s movement, letting us aim towards the goal while
            maneuvering away from defense. This was used to intake cubes and cones, and tell the robot when to shoot.
            The robot also used a camera to see the other side of the playing field to identify game pieces.
        </p>

        <h2>Electrical</h2>
        <hr class="electrical">
        <p>
            The robot had a new wiring system to minimize the amount of wires used and maximize their usage. Wire
            placement was optimized for components so that wires can travel less distance. Work was done on the wire
            routing to prevent issues from occurring and making problems easier to fix. Furthermore, a new LED system
            was used to make the robot easier for software to program. <br>
        </p>

        <hr class="divider">

        <h2>Achievements</h2>
        <div class="row">
            <div class="column">
                <h3>FIRST Championship</h3>
                <h4>Galileo Division Winners</h4>
            </div>

            <div class="column">
                <h3>Silicon Valley Regional</h3>
                <h4>
                    Regional Winners<br>
                    <hr class="solid">
                    <br>Quality Award
                </h4>
            </div>
        </div>

        <div class="row">
            <div class="column">
                <h3>Sacramento Regional</h3>
                <h4>
                    Regional Winners<br>
                    <hr class="solid">
                    <br>Excellence in Engineering Award<br>
                </h4>
            </div>

            <div class="column">
                <h3>Hueneme Port Regional</h3>
                <h4>
                    Regional Winners<br>
                    <hr class="solid">
                    <br>Excellence in Engineering Award<br>
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
    .robot-history-2023 {
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

    h1 {
        color: #40d635;
        font-family: "Bebas Neue";
        text-align: center;
        font-size: 100px;
        margin-top: 2em;
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
