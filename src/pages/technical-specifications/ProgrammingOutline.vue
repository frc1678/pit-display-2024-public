<script setup lang="ts">
    import { trackActions } from '../../components/InteractionTracker.ts';
    trackActions('pageSwitch','ProgrammingOutline');
</script>

<template>
    <div className="programming-outline">
        <h1>Programming Outline</h1>
        <hr class="solid">
        <h2 class="spacing">This is the programming outline for 2023</h2>
        <hr class="solid">

        <div className="row">
            <div className="column">
                <h3 class="h3-left">Architecture/Mechanisms</h3>
                <p class="paragraph-left">
                    Our code is split into three main sections. The first category of these sections encompasses the subsystems 
                    we have on our robot, and follows a request-based architecture. Within our robot class, we also have different 
                    commands for running our robot in autonomous and teleop modes. The "teleop" thread runs code necessary to 
                    convert button presses to commands for the subsystem thread. The “autonomous" thread schedules commands for 
                    the subsystem thread during the autonomous period.
                </p>
                
                <p class="paragraph-left">
                    This year's robot has several important mechanisms:
                    <ul>
                        <li>Drivetrain</li>
                        <li>Intake</li>
                        <li>Wrist</li>
                        <li>Ampevator</li>
                        <li>Serializer</li>
                        <li>Feeder</li>
                        <li>Hood</li>
                        <li>Shooter</li>
                        <li>Climber</li>
                    </ul>
                </p>

                <p class="paragraph-left">
                    Since all these mechanisms rely on each other to function, apart from the drivetrain, they are treated as a 
                    single giant “subsystem," called a "superstructure." The superstructure takes in abstract goals and converts 
                    them to commands for individual mechanisms.
                </p>

                <h3 class="h3-left">VCS and Collaboration</h3>

                <p class="paragraph-left">
                    Due to the large size and complexity of our codebase, it is paramount to maintain proper source control. 
                    We use git for local version control, and our code is hosted on a private repository on GitHub, which goes 
                    public on release at the end of the season. All students are taught to use git properly before they ever 
                    write code for the team.
                </p>

                <p class="paragraph-left">
                    Each student has their own fork of the repository, which they use to implement any changes. Each necessary 
                    change starts off as a "git issue" that is then assigned to a member of the subteam. A "pull request" is then 
                    opened by the student to address the respective issue where all other students on the subteam can review the 
                    code. Once the code passes the review process, it is "merged" into the main codebase with the approval of the 
                    programming lead.
                    </p>
            </div>

            <div className="column">
                <h3>Languages</h3>
                <p class="paragraph-right">
                    All of our code our the past four years has been written in Java, due to its speed and ease of teaching 
                    and maintaining.
                </p>
                
                <h3 >Autonomous Modes</h3>
                <p class="paragraph-right">
                    Our main autonomous mode for the year is a six game piece and four game piece auto.
                </p>
                <p class="paragraph-right">
                    We use Maven to path out the points and trajectories in our auto. These points are then translated into 
                    Trajectories for our drivetrain to follow.
                </p>

                <h3 class="h3-right">Controls</h3>
                <p class="paragraph-right">
                    All motor actuated mechanisms are controlled via PID and some sort of feed-forwards term. The hood takes 
                    advantage of the TalonSRX Motion-Magic control mode for smooth on-the-fly trapezoidal motion profiling 
                    between goals. This ensures we don't get integral windup, steady-state error, or other unexpected behaviors 
                    that arise from raw PID.
                </p>

                <h3>Logging</h3>
                <p class="paragraph-right">
                    Another important aspect of our code architecture is our logging software. Our logging software logs all the 
                    messages that are part of the PeriodicIO, allowing us to read the status, inputs, outputs, and goals of all 
                    the mechanisms, and debug problems with our code more effectively.
                </p>
                <p class="paragraph-right">
                    All messages are encoded as protobuf messages, which allow for easy reflection, while also taking advantage 
                    of the stack, making for greater speed. All of these protobuf messages are logged to CSV files in realtime, 
                    and we’ve written a log viewer to display the values of various parts of our code.
                </p>
                <p class="paragraph-right">
                    With this logging setup, we can not only diagnose problems by reading the statuses and outputs of all of our 
                    mechanisms, but we can  catch errors in our code that might have not been visible to the naked eye, like an 
                    error in toggling buttons which would subtly make mechanisms behave strangely.
                </p>
            </div>
        </div>

        <div class="row">
            <div class="column"/>       
        </div>
        
        <br>
        <br>
    </div>
</template>

<style scoped>
    .spacing {
        margin-top: -0.5em;
    }

    .programming-outline {
        margin-left: 5%;
        margin-right: 5%;
        font-size: medium;
    }

    .logging_graphs {
        width: 200%;
    }

    .paragraph-left {
        width: 25em;
        margin-left: -2.5em;
        margin-bottom: 1em;
    }

    .paragraph-right {
        width: 25em;
        margin-left: -0.5em;
        margin-bottom: 1em;
    }

    .paragraph {
        width: 25em;
        margin-left: -0.5em;
        margin-bottom: -2em; 
    }

    .column {
        float: left;
        width: 45%;
        margin-right: 20px;
        margin-left: 20px;
    }
    
    /* Clear floats after the columns */
    .row:after {
        content: "";
        display: table;
        clear: both;
    }

    img {
        margin-bottom: 5em;
    }

    .h3 {
        margin-bottom: -0.5em;
    }

    .h3-left {
        margin-bottom: -0.5em;
        margin-left: -1.1em;
    }

    hr.solid {
        border-top: 0.1em solid ;
        width: 62em;
        margin-bottom: 4em;
        margin-top: 4em;
        margin-left: -1em;
    }
</style>