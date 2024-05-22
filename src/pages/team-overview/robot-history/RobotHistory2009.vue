<script setup lang="ts">
    import { trackActions } from '../../../components/InteractionTracker.ts';
    trackActions('robotDetailsPageSwitch','2009');
</script>

<template>
    <div class="robot-history-2009">
        <h1>2009: LEMON SQUEEZE</h1>
        <hr class="header">
        <img src="/images/robot_history_images/2009-robo-pic.jpg" class="center" />
        <hr class="divider">

        <h2>Drivetrain</h2>
        <hr class="drivetrain">
        <p>
            Lemon Squeeze used a four-wheel drivetrain powered by two CIM robot motors and two gearboxes. The wheels
            were the low-friction “rover wheels” required for 2009’s game.
        </p>

        <h2>Ball-handling System</h2>
        <hr class="ball">
        <p>
            Most of the robot’s bulk consisted of a hopper, built out of Plexiglas, which was capable of storing more
            than 20 balls. A conveyor system in the front moved balls into the shooter or hopper, and a “pickup roller”
            in the front sucked them from the floor or spit them into a player station. The ball-handling system was
            designed to be easily reconfigured while in play–for example, to segregate an empty cell from the rest of
            the balls, the robot could reconfigure its conveyor and pickup system as a secondary hopper.
        </p>

        <h2>Operating Interface</h2>
        <hr class="operating-interface">
        <p>
            Lemon Squeeze was driven with two joysticks using a tank drive system. A second driver operated a third
            joystick that controlled the robot’s ball handling system.
        </p>

        <h2>Electrical</h2>
        <hr class="electrical">
        <p>
            Lemon Squeeze’s control system was built on an entirely new platform utilizing wi-fi communications and a
            National Instruments Compact Rio system. In total, the robot has eight on-board processors, which are
            controlled by the CPU in the Compact Rio. Lemon Squeeze’s software could automatically monitor the robot’s
            acceleration and prevent the wheels from slipping using an accelerometer. The software could also perform
            other tasks to make driving the robot easier, such as automatically compensating for changes in heading
            caused by drag from the trailer. When preparing to dump balls into an opponent’s trailer, Lemon Squeeze used
            a camera to “lock on,” allowing for very high precision in lining up for an attack. Lemon Squeeze could even
            track a target if it went out of its field of vision–a technology called “predictive tracking” that allowed
            the robot to guess where it should look.
        </p>

        <hr class="divider">

        <router-link :to="{path: '/team-overview/robot-history'}">
            <button class="return"/>
        </router-link>
    </div>
</template>

<style scoped>
    .robot-history-2009 {
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
    
    hr.solid {
        border-top: 0.1em solid;
        width: 12em;
    }
</style>
