<template>
    <!-- section Vehicles [START] -->
    <section class="section vehicles py-10 px-sm-5">
      <div class="container-fluid" style="max-width: 1600px !important;">
        <div class="container mb-5">
          <div class="text-center">
            <div class="row justify-content-center">
              <div class="col col-md-10 col-lg-9 col-xl-6">
                <span class="text-primary fw-bolder d-block wow animate__slideInUp" data-wow-duration="1s"><i class="bi bi-caret-right-fill me-1"></i>Type Of Vehicles</span>
                <h1 class="display-6 m-auto my-3 text-dark fw-bolder hero-title wow animate__slideInUp" data-wow-duration="1s">
                  Choose from These Vehicle Categories
                </h1>
              </div>
            </div>
          </div>
        </div>
        <div class="row g-4">
          <div class="col-lg-4 col-xl-4" v-for="item in data.categories" :key="item.id">
            <div class="card bg-transparent position-relative wow animate__slideInUp" data-wow-duration="1s">
              <img class="cover" :src="item.cover" alt="photo">
              <div class="overlay"></div>
              <div class="card-body bg-dark text-center h-100 position-absolute top-0 start-0">
                <h4 class="card-title position-absolute top-0 start-0 m-5 wow animate__slideInUp" data-wow-duration="1.5s">{{ item.title }}</h4>
                <BtnOutlinePrimary to="/categories" :icon="arrowIcon"></BtnOutlinePrimary>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- section Vehicles [END] -->

</template>
<script setup>
    import { reactive } from 'vue';

    import motorcycleImg from '@/assets/images/category/motorcycle.jpg'
    import carImg from '@/assets/images/category/car.jpg'
    import vanImg from '@/assets/images/category/volkswagen.jpg'
    import arrowIcon from '@/assets/images/svg/arrow-white.svg'
    import BtnOutlinePrimary from './common/BtnOutlinePrimary.vue';
    
    const data = reactive({
        categories: [
            {
                id: 0,
                type: '/motorbike',
                title: 'MOTORBIKE',
                cover: motorcycleImg
            },
            {
                id: 1,
                type: '/cars',
                title: 'CAR',
                cover: carImg
            },
            {
                id: 2,
                type: '/van',
                title: 'VAN',
                cover: vanImg
            }
        ],
        btnIcon : arrowIcon
    })
</script>