<template>
    <NavBar/>
    <MiniBanner to="/" title="Sedan Car" :backgroundImage="bgCover"></MiniBanner>


        <section class="section py-10 px-1 px-sm-4 px-md-5">
        <div class="container">
            <div class="row gy-5 g-md-5">
                <div class="col-lg-4">
                    <div class="card rounded-5 border-secondary border-opacity-75 bg-secondary bg-opacity-25 position-sticky wow animate__slideInUp" data-wow-duration="0.8s" style="top: 140px;">
                        <div class="card-body p-5">
                            <h1 class="d-inline fw-semibold
                            ">$248</h1><span class="small d-inline">/Per Day</span>

                            <hr class="border border-secondary border-1 my-4 opacity-50">
                            
                            <div class="mt-2 mb-4 fs-6 d-flex justify-content-between align-items-center">
                                <span class="text-muted">
                                    <img width="22px" class="me-3" :src="iconDoor" alt="svg">
                                    Doors
                                </span>
                                <span class="text-muted">4</span>
                            </div>
                            <div class="mt-2 mb-4 fs-6 d-flex justify-content-between align-items-center">
                                <span class="text-muted">
                                    <img width="22px" class="me-3" :src="iconPassengers" alt="svg">
                                    Passengers
                                </span>
                                <span class="text-muted">2</span>
                            </div>
                            <div class="mt-2 mb-4 fs-6 d-flex justify-content-between align-items-center">
                                <span class="text-muted">
                                    <img width="22px" class="me-3" :src="iconTransmission" alt="svg">
                                    Transmission
                                </span>
                                <span class="text-muted">Auto</span>
                            </div>
                            <div class="mt-2 mb-4 fs-6 d-flex justify-content-between align-items-center">
                                <span class="text-muted">
                                    <img width="22px" class="me-3" :src="iconAge" alt="svg">
                                    Age
                                </span>
                                <span class="text-muted">6</span>
                            </div>
                            <div class="mt-2 mb-4 fs-6 d-flex justify-content-between align-items-center">
                                <span class="text-muted">
                                    <img width="22px" class="me-3" :src="iconBags" alt="svg">
                                    Luggage
                                </span>
                                <span class="text-muted">1</span>
                            </div>
                            <div class="mt-2 fs-6 d-flex justify-content-between align-items-center">
                                <span class="text-muted">
                                    <img width="22px" class="me-3" :src="iconAircondition" alt="svg">
                                    Air Condition
                                </span>
                                <span class="text-muted">Yes</span>
                            </div>
                           
                            <hr class="border border-secondary border-1 my-4 opacity-50">
                            <div class="d-flex align-items-center justify-content-between w-100">
                                <a class="btn btn-primary fw-bolder px-4 py-2 rounded-pill" href="stape1-cars-book-now.html" role="button">Book Now</a>                           
                                <span>OR</span>
                                <a class="btn btn-square btn-primary fw-bolder rounded-circle" href="contact.html" role="button"><i class="bi bi-chat-text fs-5"></i></a>
                            </div>                           
                        </div>
                    </div>
                </div>
                <div class="col-lg-8">
                    <div class="row gy-5 g-md-5">
                        <div class="col-12">
                            <div class="card rounded-5 border-secondary border-opacity-75 overflow-hidden wow animate__slideInUp" data-wow-duration="1s">
                                <div class="card-body p-0">
                                    <div id="carouselExampleSlidesOnly" class="carousel sedan slide" data-bs-ride="carousel" data-bs-pause="true" data-bs-interval="3000">
                                        <div class="carousel-indicators">
                                            <button type="button" v-for="item in data.slide" data-bs-target="#carouselExampleSlidesOnly" :data-bs-slide-to="item.id" :class="item.id ? '' : 'active'" aria-current="true" aria-label="Slide 1"></button>
                                            <!-- <button type="button" data-bs-target="#carouselExampleSlidesOnly" data-bs-slide-to="1" aria-label="Slide 2"></button>
                                            <button type="button" data-bs-target="#carouselExampleSlidesOnly" data-bs-slide-to="2" aria-label="Slide 3"></button>
                                            <button type="button" data-bs-target="#carouselExampleSlidesOnly" data-bs-slide-to="3" aria-label="Slide 4"></button> -->
                                        </div>
                                        <div class="carousel-inner">
                                            <div :class="item.id ? 'carousel-item' : 'carousel-item active'" v-for="item in data.slide" :key="item.id">
                                                <img :src="item.image" class="d-block w-100" height="520px" alt="...">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-12">
                            <div class="card rounded-5 border-secondary border-opacity-75 bg-secondary bg-opacity-25 wow animate__slideInUp" data-wow-duration="1.5s">
                                <div class="card-body">
                                    <div class="list-group list-group-horizontal bg-transparent flex-column flex-md-row">
                                        <div class="list-group-item d-flex align-items-center gap-4 border-0 bg-transparent wow animate__slideInUp" data-wow-duration="1.3s">
                                            <i class="bi bi-speedometer fs-1 text-primary opacity-50"></i>
                                            <div>
                                                <h5 class="h5">Unlimited KMs</h5>
                                                <p class="fs-6 mb-0 text-muted small">Endless Km with no extra charge</p>
                                            </div>
                                        </div>
                                        <div class="list-group-item d-flex align-items-center gap-4 border-0 bg-transparent wow animate__slideInUp" data-wow-duration="1.3s">
                                            <i class="bi bi-shield-lock fs-1 text-primary opacity-50"></i>
                                            <div>
                                                <h5 class="h5">Unlimited KMs</h5>
                                                <p class="fs-6 mb-0 text-muted small">Endless Km with no extra charge</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-12">
                            <!-- ---item-- -->
                            <div class="item pb-4 mb-5 border-bottom border-secondary border-opacity-75">
                                <div class="text-light">
                                   <span class="text-primary fw-bolder d-block wow animate__slideInUp" data-wow-duration="0.8s"><i class="bi bi-caret-right-fill me-1"></i>General Information</span>
                                   <h1 class="h1 m-auto mt-3 text-dark fw-bolder wow animate__slideInUp" data-wow-duration="0.8s">
                                       Know about our car service
                                   </h1>
                                   <p class="text-muted mt-4 wow animate__slideInUp" data-wow-duration="0.8s">Lorem pretium fermentum quam, sit amet cursus ante sollicitudin velen morbi consesua the miss sustion consation porttitor orci sit amet iaculis nisan. Lorem pretium fermentum quam sit amet cursus ante sollicitudin velen fermen morbinetion consesua the risus consequation the porttiton.</p>
                                </div>
                                <ul class="list-unstyled d-flex flex-column gap-2 mt-4">
                                    <li class="list-group-item wow animate__slideInUp" data-wow-duration="1.3s">
                                        <a href="#" class="link-dark nav-link"><i class="bi bi-check-circle-fill me-3 text-primary opacity-75"></i> 24/7 Roadside Assistance</a>
                                    </li>
                                    <li class="list-group-item wow animate__slideInUp" data-wow-duration="1.3s">
                                        <a href="#" class="link-dark nav-link"><i class="bi bi-check-circle-fill me-3 text-primary opacity-75"></i> Free Cancellation & Return</a>
                                    </li>
                                    <li class="list-group-item wow animate__slideInUp" data-wow-duration="1.3s">
                                        <a href="#" class="link-dark nav-link"><i class="bi bi-check-circle-fill me-3 text-primary opacity-75"></i> Rent Now Pay When You Arrive</a>
                                    </li>
                                </ul>
                            </div>
                            <!-- ---item-- -->
                            <div class="item pb-4 mb-5 border-bottom border-secondary border-opacity-75">
                                <div class="text-light">
                                   <span class="text-primary fw-bolder d-block wow animate__slideInUp" data-wow-duration="0.8s"><i class="bi bi-caret-right-fill me-1"></i>Amenities</span>
                                   <h1 class="h1 m-auto mt-3 text-dark fw-bolder wow animate__slideInUp" data-wow-duration="0.8s">
                                       Premium amenities and features
                                   </h1>
                                </div>
                                <ul class="row g-3 list-unstyled mt-4 wow animate__slideInUp" data-wow-duration="1.3s">
                                    <li class="col-6 col-md-4 col-lg-3">
                                        <a href="#" class="link-dark nav-link"><i class="bi bi-check-circle-fill me-2 text-primary opacity-75"></i>Music System</a>
                                    </li>
                                    <li class="col-6 col-md-4 col-lg-3">
                                        <a href="#" class="link-dark nav-link"><i class="bi bi-check-circle-fill me-2 text-primary opacity-75"></i>Toolkit</a>
                                    </li>
                                    <li class="col-6 col-md-4 col-lg-3">
                                        <a href="#" class="link-dark nav-link"><i class="bi bi-check-circle-fill me-2 text-primary opacity-75"></i>Abs System</a>
                                    </li>
                                    <li class="col-6 col-md-4 col-lg-3">
                                        <a href="#" class="link-dark nav-link"><i class="bi bi-check-circle-fill me-2 text-primary opacity-75"></i>Bluetooth</a>
                                    </li>
                                    <li class="col-6 col-md-4 col-lg-3">
                                        <a href="#" class="link-dark nav-link"><i class="bi bi-check-circle-fill me-2 text-primary opacity-75"></i>Full Boot Space</a>
                                    </li>
                                    <li class="col-6 col-md-4 col-lg-3">
                                        <a href="#" class="link-dark nav-link"><i class="bi bi-check-circle-fill me-2 text-primary opacity-75"></i>Usb Charger</a>
                                    </li>
                                    <li class="col-6 col-md-4 col-lg-3">
                                        <a href="#" class="link-dark nav-link"><i class="bi bi-check-circle-fill me-2 text-primary opacity-75"></i>Aux Input</a>
                                    </li>
                                    <li class="col-6 col-md-4 col-lg-3">
                                        <a href="#" class="link-dark nav-link"><i class="bi bi-check-circle-fill me-2 text-primary opacity-75"></i>Spare Tyre</a>
                                    </li>
                                    <li class="col-6 col-md-4 col-lg-3">
                                        <a href="#" class="link-dark nav-link"><i class="bi bi-check-circle-fill me-2 text-primary opacity-75"></i>Power Steering</a>
                                    </li>
                                    <li class="col-6 col-md-4 col-lg-3">
                                        <a href="#" class="link-dark nav-link"><i class="bi bi-check-circle-fill me-2 text-primary opacity-75"></i>Power Windows</a>
                                    </li>
                                </ul>
                            </div>
                            <!-- ---item-- -->
                            <div class="item">
                                <div class="text-light">
                                   <span class="text-primary fw-bolder d-block wow animate__slideInUp" data-wow-duration="0.8s"><i class="bi bi-caret-right-fill me-1"></i>Rental Conditions</span>
                                   <h1 class="h1 m-auto mt-3 text-dark fw-bolder wow animate__slideInUp" data-wow-duration="0.8s">
                                       Policies and agreement
                                   </h1>
                                </div>
                                <div class="accordion d-flex flex-column gap-4 mt-5" id="accordionExample">
                                    <div class="accordion-item wow animate__slideInUp" data-wow-duration="1.3s">
                                        <h2 class="accordion-header">
                                        <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#Conditions1" aria-expanded="true" aria-controls="collapseOne">
                                            Driver's License Requirements
                                        </button>
                                        </h2>
                                        <div id="Conditions1" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                                            <div class="accordion-body">
                                                It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal
                                            </div>
                                        </div>
                                    </div>
                                    <div class="accordion-item wow animate__slideInUp" data-wow-duration="1.3s">
                                        <h2 class="accordion-header">
                                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#Conditions2" aria-expanded="false" aria-controls="collapseTwo">
                                            Insurance and Coverage policy
                                        </button>
                                        </h2>
                                        <div id="Conditions2" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                            <div class="accordion-body">
                                                It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal.
                                            </div>
                                        </div>
                                    </div>
                                    <div class="accordion-item wow animate__slideInUp" data-wow-duration="1.3s">
                                        <h2 class="accordion-header">
                                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#Conditions3" aria-expanded="false" aria-controls="collapseThree">
                                            Available payment Methods
                                        </button>
                                        </h2>
                                        <div id="Conditions3" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                            <div class="accordion-body">
                                                It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal.
                                            </div>
                                        </div>
                                    </div>
                                    <div class="accordion-item wow animate__slideInUp" data-wow-duration="1.3s">
                                        <h2 class="accordion-header">
                                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#Conditions4" aria-expanded="false" aria-controls="collapseThree">
                                            Cancellation and Modification policy
                                        </button>
                                        </h2>
                                        <div id="Conditions4" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                            <div class="accordion-body">
                                                It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal.
                                            </div>
                                        </div>
                                    </div>
                                    <div class="accordion-item wow animate__slideInUp" data-wow-duration="1.3s">
                                        <h2 class="accordion-header">
                                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#Conditions5" aria-expanded="false" aria-controls="collapseThree">
                                            Smoking and Pet Policies
                                        </button>
                                        </h2>
                                        <div id="Conditions5" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                            <div class="accordion-body">
                                                It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal.
                                            </div>
                                        </div>
                                    </div>
                                    <div class="accordion-item wow animate__slideInUp" data-wow-duration="1.3s">
                                        <h2 class="accordion-header">
                                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#Conditions6" aria-expanded="false" aria-controls="collapseThree">
                                            The minimum age Requirements
                                        </button>
                                        </h2>
                                        <div id="Conditions6" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                            <div class="accordion-body">
                                                It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal.
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <Footers/>

</template>

<script setup>
    import { reactive } from 'vue';

    import NavBar from '@/components/NavBar.vue';
    import MiniBanner from '@/components/MiniBanner.vue';
    import Footers from '@/components/Footer.vue';

    import iconDoor from '@/assets/images/svg/icon-door.svg'
    import iconPassengers from '@/assets/images/svg/icon-passengers.svg'
    import iconArrow from '@/assets/images/svg/arrow-white.svg'
    import iconDash from '@/assets/images/svg/dash.svg'
    import iconAge from '@/assets/images/svg/icon-age.svg'
    import iconAircondition from '@/assets/images/svg/icon-aircondition.svg'
    import iconBags from '@/assets/images/svg/icon-bags.svg'
    import iconTransmission from '@/assets/images/svg/icon-transmission.svg'
    import iconPerson from '@/assets/images/svg/person-bounding-box.svg'
    import iconPlus from '@/assets/images/svg/plus-lg.svg'

    import bgCover from '@/assets/images/MiniBanner.jpg'

    const data = reactive({
        slide:[
            {   id:0,
                image: '/src/assets/images/sedan/car-slide1.jpg'
            },
            {
                id:1,
                image: '/src/assets/images/sedan/car-slide2.jpg'
            },
            {
                id:2,
                image: '/src/assets/images/sedan/car-slide3.jpg'
            },
            {
                id:3,
                image: '/src/assets/images/sedan/car-slide4.jpg'
            }
        ]
    })

</script>