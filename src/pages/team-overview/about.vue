<script setup lang="ts">
import { trackActions } from '../../components/InteractionTracker.ts';
trackActions('pageSwitch', 'About');
</script>

<template>
    <div class="about-citrus-circuits">
        <h1 class="header">About Citrus Circuits</h1>
        <hr class="solid">

        <div class="row">
            <div class="column">
                <img src="/images/about_images/galileo-team-photo.jpg" class="image-left" />
            </div>

            <div class="column">
                <p class="margin-right">
                    Our FRC team was founded as “EnGen Robotics” in 2004 by Steve Harvey, a math teacher at Da Vinci
                    Charter Academy in Davis, California. In 2007, we changed our name to “Citrus Circuits” and in 2015
                    moved to Davis Senior High School. Now entering our 20th season, the team has grown to include over
                    100 high school students from Davis Senior High School, Da Vinci Charter Academy, Holmes Junior
                    High, Emerson Junior High, and Harper Junior High.
                </p>
            </div>
        </div>

        <div class="row">
            <div class="column">
                <p class="margin-left">
                    Our team strives to reach out and encourage STEM (Science, Technology, Engineering, and Math)
                    education in our community, primarily through our student-led outreach groups. These outreach groups
                    focus on using our technical skills to help individuals and groups in our community, as well as
                    inspire students to get involved with STEM.
                </p>
            </div>

            <div class="column">
                <img src="/images/about_images/scouts-in-stands-2023.jpg" class="image-right" />
            </div>
        </div>

        <div class="row">
            <div class="column">
                <img src="/images/about_images/impact-award-anna-ac-2.jpg" class="image-left" />
            </div>

            <div class="column">
                <p class="margin-right">
                    We have started more than 100 youth robotics teams and mentored another 75 in the past two years,
                    worked with international students at summer camps held by UC Davis, and started Team 5458 Digital
                    Minds in Woodland. We have worked with teams worldwide through on-line presentations and conference
                    calls, publishing technical resources through the Compass Alliance and FIRST, traveling to Hangzhou
                    to participate in Robotics Championship China and teach robotics engineering to pre-rookie Chinese
                    teams, and hosting international teams in our shop prior to competitions.
                </p>
            </div>
        </div>

        <div class="row">
            <div class="column">
                <p class="margin-left">
                    Programs we host outside of FIRST include our Diversity in STEM presentations, Women in STEM
                    Empowerment (WISE) events, summer RoboCamps, and a booth at our local Farmer’s Market. Citrus
                    Circuits is also a partner team with LGBTQ+ of FIRST. Citrus Circuits is supported by the non-profit
                    Davis Robotics Foundation (DRF), which was founded in 2016 to support STEM activities for K-12
                    students in California and raise funds for Team 1678. The Foundation also serves as a fiscal host
                    for other FRC teams and for the 2023 FIRST Mentor Conference. In addition, DRF sponsors the Niklas
                    Murray Memorial Scholarship given annually at Capital City Classic.
                </p>
            </div>

            <div class="column">
                <img src="/images/about_images/tc-indo-spheri-11.jpg" class="image-right" />
            </div>
        </div>

        <hr class="solid">
        <h3 class="h3-center">Vision Statement</h3>

        <p class="margin-center">
            We transform our communities through education; we engage people of all ages through outreach; we inspire
            others with our commitment to excellence. We strive to Educate, Empower, and Excel.
        </p>

        <h3 class="h3-center">Mission Statement</h3>

        <p class="margin-center">
            Team 1678 pursues our vision by building a student-led, mentor-based environment that fosters innovation and
            teaches interpersonal and technical skills. Citrus Circuits also develops local partnerships and community
            outreach while striving to compete at the highest level possible.
        </p>

        <hr class="solid">
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
    </div>
</template>

<style scoped>
    .about-citrus-circuits {
        margin-left: 5%;
        margin-right: 5%;
    }

    .subteam-breakdown {
        margin-left: 5%;
        margin-right: 5%;
        font-size: medium;
    }

    img {
        margin-top: 45px;
    }

    .h3-right {
        color: #40d635;
        font-size: 40px;
        font-family: "Bebas Neue";
        font-weight: normal;
        letter-spacing: 0.003em;
        white-space: nowrap;
        margin-left: -0.25em;
    }

    .h3-left {
        color: #40d635;
        font-size: 40px;
        font-family: "Bebas Neue";
        font-weight: normal;
        letter-spacing: 0.003em;
        white-space: nowrap;
        margin-left: 0.8em;
    }

    .h3-center {
        margin-left: 0.6em;
        margin-top: 1em;
    }

    .image-left {
        display: block;
        margin-left: auto;
        margin-right: auto;
        width: 90%;
    }

    .image-right {
        display: block;
        margin-left: auto;
        margin-right: auto;
        width: 90%;
        margin-top: 1.25em;
    }

    .column {
        float: left;
        width: 50%;
    }

    .margin-left {
        margin-top: 0em;
        width: 22.32em;
        margin-left: 0.75em;
    }

    .margin-right {
        width: 22em;
        margin-top: 1.35em;
        margin-left: 0.5em;
    }

    .margin-center {
        margin-left: 0.5em;
    }
    
    .row:after {
        content: "";
        display: table;
        clear: both;
        margin-bottom: 0.5em;
    }

    hr.solid {
        border-top: 0.1em solid;
        width: 59em;
        margin-left: 1.6em;
        margin-top: 3em;
        margin-bottom: 2em;
    }
</style>