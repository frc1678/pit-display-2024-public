<script setup lang="ts">
    import { trackActions } from '../../components/InteractionTracker.ts';
    trackActions('pageSwitch','ElectricalDiagrams');
</script>

<template>
    <div className="electrical-diagrams">
        <h1 class="margin">Electrical Diagrams</h1>
        <hr class="solid">

        <h2>2024 Robot Bellypan Diagram</h2>
        <hr class="solid">
        
        <br>
        <br>
        <br>
        <img src="/images/electrical_images/nik-bellypan-diagram.png" alt="Electrical Diagram Image 1" className="center" />
        
        <hr class="solid">
        <br>
        <br>
    </div>
</template>

<style scoped>
    .margin {
        margin-bottom: -0.25em;
    }
    
    .center {
        display: block;
        margin-left: auto;
        margin-right: auto;
        width: 80%;
    }

    img {
        margin-bottom: 5em;
    }

    hr.solid {
        border-top: 0.1em solid;
        width: 52.5em;
        margin-top: 2em;
        margin-bottom: -1em;
    }   
</style>