<template>
        <!-- footer -->
    <footer class="p-0 p-sm-4 p-md-5 pt-0 wow animate__slideInUp" data-wow-duration="0.8s">
      <div class="bg-black rounded-5" style="max-width: 1600px !important;">
        <div class="px-2 py-5 p-sm-5">
          <div class="row g-2 justify-content-start justify-content-xl-between">
            <div class="col-lg-12 col-xl-3">
              <div class="px-2">
                <a class="d-flex flex-nowrap nav-link align-items-end text-light" href="#">
                  <img class="py-1" style="width: 50px;" v-bind:src="data.logo" alt="logo">
                  <span class="ms-2 fw-semibold fs-3 text-nowrap">Rental Vehicles</span>
                </a>
                <p class="text-light fs-6 mt-4">Experience the ease and convenience of renting a car with Novaride.</p>
                <h6 class="text-light mt-4">Subscribe</h6>
                <div class="d-flex gap-3 mt-3">
                  <a href="#youtube-channel" class="btn btn-square btn-outline-light rounded-circle"><i class="bi bi-youtube"></i></a>
                  <a href="#facebook-page" class="btn btn-square btn-outline-light rounded-circle"><i class="bi bi-facebook"></i></a>
                  <a href="#twitter-social" class="btn btn-square btn-outline-light rounded-circle"><i class="bi bi-twitter"></i></a>
                </div>
              </div>
            </div>
            <div class="col-auto">
              <div class="p-2">
                <h4 class="ms-2 mt-3 fw-semibold fs-4 text-light">Legal Policy</h4>
                <ul class="navbar-nav gap-0 mt-4 flex-column px-2">
                  <li class="nav-item">
                    <a class="nav-link text-light" href="contact.html">Contact</a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="col-auto">
              <div class="p-2">
                <h4 class="ms-2 mt-3 fw-semibold fs-4 text-light">Quick Links</h4>
                <ul class="navbar-nav gap-0 mt-4 flex-column px-2">
                  <li class="nav-item">
                    <a class="nav-link text-light" href="index.html">Home</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link text-light" href="about.html">About Us</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link text-light" href="#Coming-soon">Service</a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="col-12 col-md col-xl-3">
              <div class="p-2">
                <h4 class="ms-2 mt-3 fw-semibold fs-4 text-light">Give Feedback</h4>
                <form action="" class="row g-3 needs-validation mt-3 feedback-info" novalidate>
                  <div class="col-12">
                    <input type="email" class="form-control fs-6 py-2 px-3 shadow-none rounded-5 border-secondary border-opacity-50 bg-opacity-10 bg-light text-light" placeholder="Your Email" name="email" id="email1" autocomplete="email" required>
                  </div>
                  <div class="col-12">
                    <textarea name="message" class="form-control fs-6 py-2 px-3 rounded-5 shadow-none rounded-5 border-secondary border-opacity-50 bg-opacity-10 bg-light text-light" placeholder="Your Message" id="cmt1" required></textarea>
                  </div>
                  <div class="col-12">
                    <button type="submit" class="btn btn-outline-light rounded-pill py-2 mt-3 px-3 w-100">Submit</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
</template>

<script setup>
    import { reactive } from 'vue';

    import logo from '@/assets/images/logo-removebg.png'

    const data = reactive({
        link: [
            {telegram : '@yoeunchhaiya',facebook : 'https://www.facebook.com/'}
        ],
        logo: logo

    })
</script>