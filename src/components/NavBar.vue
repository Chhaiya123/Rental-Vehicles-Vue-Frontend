<template>
    <!-- navbar start -->
    <nav class="navbar navbar-expand-lg bg-white border-bottom border-light sticky-top py-4 wow animate__slideInDown" data-wow-duration="0.5s">
        <div class="container">
          <a class="navbar-brand d-flex align-items-end" href="index.html">
            <img class="py-1 wow animate__zoomIn" data-wow-duration="1s" style="width: 40px;" :src="data.logo" alt="logo">
            <span class="ms-2 fw-semibold fs-4">Rental <span class="text-puple">Vehicles</span></span>
          </a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ms-auto mb-2 mb-lg-0 gap-4 align-items-center">
              <li class="nav-item">
                <RouterLink class="nav-link active" to="/">Home</RouterLink>
              </li>
              
              <li class="nav-item dropdown">
                <a class="nav-link" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Types of Vehicles <i class="bi bi-chevron-down"></i>
                </a>
                <ul class="dropdown-menu">
                    <li><a class="dropdown-item" href="#Motorbike-page">Motorbike  <i class="bi bi-bicycle float-end"></i></a></li>
                    <li><RouterLink class="dropdown-item" to="/carslist">Cars <i class="bi bi-car-front float-end"></i></RouterLink></li>
                    <li><a class="dropdown-item" href="#Van-page">Van <i class="bi bi-bus-front float-end"></i></a></li>
                </ul>
              </li>
              <li class="nav-item">
                <RouterLink class="nav-link" to="/contact">Contact</RouterLink>
              </li>
              <li class="nav-item">
                <a class="btn btn-outline-primary px-4 py-2 me-2 rounded-pill" href="sign-in.html">Sign In</a>
                <a class="btn btn-primary px-4 py-2 rounded-pill" href="sign-up.html">Sign Up</a>
              </li>
            </ul>
          </div>
        </div>
    </nav>
    <!-- navbar [END]-->
</template>

<script setup>

    import { reactive } from 'vue';

    import logo from '@/assets/images/logo-removebg.png'

    const data = reactive({
      logo: logo
    })

</script>