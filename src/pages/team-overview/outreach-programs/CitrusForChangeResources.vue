<template>
    <div className="citrus-for-change-resources">
        <h1>Citrus For Change Resources</h1>

        <img src="/images/outreach_programs/citrus-for-change-resources-placeholder.png" className="image" />

        <router-link :to="{path: '/team-overview/outreach-programs'}">
            <button class="return"/>
        </router-link>
    </div>
</template>

<style scoped>
    .section-header {
        text-align: center;
    }

    .description {
        text-align: center;
    }

    .paragraph {
        margin-left: 5%;
        margin-right: 9%;
    }

    .center {
        display: block;
        margin-left: auto;
        margin-right: auto;
        width: 80%;
    }

    .image {
        display: block;
        margin-left: auto;
        margin-right: auto;
        width: 50%;
    }
</style>
