<script setup lang="ts">
    import { trackActions } from '../../../components/InteractionTracker.ts';
    trackActions('robotDetailsPageSwitch','2022');
</script>

<template> 
    <div className="robot-history-2022">
        <h1>2022: MARGIE</h1>
        <hr class="header">
        <img src="/images/robot_history_images/2022 robo.jpeg" alt="MARGIE" class="center" />
        <br>
        <hr class="divider">

        <h2>Scoring</h2>
        <hr class="scoring">
        <p>
            Margie was able to collect and store the provided cargo, and climb to the traversal rung in the hangar in
            eight seconds. Margie's first mechanism was the three-roller motor actuated cargo ground intake. This was the
            first mechanism involved in the scoring of cargo. The indexer, or "pooper", sorted them based on
            the two different colors, which allowed Margie to score efficiently and effectively. A wheel was then spun to
            bring the ball up into the shooter, which had an adjustable hood, allowing Margie to shoot from anywhere on
            the field. Along with the former, there was also a 3D printed gear backing, which provided balanced
            compression throughout the shooter. The shooter's back rollers provided balanced backspin to prevent the
            balls from bouncing out of the goal.
        </p>

        <h2>Drivetrain</h2>
        <hr class="drivetrain">
        <p>
            Margie's drivetrain was made using the SDS Mk4 Swerve modules with a 16 ft/sec maximum speed, and rotatable
            wheels. This enabled us to go in any direction on the field with extreme speed and dexterity. The pocketed
            belly pan provided structural support and mounting space for most of the electronic components without
            compromising on weight savings.
        </p>

        <h2>Operating Interface</h2>
        <hr class="operating-interface">
        <p>
            Margie drove and operates using xbox controllers. The Controller's joystick controlled the robot's rotation,
            and the Operator's controlled the robot's movement, which allowed us to aim towards the goal while maneuvering away
            from defense. This was used to intake balls, and told the robot when to shoot. The robot also used a camera
            to see the other side of the playing field to identify cargo.
        </p>

        <h2>Electrical</h2>
        <hr class="electrical">
        <p>
            Margie saw interesting electrical changes from previous seasons. We switched from pneumatics on
            our robot to relying solely on motors. This meant that mechanisms which have commonly been used with
            pneumatics, such as our intake, had to change their power transfer to use rotation in the motors. In
            addition, we used a Limelight 2+ camera to find the distance from the goal, and aimed the shooter
            accordingly.
        </p>

        <hr class="divider">

        <h2>Achievements</h2>
        <div class="row">
            <div class="column">
                <h3>FIRST Championship</h3>
                <h4>
                    Hopper Division Winners<br>
                    <hr class="solid">
                    <br>Autonomous Award<br>
                    <h5>sponsored by</h5>
                    <br>
                    <h4>Ford</h4>
                </h4>
            </div>

            <div class="column">
                <h3>Silicon Valley Regional</h3>
                <h4>
                    Regional Winners<br>
                    <hr class="solid">
                    <br>Engineering Inspiration Award
                </h4>
            </div>
        </div>

        <div class="row">
            <div class="column">
                <h3>Sacramento Regional</h3>
                <h4>
                    Regional Winners<br>
                    <hr class="solid">
                    <br>Chairman's Award<br>
                </h4>
            </div>

            <div class="column">
                <h3>Hueneme Port Regional</h3>
                <h4>
                    Regional Winners<br>
                    <hr class="solid">
                    <br>Autonomous Award<br>
                    <h5>sponsored by</h5>
                    <br>
                    <h4>Ford</h4>
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
    .robot-history-2022 {
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
