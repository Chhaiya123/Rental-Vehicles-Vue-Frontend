<template>
    
    <!-- section Pupolar [START] -->
    <section class="section py-10 px-sm-5">
      <div class="container-fluid" style="max-width: 1600px !important;">
        <div class="container">
          <div class="text-center">
            <div class="row justify-content-center">
              <div class="col col-md-10 col-lg-9 col-xl-6">
                <span class="text-primary fw-bolder d-inline-block wow animate__slideInUp" data-wow-duration="1s"><i class="bi bi-caret-right-fill me-1"></i> Popular Vehicles</span>
                <h1 class="display-6 m-auto my-3 text-dark fw-bolder hero-title wow animate__slideInUp" data-wow-duration="1s">
                  Explore our perfect and extensive fleet
                </h1>
              </div>
            </div>
          </div>
        </div>
        <swiper
            :slidesPerView="1"
            :spaceBetween="8"
            :loop="true" 
            :modules="[Navigation]"
            navigation
            :speed="800"
            :pagination="{
                clickable: true,
            }"
            :breakpoints="{
                '640': {
                    slidesPerView: 2,
                    spaceBetween: 20,
                },
                '768': {
                    slidesPerView: 2,
                    spaceBetween: 30,
                },
                '1024': {
                    slidesPerView: 2.8,
                    spaceBetween: 30,
                },
                '1200': {
                    slidesPerView: 3,
                    spaceBetween: 30,
                },
                '1400': {
                    slidesPerView: 4,
                    spaceBetween: 30,
                },
            }"
            class="mySwiper mt-5 pt-5" :style="boxStyle">

            <swiper-slide v-for="item in cars" :key="item.id">
                <CarCard :car="item"> </CarCard>
            </swiper-slide>
        </swiper>
      </div>
    </section>
    <!-- section Pupolar [END] -->
</template>

<script setup>
    import { reactive } from 'vue';
    import { Swiper, SwiperSlide } from 'swiper/vue';
    import CarCard from './car/CarCard.vue';
    import 'swiper/css';
    import 'swiper/css/navigation';
    import { Navigation } from 'swiper/modules';

    import iconDoor from '@/assets/images/svg/icon-door.svg'
    import iconPassengers from '@/assets/images/svg/icon-passengers.svg'
    const showCount = reactive([7])

    const cars = [
            {
                id: 0,
                image: 'src/assets/images/popular/Breeze-Compact.png',
                carType: 'Coup Car',
                title: 'Herrier Wagon',
                price: '168',
                options: [
                    {
                        id: 0,
                        title: 'Doors',
                        icon: iconDoor,
                        number: 4,
                        
                    },
                    {
                        id: 1,
                        title: 'Passengers',
                        icon: iconPassengers,
                        number: 2
                    },
                ]
            },
            {
                id: 1,
                image: 'src/assets/images/popular/Eclipse-Sedan.png',
                carType: 'Coup Car',
                title: 'Herrier Wagon',
                price: '168',
                options: [
                    {
                        id: 0,
                        title: 'Doors',
                        icon: iconDoor,
                        number: 4
                    },
                    {
                        id: 1,
                        title: 'Passengers',
                        icon: iconPassengers,
                        number: 2
                    },
                ]
            },
            {
                id: 2,
                image: 'src/assets/images/popular/Harrier-Wagon.png',
                carType: 'Coup Car',
                title: 'Herrier Wagon',
                price: '168', 
                options: [
                    {
                        id: 0,
                        title: 'Doors',
                        icon: iconDoor,
                        number: 4
                    },
                    {
                        id: 1,
                        title: 'Passengers',
                        icon: iconPassengers,
                        number: 2
                    },
                ]
            },
            {
                id: 3,
                image: 'src/assets/images/popular/Sapphire-Convertible.png',
                carType: 'Coup Car',
                title: 'Herrier Wagon',
                price: '168', 
                options: [
                    {
                        id: 0,
                        title: 'Doors',
                        icon: iconDoor,
                        number: 4
                    },
                    {
                        id: 1,
                        title: 'Passengers',
                        icon: iconPassengers,
                        number: 2
                    },
                ]
            },
            {
                id: 4,
                image: 'src/assets/images/popular/Viper-SXT.png',
                carType: 'Coup Car',
                title: 'Herrier Wagon',
                price: '168', 
                options: [
                    {
                        id: 0,
                        title: 'Doors',
                        icon: iconDoor,
                        number: 4
                    },
                    {
                        id: 1,
                        title: 'Passengers',
                        icon: iconPassengers,
                        number: 2
                    },
                ]
            },
            {
                id: 5,
                image: 'src/assets/images/popular/Voyager-GT.png',
                carType: 'Coup Car',
                title: 'Herrier Wagon',
                price: '168', 
                options: [
                   {
                        id: 0,
                        title: 'Doors',
                        icon: iconDoor,
                        number: 4
                    },
                    {
                        id: 1,
                        title: 'Passengers',
                        icon: iconPassengers,
                        number: 2
                    },
                ]
            },
            {
                id: 6,
                image: 'src/assets/images/popular/Voyager-Hybrid.png',
                carType: 'Coup Car',
                title: 'Herrier Wagon',
                price: '168', 
                options: [
                   {
                        id: 0,
                        title: 'Doors',
                        icon: iconDoor,
                        number: 4
                    },
                    {
                        id: 1,
                        title: 'Passengers',
                        icon: iconPassengers,
                        number: 2
                    },
                ]
            }

        ]
    
    const boxStyle = {
        paddingBottom: '100px',
    }

</script>

