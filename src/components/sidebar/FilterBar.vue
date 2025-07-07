<template>
    <div class="card rounded-5 border-secondary border-opacity-75 bg-secondary bg-opacity-25 position-sticky wow animate__slideInUp" data-wow-duration="0.8s" style="top: 160px;">
        <div class="card-body p-4">
            <form action="#">
                <input type="search" class="form-control px-3 py-2 rounded-5 border-secondary border-opacity-50 shadow-none" placeholder="Search...">
                <hr class="border border-secondary border-1 my-4 opacity-50">
                <h4 class="h4 mb-3">Car Types</h4>
                <div class="form-check mb-3">
                    <input class="form-check-input" type="checkbox" value="" id="checkDefault">
                    <label class="form-check-label ms-2" for="checkDefault">
                        Convertible Car
                    </label>
                </div>
                <div class="form-check mb-3">
                    <input class="form-check-input" type="checkbox" value="" id="checkDefault">
                    <label class="form-check-label ms-2" for="checkDefault">
                        Coupe Car
                    </label>
                </div>
                <div class="form-check mb-3">
                    <input class="form-check-input" type="checkbox" value="" id="checkDefault">
                    <label class="form-check-label ms-2" for="checkDefault">
                        Electric Car
                    </label>
                </div>
                <div class="form-check mb-3">
                    <input class="form-check-input" type="checkbox" value="" id="checkDefault">
                    <label class="form-check-label ms-2" for="checkDefault">
                        Luxury Car
                    </label>
                </div>
                <div class="form-check mb-3">
                    <input class="form-check-input" type="checkbox" value="" id="checkDefault">
                    <label class="form-check-label ms-2" for="checkDefault">
                        Sedan Car
                    </label>
                </div>
                <div class="form-check mb-3">
                    <input class="form-check-input" type="checkbox" value="" id="checkDefault">
                    <label class="form-check-label ms-2" for="checkDefault">
                        Sport Car
                    </label>
                </div>
                <hr class="border border-secondary border-1 my-4 opacity-50">
                <button class="btn btn-primary fw-bolder px-4 py-2 rounded-pill" type="submit"><i class="bi bi-search me-2"></i> Search</button>
            </form>
        </div>
    </div>
</template>

<script setup>
    

</script>