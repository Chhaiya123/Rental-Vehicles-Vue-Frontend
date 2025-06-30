<template>
     <!-- section banner [START] -->
    <section class="px-0 px-sm-4 px-md-5">
      <div class="hero-banner bg-transparent">
        <video class="video wow animate__fadeIn" data-wow-duration="2s" autoplay muted loop>
          <source :src="Banner.video" type="video/mp4">
        </video>
        <div class="overlay py-5 px-3">
          <div class="text-center">
            <span class="text-primary d-block fw-bolder wow animate__slideInDown" data-wow-duration="1.5s"><i class="bi bi-caret-right-fill me-1"></i> Welcome To Car Rent</span>
            <h1 class="display-3 text-light fw-bolder hero-title wow animate__slideInUp" data-wow-duration="1s">
              Looking to save more on your rental car?
            </h1>
            <p class="hero-text text-light text-opacity-75 fs-6 wow animate__slideInUp" data-wow-duration="1.5s">
              Whether you’re planning a weekend getaway, a business trip, or just need a reliable ride for the day, we offers a wide range of vehicles to suit your needs.
            </p>
            <div class="d-flex gap-3 justify-content-center mt-4">
              <a href="booking-rental.html" class="btn px-4 py-2 btn-primary rounded-pill wow animate__fadeInUp" data-wow-duration="1s">Book A Rental</a>
              <a href="#coming-soon" class="btn px-4 py-2 btn-outline-light rounded-pill wow animate__fadeInUp" data-wow-duration="1s">Learn More</a>
            </div>
          </div>
        </div>
        <!-- Find Now -->
        <Filter/>
      </div>
    </section>
    <!-- section banner [END] -->
</template>

<script setup>
    import { reactive } from 'vue';

    import Filter from './Filter.vue';
    import video from '@/assets/videos/hero-banner.mp4'
    const Banner = reactive({
        video : video
    })

</script>