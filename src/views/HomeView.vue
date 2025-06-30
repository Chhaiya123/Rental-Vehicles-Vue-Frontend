<script setup>
  import NavBar from './../components/NavBar.vue'
  import HeroBanner from '../components/HeroBanner.vue'
  import AboutSection from '../components/section/AboutSection.vue'
  import Categories from './../components/Categories.vue'
  import Popular from './../components/Popular.vue'
  import Footers from './../components/Footer.vue'
</script>

<template>
  <main>
    <NavBar/>
    <HeroBanner/>
    <AboutSection/>
    <Categories/>
    <Popular/>
    <!-- <Swiper/> -->
    <Footers/>

  </main>
</template>
