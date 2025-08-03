<template>
        <section class="auth-section">
        <div class="container-md h-100 px-0">
            <div class="row g-0">
                <div :class="['col-md-10 col-lg-8 m-auto', $route.name==='Sign Up' ? 'col-xl-6' : 'col-xl-5']">
                    <div class="card border-0 bg-light wow animate__zoomIn" data-wow-duration="0.2s">
                        <div class="d-flex align-items-start gap-3">
                            <h3 class="card-title">SIGN IN </h3>
                            <img width="40px" class="d-block wow animate__tada" data-wow-duration="1.5s" :src="WavingHand" alt="">
                        </div>
                        <p class="card-text">
                            welcome sign in about Rental Vehicles
                        </p>
                        <slot name="form"></slot>
                    </div>
                </div>
            </div>
        </div>
    </section>

</template>

<script setup>
    import WavingHand from '@/assets/images/Waving_hand.webp'
    
</script>