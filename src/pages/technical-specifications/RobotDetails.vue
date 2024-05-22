<script setup lang="ts">
    import "@google/model-viewer"
    import { ref } from "vue";
    const src = ref("./models/fullRobot.glb")
    const defaultCameraOrbit = "45deg 55deg 10m"
    const defaultCameraTarget = "auto auto auto"
    import { trackActions } from '../../components/InteractionTracker.ts';
    trackActions('pageSwitch','RobotDetails');
    const modelKey = ref(1);

    function changeModel(model: string) {
        src.value = `./models/${model}.glb`; 
        modelKey.value++;
    }

    function setCameraOrbit(orbit: string = defaultCameraOrbit) {
        document.querySelector('model-viewer')!.cameraOrbit = orbit;
    }

    function resetZoom() {
        document.querySelector('model-viewer')!.zoom(-1000);
        document.querySelector('model-viewer')!.cameraTarget = defaultCameraTarget;
    }
</script>

<template>
        <div className="robot-details">
            <h1>Robot Details</h1>
            <div className="modelview-container">
                <model-viewer 
                    id="reveal" loading="eager" 
                    auto-rotate 
                    poster="./images/pit_display_buttons_and_graphics/Loading_icon.gif" 
                    .src="src" 
                    shadow-intensity="1"
                    camera-orbit="45deg 55deg 10m" 
                    camera-target="auto auto auto" 
                    camera-controls interaction-prompt="none"
                    :key = "modelKey"
                /> 

                <div className="model-select-left">
                    <button @click="changeModel('fullRobot'); trackActions('switchModel', 'fullRobot')">FULL ROBOT</button>
                    <button @click="changeModel('drivetrain'); trackActions('switchModel', 'drivetrain')">DRIVETRAIN</button>
                    <button @click="changeModel('intake'); trackActions('switchModel', 'intake')">INTAKE</button>
                    <button @click="changeModel('shooter'); trackActions('switchModel', 'shooter')">SHOOTER</button>
                </div>
                
                <div className="model-select-right">
                    <button @click="changeModel('ampevator'); trackActions('switchModel', 'ampevator')">AMPEVATOR</button>
                    <button @click="changeModel('indexer'); trackActions('switchModel', 'indexer')">INDEXER</button>
                    <button @click="changeModel('climber'); trackActions('switchModel', 'climber')">CLIMBER</button>
                    <button @click="setCameraOrbit(); resetZoom()">RESET</button>
                </div>
            </div>
        </div>
</template>

<style scoped>
    .robot-details {
        display: flex;
        flex-direction: column;
        height: 100vh;
    }

    .robot-details model-viewer {
        margin: 0;
        padding: 0;
        height: 65%;
        width: 65%;
    }

    .modelview-container {
        display: flex;
        flex-direction: row;
        height: 100vh;
        justify-content: space-evenly;
        align-items: center;
    }

    .model-select-left {
        display: flex;
        position: fixed;
        flex-direction: column;
        padding-top: 10%;
        padding-bottom: 10%;
        left: 7%;
    }

    .model-select-right {
        display: flex;
        position: fixed;
        flex-direction: column;
        padding-top: 10%;
        padding-bottom: 10%;
        right: 7%;
    }

    .model-select-bottom {
        display: flex;
        position: fixed;
        flex-direction: column;
        padding-bottom: 1%;
        bottom: 10%;
    }

    .model-select-top {
        display: flex;
        position: fixed;
        flex-direction: column;
        padding-top: 1%;
        top: 30%;
    }

    button {
        height: 13vw;
        width: 13vw;
        flex-shrink: 0;
        font-size: 18px;
        font-family: "Bebas Neue";
        color: #6cbd45;
        background-position: center;
        background-size: cover;
        background-repeat: no-repeat;
        background-color: transparent;
        margin-top: 1em;
        margin-bottom: 1em;
        margin-left: -1em;
        margin-right: -1em;
        background-image: url("/images/pit_display_buttons_and_graphics/button-template.png");
        border: none;
        transition: transform .06s;
    }

    button:active {
        transform: scale(1.1);
    }
</style>
