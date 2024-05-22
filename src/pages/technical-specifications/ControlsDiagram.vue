<script setup lang="ts">
    import { trackActions } from '../../components/InteractionTracker.ts';
    trackActions('pageSwitch','ControlsDiagram');
</script>

<template>
    <div className="controls-diagram">
        <h1>Controls Diagram</h1>
    </div>
</template>

<style scoped>
    .center {
        display: block;
        margin-left: auto;
        margin-right: auto;
        width: 80%;
    }
    
    img {
        margin-bottom: 5em;
    }
</style>
