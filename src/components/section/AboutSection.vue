<template>
    <!-- section about [START] -->
    <section class="section about py-10 px-sm-5">
      <div class="container-fluid pt-5" style="max-width: 1600px !important;">
        <div class="row gy-5 g-sm-5 justify-content-center justify-content-xl-start">
          <div class="col-12 col-lg-10 col-xl-6">
            <div class="h-100 position-relative">
              <img class="about-cover-1 object-fit-cover rounded-pill wow animate__slideInUp" data-wow-duration="1s" :src="data.cover[0].cover1" alt="jpg">
              <img class="about-cover-2 object-fit-cover rounded-pill position-absolute me-4 wow animate__slideInUp" data-wow-duration="1s" :src="data.cover[0].cover2" alt="jpg">
              <img class="object-fit-cover rounded-pill position-absolute  start-50 ms-5 top-0 wow animate__slideInUp" data-wow-duration="1s" width="80px" :src="data.cover[0].cover3" alt="jpg">
            </div>
          </div>
          <div class="col-12 col-xl-6">
            <div class="card py-5 border-0 bg-transparent">
              <span class="text-primary fw-bolder wow animate__slideInUp" data-wow-duration="1s"><i class="bi bi-caret-right-fill me-1"></i> About Us</span>
              <h1 class="display-6 fw-bold mb-4 mt-3 wow animate__slideInUp" data-wow-duration="1s">Your trusted partner in reliable car rental</h1>
              <p class="text-muted fs-6 fw-medium mb-5 wow animate__slideInUp" data-wow-duration="1s">Aqestic Optio Amet A Ququam Saepe Aliquid Voluate Dicta Fuga Dolor Saerror Sed Earum A Magni Soluta Quam Minus Dolor Dolor</p>
              <div class="list-group gap-3 list-group-flush p-0">
                <div v-for="item in data.items" :key="item.id" class="list-group-item list-group-item-action bg-transparent px-0 d-flex align-items-start gap-4  wow animate__slideInUp" data-wow-duration="1s">
                  <img width="70px" :src="item.image" alt="photo">
                  <div>
                    <h5 class="mb-1 fw-semibold">{{ item.title }}</h5>
                    <p class="text-muted mt-2">{{ item.subTitle }}</p>
                  </div>
                </div>
              </div>
              <div class="wow animate__slideInUp" data-wow-duration="1s">
                <a href="contact.html" class="btn btn-primary px-4 py-2 rounded-pill mt-4">Contact Us <i class="bi bi-arrow-right ms-3"></i></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- section about [END] -->
</template>

<script setup>
    import { reactive } from 'vue';

    import cover1 from '@/assets/images/about/car.jpg'
    import cover2 from '@/assets/images/about/motorcycle.jpg'
    import cover3 from '@/assets/images/about/right-down.png'
    import images1 from '@/assets/images/about/booking.png'
    import images2 from '@/assets/images/about/convenience.png'

    const data = reactive({
        cover: [
            {
                cover1: cover1,
                cover2: cover2,
                cover3: cover3
            }
        ],
        title: 'Your trusted partner in reliable car rental',
        subTitle: 'Aqestic Optio Amet A Ququam Saepe Aliquid Voluate Dicta Fuga Dolor Saerror Sed Earum A Magni Soluta Quam Minus Dolor Dolor',
        items: [
            {
                id: 0,
                image: images1,
                title: 'Easy Booking Process',
                subTitle: 'We Have Optimized The Booking Process So That Our Clients Can Experience The Easiest And The Safest Service'
            },
            {
                id: 1,
                image: images2,
                title: 'Convenient Pick-Up & Return Process',
                subTitle: 'We Have Optimized The Booking Process So That Our Clients Can Experience The Easiest And The Safest Service'
            }
        ]
    })
</script>