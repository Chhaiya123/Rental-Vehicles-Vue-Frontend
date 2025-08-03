<template>
    <!-- navbar start -->
    <nav class="navbar navbar-expand-lg bg-white border-bottom border-light sticky-top py-4 wow animate__slideInDown" data-wow-duration="0.5s">
        <div class="container">
          <RouterLink class="navbar-brand d-flex align-items-end" to="/">
            <img class="py-1 wow animate__zoomIn" data-wow-duration="1s" style="width: 40px;" :src="data.logo" alt="logo">
            <span class="ms-2 fw-semibold fs-4">Rental <span class="text-puple">Vehicles</span></span>
          </RouterLink>
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
              <li class="nav-item" v-if="!guests">
                <RouterLink to="/signin" class="btn btn-outline-primary px-4 py-2 me-2 rounded-pill">Sign In</RouterLink>
                <RouterLink to="/signup" class="btn btn-primary px-4 py-2 rounded-pill">Sign Up</RouterLink>
              </li>
              <li class="nav-item" v-if="guests">
                <a class="btn btn-primary px-4 py-2 rounded-pill text-capitalize position-relative btn-booking" href="booking-rental.html">book a rental
                  <span class="pluss position-absolute top-0 end-0 translate-middle-y border border-3 shadow border-light rounded-circle">
                    <span class="visually-hidden">New alerts</span>
                  </span>
                </a>
              </li>
            </ul>
            <div class="dropdown ms-3" v-if="guests">
              <button class="btn btn-square btn-user-profile btn-outline-primary rounded-circle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                  <img class="user-profile" :src="users.image" alt="profile">
              </button>
              <ul class="dropdown-menu dropdown-menu-end mt-3">
                  <li><a class="dropdown-item" href="setting-info.html">Setting <i class="bi bi-gear ms-5 float-end"></i></a></li>
                  <li><a class="dropdown-item" href="notification.html">Notification <i class="bi bi-bell  float-end"></i></a></li>
                  <li class="border-1 border-top border-secondary">
                      <!-- <a class="dropdown-item text-danger" href="#logout" role="button" data-bs-toggle="modal" data-bs-target="#logout">Log Out <img width="16px" class="float-end mt-1" :src="IconLogut" alt=""></a> -->
                      <a class="dropdown-item text-danger" role="button" @click="openModal">Log Out <img width="16px" class="float-end mt-1" :src="IconLogut" alt=""></a>
                  </li>
              </ul>
            </div>
          </div>
        </div>
    </nav>
    <!-- navbar [END]-->
    <Modal name="fade" v-model="showModal"></Modal>
</template>

<script setup>

    import { reactive, ref } from 'vue';
    import { useRoute } from 'vue-router';

    import Cookies from 'js-cookie';
    import Modal from './common/Modal.vue';
    import logo from '@/assets/images/logo-removebg.png'
    import IconLogut from '@/assets/images/png/logout.png'


    const data = reactive({
      logo: logo
    })

    const showModal = ref(false)
    
    function openModal(){
      console.log(showModal.value = true)
      showModal.value = true
    }

    
    
    const route = useRoute()
    const guests = route.meta.requiresAuth

    
    const userName = Cookies.get('UserName')

    function getUserData(){
      if(guests){
        return reactive({
          user: userName || '',
          image: userName ? '../src/assets/images/user/09.jpg' : ''
        })
      }
    }

    const users = getUserData()

</script>