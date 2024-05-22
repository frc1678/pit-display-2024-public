<script setup lang="ts">
    import { trackActions } from '../../../components/InteractionTracker.ts';
    trackActions('robotDetailsPageSwitch','2018');
</script>

<template>
    <div className="robot-history-2018">
        <h1>2018: LEMON ZEST</h1>
        <hr class="header">
        <img src="/images/robot_history_images/2018 robo.jpeg" alt="LEMON ZEST" class="center" />
        <br>
        <hr class="divider">

        <h2>Scoring</h2>
        <hr class="scoring">
        <p>
            Lemon Zest was equipped with a three part scoring system: an intake, rotating wrist, and 2-stage cascading
            elevator. The intake used two pneumatically powered arms that extend back and forth to quickly drag in a
            power cube. While the robot drove, the cube was firmly clasped between these arms and the robot averaged a
            10 cube intake per game. Using the wrist and elevator, the cube was lifted and could be scored off the front
            or back of the robot. When scoring off the front, the intake rose up the elevator and outward-rotating
            wheels could shoot the cube into either the switch or scale. When scoring off the back, the wrist mechanism
            lifts to the top of the first stage elevator and rotates around to shoot the cube off of the backside.
        </p>

        <h2>Drivetrain</h2>
        <hr class="drivetrain">
        <p>
            Our drivetrain consisted of four Colson wheels to grip the ground surface and two Omni wheels at the front
            of the robot which allowed us to turn efficiently. It was powered with a two flipped mini cim gearbox that
            had two speeds; we could reach up to 18 feet per second.
        </p>

        <h2>Operating Interface</h2>
        <hr class="operating-interface">
        <p>
            Lemon Zest was steered with a wheel and vertical joystick, which controlled the angle and speed of the
            robot's drive base. The joystick qualified the driver to place cubes on game elements or to align to the
            hanging climb bar with minimal effort. The wheel enabled the robot to achieve tight turns while also
            maneuvering the robot around defense smoothly. The cube intake, elevator, and climber, among other
            mechanisms on the robot, were controlled by an Xbox 360 game controller and the drive team used a small
            screen to see video from a camera mounted on the wrist above the cube intake.
        </p>

        <h2>Electrical</h2>
        <hr class="electrical">
        <p>
            Lemon Zest used many sensors. These included a proximity sensor, to sense whether or not the robot was in
            possession of a cube; hall effect sensors to help gauge the height of the arm on the elevator; and the usual
            encoders to measure speed of the drivetrain. Because of the elevator, the wires and pneumatics going into
            the wrist had to be routed through conduits (plastic joints linked together, in which wires are placed to be
            protected) and back down the side of the robot. Pneumatics were used on the intake to clamp around the cube,
            and to deploy the hook and ramp.
        </p>

        <hr class="achievements">
        <h2>Achievements</h2>
        <div class="row">
            <div class="column">
                <h3>FIRST Championship</h3>
                <h4>
                    Newton Division Winners<br>
                    <hr class="solid">
                    <br>Autonomous Award<br>
                    <h5>sponsored by</h5>
                    <br>
                    <h4>Ford</h4>
                </h4>
            </div>

            <div class="column">
                <h3>Sacramento Regional</h3>
                <h4>
                    Regional Winners<br>
                    <hr class="solid">
                    <br>Chairman's Award
                </h4>
            </div>
        </div>

        <div class="row">
            <div class="column">
                <h3>Central Valley Regional</h3>
                <h4>
                    Regional Winners<br>
                    <hr class="solid">
                    <br>Entrepreneurship Award<br>
                    <h5>sponsored by</h5>
                    <br>
                    <h4>Kleiner, Porkins, Caulfeld, and Byers</h4>
                </h4>
            </div>

            <div class="column">
                <h3>Utah Regional</h3>
                <h4>
                    Regional Winners<br>
                    <hr class="solid">
                    <br>Quality Award<br>
                    <h5>sponsored by</h5>
                    <br>
                    <h4>Motorola Solutions Foundation</h4>
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
    .robot-history-2018 {
        margin-left: 5%;
        margin-right: 5%;
        font-size: medium;
    }

    button:active {
        transform: scale(1.1);
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
