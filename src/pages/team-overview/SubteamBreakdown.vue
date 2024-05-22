<script setup lang="ts">
    import { trackActions } from '../../components/InteractionTracker.ts';
    trackActions('pageSwitch', 'SubteamBreakdown');
</script>

<template>
    <div className="subteam-breakdown">
        <h1>SUBTEAM BREAKDOWN</h1>
        <hr class="solid">
        <h2 class="header">Primary Subteams</h2>
        <hr class="solid">

        <div class="row">
            <div class="column">
                <h3 class="h3-right">Business and Media</h3>
                <p class="margin-left">
                    The Business and Media subteam involves a wide range of skills necessary to manage non-technical
                    tasks and aspects of the team. Throughout the year, they contact sponsors, fundarise, write grants,
                    track income and expenditures, capture media of the team’s activities, and complete the yearly
                    business plan. To maintain the team’s image, members write and release social media posts, newspaper
                    articles, monthly newsletters, and design the website and team apparel.
                </p>
            </div>

            <div class="column">
                <img
                    src="/images/subteam_breakdown_images/subteam-buisness-and-media.jpg"
                    alt="BAM being focused"
                    class="center"
                />
            </div>
        </div>

        <hr class="solid">

        <div class="row">
            <div class="column">
                <img
                    src="/images/subteam_breakdown_images/subteam-electrical.jpeg"
                    alt="hardWHERE electrical soldering"
                    class="center"
                />
                <br>
                <br>
            </div>

            <div class="column">
                <h3 class="h3-left">Hardware Electrical</h3>
                <p class="margin-right">
                    The Hardware Electrical subteam is the bridge between Hardware Mechanical and Software Robot.
                    Students on the subteam apply wiring design concepts to wire robot bases.Hardware Electrical members
                    become familiar with advanced electrical engineering as they work on these projects.
                </p>
            </div>
        </div>

        <hr class="solid">

        <div class="row">
            <div class="column">
                <h3 class="h3-right">Hardware Design/Fabrication</h3>
                <p class="margin-left">
                    The Hardware Mechanical subteam is split into two teams/groups; Design and Fabrication. Members work
                    together with the Hardware Electrical and Software Robot subteam to design and manufacture the
                    entirety of the robot. The Design team uses Computer Aided Design (CAD) to create images of parts
                    and mechanisms which are then sent to Fabrication. Fabrication creates the parts based on the
                    Design’s specifications using a wide variety of tools, including our mills, lathes, and CNC router.
                </p>
            </div>

            <div class="column">
                <img
                    src="/images/subteam_breakdown_images/subteam-design.jpeg"
                    alt="hardWHERE design working on intake"
                    class="center"
                />
            </div>
        </div>

        <hr class="solid">

        <div class="row">
            <div class="column">
                <img
                    src="/images/subteam_breakdown_images/subteam-robot.jpeg"
                    alt="softWHERE robot staring at a computer"
                    class="center"
                />
            </div>

            <div class="column">
                <h3 class="h3-left">Software Robot</h3>
                <p class="margin-right">
                    The Software Robot subteam programs the robot for different sequences. They do this with the coding
                    language Java. Both calculus and physics concepts such as velocity are used for the control system.
                </p>
            </div>
        </div>

        <br>
        <br>
        <hr class="solid">

        <div class="row">
            <div class="column">
                <h3 class="h3-right">Software Scouting</h3>
                <p class="margin-left">
                    The Software Scouting subteam codes in a variety of computer languages, including Kotlin and Python.
                    They are in charge of creating a scouting app each season for competitions in order for scouts to
                    input data about the different robots during the matches. As well as developing a scouting app, the
                    subteam makes apps to view the data recorded on the scouting app.
                </p>
            </div>

            <div class="column">
                <img
                    src="/images/subteam_breakdown_images/subteam-scouting.jpeg"
                    alt="softWHERE scouting being the best"
                    class="center"
                />
            </div>
        </div>

        <br>
        <br>
        <hr class="solid">
        <h2 class="header">Secondary Subteams</h2>
        <hr class="solid">

        <div class="row">
            <div class="column">
                <img
                    src="/images/subteam_breakdown_images/subteam-strategy-breakdown.jpeg"
                    alt="Strategy"
                    class="center"
                />
            </div>

            <div class="column">
                <h3 class="h3-left">Strategy</h3>
                <p class="margin-right">
                    Students on this subteam work to create a playbook that encapsulates certain scenarios, even those
                    with the slightest possibility of occurring on the field. They draw out plays and teach them to the
                    drive team to better prepare them for the stress of mid-match reactions during competition. All
                    students must have solid critical thinking skills, which they use extensively when creating the
                    playbook.
                </p>
            </div>
        </div>

        <hr class="solid">

        <div class="row">
            <div class="column">
                <h3 class="h3-right">Impact Award</h3>
                <p class="margin-left">
                    The Impact Award subteam works towards completing Citrus Circuits’s application for the prestigious
                    FIRST Impact Award. The award honors the team that best represents a model for other teams to
                    emulate and best embodies the purpose and goals of FIRST.
                </p>
            </div>

            <div class="column">
                <img
                    src="/images/subteam_breakdown_images/subteam-impact-award-photo.jpg"
                    alt="Impact Award"
                    class="center"
                />
            </div>
        </div>

        <br>
        <br>
        <hr class="solid">
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
    </div>
</template>

<style scoped>
    .subteam-breakdown {
        margin-left: 5%;
        margin-right: 5%;
        font-size: medium;
    }

    img {
        margin-top: 1.8em;
    }

    .header {
        margin-top: -0.35em;
    }

    .h3-right {
        color: #40d635;
        font-size: 40px;
        font-family: "Bebas Neue";
        font-weight: normal;
        letter-spacing: 0.003em;
        white-space: nowrap;
        margin-left: 0.6em;
        margin-bottom: -30px;
    }

    .h3-left {
        color: #40d635;
        font-size: 40px;
        font-family: "Bebas Neue";
        font-weight: normal;
        letter-spacing: 0.003em;
        white-space: nowrap;
        margin-left: 0.75em;
        margin-bottom: -30px;
    }

    .center {
        display: block;
        margin-left: auto;
        margin-top: 1.7em;
        margin-right: auto;
        width: 90%;
    }

    .column {
        float: left;
        width: 50%;
        margin-top: -2em;
    }

    .margin-left {
        width: 20em;
        margin-left: 0.75em;
    }

    .margin-right {
        width: 20em;
        margin-left: 1em;
    }
    
    .row:after {
        content: "";
        display: table;
        clear: both;
        margin-bottom: -3em;
    }

    /* Solid border */
    hr.solid {
        border-top: 0.1em solid;
        width: 59em;
        margin-bottom: 4em;
        margin-left: 1.6em;
        margin-top: 4em;
    }
</style>
