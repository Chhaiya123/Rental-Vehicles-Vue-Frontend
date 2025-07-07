<template>
    <form  class="row g-4 pt-2 needs-validation" novalidate action="#" method="#">
        <div class="col-6">
            <div class="input-group position-relative">
                <input type="text" class="form-control px-3 py-3 rounded-2 border-secondary border-opacity-75 shadow-none" placeholder="First Name" name="f-name" id="f-name" required>
                <span toggle="#f-name-field" class="bi bi-person-rolodex position-absolute z-3 end-0 top-50 translate-middle-y me-3"></span>
            </div>
        </div>
        <div class="col-6">
            <div class="input-group position-relative">
                <input type="text" class="form-control px-3 py-3 rounded-2 border-secondary border-opacity-75 shadow-none" placeholder="Last Name" name="l-name" id="l-name" required>
                <span toggle="#l-name-field" class="bi bi-person-rolodex position-absolute z-3 end-0 top-50 translate-middle-y me-3"></span>
            </div>
        </div>
        <div class="col-12">
            <div class="input-group position-relative">
                <input type="email" class="form-control px-3 py-3 rounded-2 border-secondary border-opacity-75 shadow-none" placeholder="Your Email" id="email" required>
                <span toggle="#email-field" class="bi bi-envelope position-absolute z-3 end-0 top-50 translate-middle-y me-3"></span>
            </div>
        </div>
        <div class="col-12">
            <div class="input-group position-relative">
                <input id="password-field" type="password" class="form-control px-3 py-3 rounded-2 border-secondary border-opacity-75 shadow-none" name="password" placeholder="Create Password" required>
                <span toggle="#password-field" class="bi bi-eye-slash toggle-password position-absolute z-3 end-0 top-50 translate-middle-y me-3"></span>
            </div>
            <div class="d-flex gap-3 mt-3 w-75">
                <span class="w-25 p-1 bg-secondary d-inline-block rounded-pill"></span>
                <span class="w-25 p-1 bg-secondary d-inline-block rounded-pill"></span>
                <span class="w-25 p-1 bg-secondary d-inline-block rounded-pill"></span>
                <span class="w-25 p-1 bg-secondary d-inline-block rounded-pill"></span>
            </div>
        </div>
        <div class="col-12">
            <div class="input-group position-relative">
                <input id="password-field1" type="password" class="form-control px-3 py-3 rounded-2 border-secondary border-opacity-75 shadow-none" name="password" placeholder="Comfirm Password" required>
                <span toggle="#password-field1" class="bi bi-eye-slash toggle-password position-absolute z-3 end-0 top-50 translate-middle-y me-3"></span>
            </div>
        </div>
        
        <div class="col-12">
            <div class="d-flex flex-column align-items-center gap-3">
                <button type="submit" class="btn btn-primary rounded-pill px-4 py-2 w-100">SIGN UP <i class="bi bi-arrow-right ms-3"></i></button>
                <span class="text-muted d-inline-block my-2">-------- OR --------</span>
                <a href="stape2-driving-license.html" class="btn btn-outline-primary rounded-pill px-4 py-2 w-100"><img width="24px" class="ms-2" :src="google" alt="png"><span class="ms-3">Sign in with Google</span></a>
                <a href="stape2-driving-license.html" class="btn btn-outline-primary rounded-pill px-4 py-2 w-100"><img width="24px" class="ms-4" :src="facebook" alt="png"><span class="ms-3">Sign in with Facebook</span></a>
            </div>
        </div>
        <div class="col-12">
            <p class="text-center">Already have an account?<a class="text-primary ms-2" href="sign-in.html">Sign In</a></p>
        </div>
    </form>
</template>
<script setup>
    import facebook from '@/assets/images/facebook.png'
    import google from '@/assets/images/google.png'
</script>