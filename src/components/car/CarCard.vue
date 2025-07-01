<template>
    <div class="card rounded-5 border-secondary border-opacity-50 wow animate__slideInUp" data-wow-duration="1s">
        <img class="img-fluid" :src="car.image" alt="photo">
        <div class="card-body text-start p-0">
            <span class="badge fw-semibold text-dark bg-secondary bg-opacity-50 px-3 py-2 rounded-pill">{{ car.carType }}</span>
            <span class="badge fw-semibold text-dark bg-secondary bg-opacity-50 px-3 py-2 rounded-pill ms-2">1/7 Cars</span>
            <h5 class="cart-title mt-3 mb-4">{{ car.title }}</h5>
            <div class="mt-2 fs-6 d-flex justify-content-between align-items-center" v-for="option in car.options" :key="option.id">
                <span class="text-muted">
                <img width="24px" class="me-1" :src="option.icon" alt="door">
                {{ option.title }}
                </span>
                <span class="text-muted">{{ option.number }}</span>
            </div>
            <div class="card-footer border-secondary border-opacity-75 mt-4 px-0 pt-4 pb-0">
                <ul class="list-unstyled d-flex justify-content-between align-items-center mb-0">
                    <li><span class="fs-4 fw-bold">${{ car.price }}</span><span class="fw-medium small text-dark">/Per day</span></li>
                    <li>
                        <BtnPrimary to="/car/detail" :icon="nextIcon"></BtnPrimary>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script setup>
    import nextIcon from '@/assets/images/svg/arrow-white.svg'
    import BtnPrimary from '../common/BtnPrimary.vue';
    defineProps(['car'])

</script>