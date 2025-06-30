<template>
    <NavBar/>
    <MiniBanner to="/" :title="route.name" :backgroundImage="BgBanner" ></MiniBanner>
    <AboutSection/>
    <Footers/>
</template>
<script setup>
    import { useRoute } from 'vue-router';
    import NavBar from '@/components/NavBar.vue';
    import MiniBanner from '@/components/MiniBanner.vue';
    import AboutSection from '@/components/section/AboutSection.vue';
    import Footers from '@/components/Footer.vue';

    import BgBanner from '@/assets/images/MiniBanner.jpg'

    const route = useRoute()
</script>