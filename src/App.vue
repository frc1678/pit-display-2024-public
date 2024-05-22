<script setup lang="ts">
    import { app, BrowserWindow } from "electron";
    import { reactive, ref } from "vue";
    import { RouterLink, RouterView, routerViewLocationKey } from "vue-router";
    import NavBar from "./components/NavBar.vue";
    import { TouchAction } from "@google/model-viewer/lib/features/controls";
    setInterval(showButtonToTop);
    const showButton = ref(false);
    let buttonVisibility = "none";
    
    function pressedHomeButton(p: boolean) {
        showButton.value = p;
        console.log(showButton.value);
    }

    function showButtonToTop() {
        let topButton = document.getElementById("topBtn");
        if (document.body.scrollTop > 500 && document != null) {
            if (topButton != null) {
                topButton.style.display = "block";
            }
        } else {
            if (topButton != null) {
                topButton.style.display = "none";
            }
        }
    }

    function scrollToTop() {
        document.body.scrollTop = 0;
    }
</script>

<template>
    <router-link :to="{ path: '/pages/home' }" f id="homeBtn">
        <button
            :class="{ 'home-btn-hidden': !showButton, 'home-btn': showButton }"
            @click="pressedHomeButton(false)"
        />
    </router-link>

    <button f id="topBtn" :class="{ arrow: showButton, 'arrow-homepage': !showButton }" @click="scrollToTop()"/>
    <NavBar :show-button="showButton" @set-show-button="(s) => showButton =  s"/>
    <RouterView :show-button="showButton" @set-show-button="(s: boolean) => showButton =  s" />
    <ToTop path="App" />
</template>

<style scoped>
    .arrow {
        height: 12vw;
        width: 12vw;
        margin-left: 10em;
        margin-bottom: 0.5em;
        flex-shrink: 0;
        z-index: 1;
        background-image: url("/images/pit_display_buttons_and_graphics/back-to-top-button.png");
        background-position: center;
        background-size: cover;
        background-repeat: no-repeat;
        background-color: transparent;
        border: none;
        right: 100;
        bottom: 0;
        transition: transform 0.06s;
        position: absolute;
        text-align: center;
        font-family: "Bebas Neue";
        font-size: 16px;
        font-weight: bold;
        overflow-wrap: break-word;
    }

    .arrow-homepage {
        height: 12vw;
        width: 12vw;
        margin-left: 0.5em;
        margin-bottom: 0.5em;
        flex-shrink: 0;
        z-index: 1;
        background-image: url("/images/pit_display_buttons_and_graphics/back-to-top-button.png");
        background-position: center;
        background-size: cover;
        background-repeat: no-repeat;
        background-color: transparent;
        border: none;
        right: 100;
        bottom: 0;
        transition: transform 0.06s;
        position: absolute;
        text-align: center;
        font-family: "Bebas Neue";
        font-size: 16px;
        font-weight: bold;
        overflow-wrap: break-word;
    }

    .home-btn {
        height: 12vw;
        width: 12vw;
        margin-left: 0.5em;
        margin-bottom: 0.5em;
        flex-shrink: 0;
        z-index: 1;
        background-image: url("/images/pit_display_buttons_and_graphics/home-button.png");
        background-position: center;
        background-size: cover;
        background-repeat: no-repeat;
        background-color: transparent;
        border: none;
        right: 100;
        bottom: 0;
        transition: transform 0.06s;
        position: absolute;
        text-align: center;
        font-family: "Bebas Neue";
        font-size: 16px;
        font-weight: bold;
        overflow-wrap: break-word;
        display: block;
    }

    .home-btn-hidden {
        display: none;
    }
</style>
