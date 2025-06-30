<template>
    <div class="find-cars d-flex align-items-center w-100 p-0"> 
        <div class="rounded-5 bg-white shadow-sm w-100 m-auto wow animate__fadeInUp" data-wow-duration="1.5s" style="max-width: 1600px !important;">
            <div class="card border-0 w-100 bg-transparent">
                <div class="card-body">
                    <form class="row g-3 align-items-center">
                        <div class="col-12 col-md-6 col-lg-12 col-xl-2">
                            <h5 class="lhignt-2 pt-1">{{ find.title }}</h5>
                        </div>
                        <div class="col-12 col-md-6 col-lg-4 col-xl" v-for="box in find.labels">
                            <div class="border-1 border-start px-3">
                                <label for="location" class="form-label">{{ box.label }}</label>
                                <select class="form-select">
                                    <option selected>. . .</option>
                                    <option value="1">{{ locations.location }}</option>
                                </select>
                            </div>
                        </div>
                        <div class="col-12 col-xl-auto">
                            <RouterLink to="/search" class="btn w-100 btn-primary h-100 px-4 py-2 rounded-pill fs-6"><i class="bi bi-search me-2"></i> Find Now</RouterLink>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>

    import { reactive } from 'vue';

    const find = reactive({
        title: 'Need to Rent a Luxury Car ?',
        labels: [
            {label: 'Branch location'},
            {label: 'Types of Vehicles'},
            {label: 'Brand of Vehicles'},
        ]
    })
   
    const locations = reactive({
        location : 'Phnom Penh',
    })

</script>