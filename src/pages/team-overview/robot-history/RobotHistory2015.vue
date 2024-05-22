<script setup lang="ts">
    import { trackActions } from '../../../components/InteractionTracker.ts';
    trackActions('robotDetailsPageSwitch','2015');
</script>

<template>
    <div className="robot-history-2015">
        <h1>2015: LEMON DROP</h1>
        <hr class="header">
        <img src="/images/robot_history_images/2015 robo.jpeg" alt="LEMON DROP" class="center" />
        <br>
        <hr class="divider">
        
        <h2>Scoring</h2>
        <hr class="scoring">
        <p>
            Lemon Drop was built to stack 5 totes with a can on top laid horizontally. The totes were loaded into Lemon
            Drop through human players. Lemon Drop was designed to make at least two 36 points stacks each game.
        </p>

        <h2>Drivetrain</h2>
        <hr class="drivetrain">
        <p>
            In 2015, we designed a U-shaped eight-wheel West Coast Drive with a two CIM, two-speed VEXPro gearbox. The
            U-shaped drive allowed us to keep a large, stable base to minimize the possibility of tipping while being
            able to manipulate totes and rc's within our frame perimeter. The base dimensions were the maximum frame
            perimeter in long-bot configuration.
        </p>

        <h2>Operating Interface</h2>
        <hr class="operating-interface">
        <p>
            Lemon Drop was controlled by two joystick controllers and a gamepad. The drive system used a simple tank
            drive. The driver controlled the base of the robot and the dropping of a stack, while the operator
            controlled the rest of the robot with a gamepad.
        </p>

        <h2>Electrical</h2>
        <hr class="electrical">
        <p>
            Lemon Drop ran gp the 2015 FRC control system package. Motors were driven with Victor SPO speed controllers.
            The notable sensors were a pair of proximity sensors that detected totes in elevator positions 1 and 2. This
            allowed the robot to build up stacks of totes without operator control.
        </p>

        <h2>Intake</h2>
        <hr class="intake">
        <p>
            The intakes featured a four wheel mechanism on actuating arms that allowed us to quickly intake totes from
            the human player station as well as acquire recycling containers on the field. We used four VersaPlanetary
            gearboxes with BaneBots wheels.
        </p>

        <hr class="divider">

        <h2>Achievements</h2>
        <div class="row">
            <div class="column">
                <h3>FIRST Championship</h3>
                <h4>
                    Championship Winner<br>
                    <hr class="solid">
                    <br>Newton Division Winner
                </h4>
            </div>

            <div class="column">
                <h3>Sacramento Regional</h3>
                <h4>
                    Regional Winner<br>
                    <hr class="solid">
                    <br>Woodie Flowers Finalist Award<br>(Steve Harvey)
                </h4>
            </div>
        </div>

        <div class="row">
            <div class="column">
                <h3>Silicon Valley Regional</h3>
                <h4>
                    Regional Winner<br>
                    <hr class="solid">
                    <br>Gracious Professionalism Award<br>
                    <h5>sponsored by</h5>
                    <br>
                    <h4>Johnson & Johnson</h4>
                </h4>
            </div>

            <div class="column">
                <h3>Central Valley Regional</h3>
                <h4>
                    Regional Winners <br>
                    <hr class="solid">
                    <br>Industrial Design Award<br>
                    <h5>sponsored by</h5>
                    <br>
                    <h4>General Motors</h4>
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
    .robot-history-2015 {
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
