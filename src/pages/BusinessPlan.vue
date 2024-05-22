<script setup lang="ts">
    import { trackActions } from '../components/InteractionTracker.ts';
    trackActions('pageSwitch','BusinessPlan');
</script>

<template>
    <div className="business-plan">
        <section class="top"/>
        <h1>Business Plan</h1>

        <div>
            <h4>
                Team 1678 pursues our vision by building a student-led, mentor-based enviroment that fosters innovation
                and fosters interpersonal and technical skills. Citrus Circuits also develops local partnerships and
                community outreach while striving to compete at the highest level possible
            </h4>
        </div>

        <h2 className="section-header">Team History and Growth</h2>

        <p className="paragraph">
            Citrus Circuits was founded as EnGen Robotics in 2004 by Steve Harvey, a math teacher at Davis Senior High
            School (DSHS). Our program started with 15 students from DSHS and Da Vinci Charter Academy and has grown to
            a program with nearly 100 students from five schools and 21 mentors, which includes FRC alumni, parents,
            teachers, engineers, and other community members.
        </p>

        <p className="paragraph">
            We operated out of a classroom and hallway until 2008 when we bought a 20-foot shipping container that acted
            as a small shop. With this minor increase in space, we were able to reach the quarterfinals at the
            Sacramento Regional every year until 2011, when we achieved our goal of winning our first Regional. Our
            newfound competitive success became a strong selling point for many new sponsors, including UC Davis.
        </p>

        <p className="paragraph">
            In the 2014 offseason, our school district (DJUSD) took notice of our team’s accomplishments and agreed to a
            partnership in which we received funding for travel, supplies, and mentor stipends, as well as access to a
            former band classroom that became our shop. In return, our head coach started the first Career Technical
            Education (CTE) courses focusing on robotics in the district. In the 2015 offseason, DJUSD dedicated a
            second classroom to developing STEM and robotics. We now have a large shop with our own industry-standard
            equipment and a two-thirds size practice field, in addition to several conference rooms for subteam
            meetings.
        </p>

        <p className="paragraph">
            In the following two years, we made two major additions to our program. In 2016, we began two weeks of
            RoboCamps, our self-sustaining program that also generates additional revenue for the team. We increased to
            four weeks of camps 2017 and also started Davis Youth Robotics (of which RoboCamps is a part). In addition,
            we founded Davis Robotics Foundation (DRF), a 501(c)3 nonprofit organization that handles donations to our
            team. DRF streamlines the organization of our funds and its nonprofit status also benefits our sponsors, as
            all donations made to DRF are tax-deductible.
        </p>

        <p className="paragraph">
            Following the founding of DRF, our sponsor donations reached the highest they have ever been. Our Sponsor
            Retention Program, also developed in 2017, streamlined sponsor interaction, and likely had a large role in
            2018’s ‘sponsor boom’.
        </p>

        <p className="paragraph">
            In 2019 our income was 8% lower than in 2018, mainly due to changes in budget allocations at UC Davis and
            the loss of a key sponsor at the end of a term agreement. Despite this, we were still able to maintain
            funding for all of our programs by drawing on our carry-over and increasing revenue from RoboCamps.
        </p>

        <p className="paragraph">
            During the 2020 season, we maintained our strong relationships with our sponsors and support from team
            parents. Initially, we planned to attend the St. Louis and Sacramento regionals as well as the 2020 World
            Championships; however, the cancellations of competitions due to COVID-19 ended with us spending only half
            of our traveling budget. For the remainder of the year, our spendings focused on promoting our outreach
            programs.
        </p>

        <p className="paragraph">
            In the 2021 season, we were unable to attain the same level of financial support as we did in 2020. The
            previous year was economically tough for all businesses, which lowered our sponsor activity. Although our
            income wasn’t as high as in previous years, the absence of competitions and other related expenses allowed
            us to have a large carryover for the 2022 season, adding to accumulated funds from previous years. As a
            result, we have built a reserve to support the team in case any unexpected circumstances occur.
            Additionally, we helped our school district receive a $3 million grant Career Technical Education (CTE) from
            the State of California, as well as a matching $3 million in local bond funds, for a new shop building and
            practice field that will expand the current space of our robotics program.
        </p>

        <p className="paragraph">
            This past year, we received more financal support than we anticipated, but our expenses also surpassed our
            expectations due to increases in transporation, food, and lodging costs for competitions. In addition to
            continuing support from our major sponsors, we doubled the number of the Robocamps sessions, which brought
            in additional income. Meanwhile, the new building with an expanded shop and full field is currently in
            construction, which will be an important addition to our program.
        </p>

        <h2 className="section-header">Organizational Structure</h2>

        <p className="paragraph">
            Our students are divided among multiple subteams, each with a unique specialization. A student must
            participate in only one primany subteam and has the option to join one secondary subteam in addition to
            their primary subteam. Primary subteams fall under three categories: Hardware, Software, and Business &
            Media. The Hardware subteams (Design, Fabrication, and Electrical) design the robot using Computer Aided
            Design, build the physical robot in our shop, and wire it. The Software Robot subteam programs the robot and
            all vision tasks or mechanisms the robot has, while the Software Scouting subteam creates tools to collect
            and compile scouting data during competition. Business & Media raises and administers funds, and manages the
            team's media presence. Strategy, one of the secondary subteams, creates gameplay strategies for competition.
            The other secondary subteam, Chairman's, prepares and presents the team's Chairman's Award submission,
            detailing our outreach and educational programs, which now include both education in local schools and
            support for FRC teams internationally.
        </p>

        <p className="paragraph">
            Our leadership team, which consists of two lead mentors and student subteam leaders, is responsible for any
            major decisions concerning the team. All those in leadership roles are nominated by fellow team members and
            selected by the previous year's core team (Captain, Vice Captain, Head Coach/Lead Technical mentor, and Lead
            Mentor.)
        </p>

        <p className="paragraph">
            Due to the size of our program, we have reached the physical limits of our current facility. As previously
            stated, our team lobbied to have a portion of a recently-approved school bond go towards the construction of
            a new STEM facility, with a larger area for supporting FIRST robotics. This opportunity will allow us to
            expand our own team and support a higher number of local FRC and youth robotics programs.
        </p>

        <h2 className="section-header">Risk Analysis</h2>

        <img src="/images/business_images/risk-analysis-risk-factors.png" alt="Risk Factors" className="image-center" />

        <h2 className="section-header">Marketing</h2>

        <p className="paragraph">
            Our team has strong, consistent branding, promoted on our apparel, website, presentations, robot, and
            competition trailer. Our logo, a signature green lime, is based on simple and clean design principles
            matched with a monochromatic color scheme, giving us a highly recognizable public presence.
        </p>

        <p className="paragraph">
            We have been featured in a multitude of local and statewide media, including five television interviews, an
            appearance with the California governor, three radio appearances, and ovêr 150 articles in various
            newspapers since 2013. Every month, we publish a newsletter on our website where team members, parents,
            alumni, and sponsors can see our upcoming events or new changes with our team.
        </p>

        <p className="paragraph">
            Our team also interacts directly with the community on a weekly basis at the local Farmers Market, where
            individuals and families have the opportunity to talk to our students and learn about our programs. Our
            booth features a popular tabletop robot that children can interact with using a hand-held controller.
        </p>

        <p className="paragraph">
            Our public presence extends to social and digital media as well: we have 9,108 followers on Instagram, and
            4,190 Facebook followers. Our website has an average of 1,000 views per week and contains a wide variety of
            resources. On YouTube, we share our experiences through season recap and educational Fall Workshop videos to
            2,700+ subscribers, and several of our videos have received over 10,000 views each.
        </p>

        <p className="paragraph">
            We are also a founding member of The Compass Alliance (TCA), an organization that recently partnered with
            FIRST to help spread resources and information to FRC teams around the world. As a leadership member of TCA,
            we organize these resources, many of which are branded with our logo or team name.
        </p>

        <h2 className="section-header">Finance</h2>

        <p className="paragraph">
            Our team raises money primarily through a mixture of parent donations, grants, and business sponsors. We are
            fortunate to have a very supportive parent community which is willing to contribute to our team, although no
            family is required to make a donation as part of team membership. Students on the Business & Media subteam
            are responsible for managing our Grant Program and Sponsor Retention Program. The Grant Program identifies
            possible grants, and students write proposals to secure funding for our team and outreach programs. The
            Sponsor Retention Program is a system we have developed in order to cultivate a lasting relationship with
            our sponsors. Each Business & Media member is assigned a potential or returning sponsor organization and
            communicates with them via email. We invite every sponsor to our annual Sponsor Open House, where they can
            meet the students and see our facilities, and the Sacramento Regional, where we introduce them to the
            excitement of an FRC competition. <i>(For sponsor benefits, see Appendices)</i>
        </p>

        <p className="paragraph">
            All of the money we raise is held by DRF, which also manages funds for other programs. DRF also supports the
            Davis Youth Robotics programs (League, RoboCamps, and Schools), and has been a fiscal host for two FRC teams
            we have started in Yolo County (5458 Digital Minds and 6174 Kaprekar's Constants).
        </p>

        <p className="paragraph">
            We track our funds through a shared accounting system, which is updated with income and expenditures in real
            time. Each budget is made in late August with the input of each subteam, who estimate their expenses for the
            upcoming season. The budget also includes estimated travel expenses, which are the primary reason for our
            large budget. In previous years, our travel costs were just over 50% of our total budget because we cover
            100% of the travel costs of everyone on the team, so cost is not a barrier to participation.
        </p>

        <h2 className="section-header" style="margin-bottom: 0.2em" >Appendices</h2>

        <div class="row">
            <div class="column">
                <img
                    src="/images/business_images/appendicies-budgeted-expenses-1.png"
                    alt="Budgeted Expenditures"
                    className="image-left"
                />
            </div>

            <div class="column">
                <img src="/images/business_images/appendicies-budgeted-expenses-2.png" alt="Sponsor Benefits" className="image-right" />
            </div>
        </div>
        
        <img src="/images/business_images/appendicies-graphic-final.png" alt="Appendicies Graphs" className="bar-graph" />
    </div>
</template>

<style scoped>
    .business-plan {
        margin-left: 5%;
        margin-right: 5%;
        font-size: medium;
    }

    button {
        height: 10vw;
        width: 10vw;
        flex-shrink: 0;
        background-image: url("/images/pit_display_buttons_and_graphics/icon-with-border.png");
        background-position: center;
        background-size: cover;
        background-repeat: no-repeat;
        background-color: transparent;
        border: none;
        position: absolute;
        right: 0;
        bottom: 0;
        transition: transform 0.06s;
        text-align: center;
        font-family: "Bebas Neue";
        font-size: 16px;
        font-weight: bold;
        overflow-wrap: break-word;
    }

    button:active {
        transform: scale(1.1);
    }

    .image-right {
        display: block;
        margin-left: -5em;
        width: 100%;
        margin-bottom: 3em;
    }

    .image-center {
        display: block;
        margin-left: auto;
        margin-right: auto;
        width: 80%;
    }

    .image-left {
        display: block;
        margin-right: -5em;
        width: 100%;
        margin-bottom: 3em;
    }

    .bar-graph {
        display: block;
        margin-left: auto;
        margin-right: auto;
        width: 80%;
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
