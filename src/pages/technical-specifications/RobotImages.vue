<script setup lang="ts">
    import { trackActions } from '../../components/InteractionTracker.ts';
    trackActions('pageSwitch','RobotImages');
</script>

<template>
    <div className="robot-images">
        <h1>2024 Robot Images</h1>

        <img src="/images/robot_image/robot-images-1.jpg" class="center"/>
        <p class = "captions">"1678 mentor and students testing out shooting prototype."</p>

        <img src="/images/robot_image/robot-images-3.jpg" class="center"/>
        <p class = "captions">"Design and electrical members working on Epsilon, our second prototype."</p>

        <img src="/images/robot_image/robot-images-4.jpg" class="center"/>
        <p class = "captions">"Members of 1678 assembling shooter."</p>

        <img src="/images/robot_image/robot-images-5.jpg" class="center"/>
        <p class = "captions">"Epsilon, scoring into the trap."</p>

        <img src="/images/robot_image/robot-images-6.jpg" class="center"/>
        <p class = "captions">"Nik, scoring into the trap, during the Silicon Valley Regional."</p>

        <img src="/images/robot_image/robot-images-7.jpg" class="center"/>
        <p class = "captions">"Nik in action."</p>
        
        <img src="/images/robot_image/robot-images-8.jpg" class="center"/>
        <p class = "captions">"Close-up view of Nik."</p>

        <img src="/images/robot_image/robot-images-9.jpg" class="center"/>
        <p class = "captions">"Close-up view of sponsor panel."</p>

        <img src="/images/robot_image/robot-images-10.jpg" class="center"/>
        <p class = "captions">"Detailed view of shooter."</p>

        <img src="/images/robot_image/robot-images-11.jpg" class="center"/>
        <p class = "captions">"Different angle of Nik."</p>

        <img src="/images/robot_image/robot-images-12.jpg" class="center"/>
        <p class = "captions">"Upper perspective of the shooter."</p>

        <img src="/images/robot_image/robot-images-13.jpg" class="center"/>
        <p class = "captions">"Close-up view of Nik."</p>

        <img src="/images/robot_image/robot-images-14.jpg" class="center"/>
        <p class = "captions">"Close-up view of Amp scoring mechanism."</p>

        <img src="/images/robot_image/robot-images-15.jpg" class="center"/>
        <p class = "captions">"Nik, in action, during practice match of the Sacramento Regional."</p>

        <img src="/images/robot_image/robot-images-16.jpg" class="center"/>
        <p class = "captions">"Nik scoring in trap during endgame."</p>

        <img src="/images/robot_image/robot-images-17.png" class="center"/>
        <p class = "captions">"Nik, in the stage zone, getting ready to score in the trap."</p>

        <img src="/images/robot_image/robot-images-18.png" class="center"/>
        <p class = "captions">"Nik, scoring in amp, during a qualification match of the East Bay Regional."</p>
        
        <br>
        <br>
        <br>
    </div>
</template>

<style scoped>
    .center {
        display: block;
        margin-left: auto;
        margin-right: auto;
        width: 90%;
        margin-top: 3.5em;
        margin-bottom: 3.5em;
    }
</style>
