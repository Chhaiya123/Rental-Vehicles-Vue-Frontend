<template>
    <div class="find-cars d-flex align-items-center w-100 p-0"> 
        <div class="rounded-5 bg-white shadow-sm w-100 m-auto wow animate__fadeInUp" data-wow-duration="1.5s" style="max-width: 1600px !important;">
            <div class="card border-0 w-100 bg-transparent">
                <div class="card-body">
                    <form class="row g-3 align-items-center">
                        <div class="col-12 col-md-6 col-lg-12 col-xl-2">
                            <h5 class="lhignt-2 pt-1">Need to Rent a Luxury Car ?</h5>
                        </div>
                        <div class="col-12 col-md-6 col-lg-4 col-xl" v-for="item in find" :key="item.id">
                            <div class="border-1 border-start px-3">
                                <label :for="item.id" class="form-label">{{ item.label }}</label>
                                <select class="form-select" :id="item.id" autocomplete="form-select">
                                    <option selected>. . .</option>
                                    <option value="1" v-for="op in item.options">{{ op.option }}</option>
                                </select>
                            </div>
                        </div>
                        <div class="col-12 col-xl-auto">
                            <RouterLink to="" class="btn w-100 btn-primary h-100 px-4 py-2 rounded-pill fs-6"><i class="bi bi-search me-2"></i> Find Now</RouterLink>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>

    import { reactive } from 'vue';

    const find = [
        {
            id: 0,
            label: 'Branch location',
            options: [
                {option: 'Phnom Penh'},
                {option: 'Battambang'},
                {option: 'Siem Reap'},
            ]
        },
        {
            id: 1,
            label: 'Types of Vehicles',
            options: [
                {option: 'Motorbike'},
                {option: 'Cars'},
                {option: 'Van'},
            ]
        },
        {
            id: 2,
            label: 'Brand of Vehicles',
            options: [
                {option: 'HONDA Dream'},
                {option: 'HONDA Scroopy'},
                {option: 'HONDA Click'},
                {option: 'HONDA Zoomer'},
                {option: 'HONDA ADV'},
                {option: 'HONDA Bead'},
                {option: 'SUV'},
                {option: 'Pickup'},
                {option: 'Sedan'},
                {option: 'Coupe'},
            ]
        }
    ]
   


</script>