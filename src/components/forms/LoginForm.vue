<template>
    <form  class="row g-4 pt-2  needs-validation" novalidate action="" method="get">
        <div class="col-12">
            <div class="input-group position-relative">
                <input type="email" class="form-control px-3 py-3 rounded-2 border-secondary border-opacity-75 shadow-none" placeholder="Your Email" id="email" value="yosefsutton@example.com" required>
                <span toggle="#email-field" class="bi bi-envelope position-absolute z-3 end-0 top-50 translate-middle-y me-3"></span>
            </div>
        </div>
        <div class="col-12">
            <div class="input-group position-relative">
                <input id="password-field" type="password" class="form-control px-3 py-3 rounded-2 border-secondary border-opacity-75 shadow-none" name="password" placeholder="Password" value="12345678" required>
                <span toggle="#password-field" class="bi bi-eye-slash toggle-password position-absolute z-3 end-0 top-50 translate-middle-y me-3"></span>
            </div>
        </div>
        <div class="col-12">
            <div class="d-flex justify-content-between">
                <div class="form-check mt-1">
                    <input class="form-check-input me-2" type="checkbox" value="1" id="checkDefault">
                    <label class="form-check-label" for="checkDefault">
                        Remember ME
                    </label>
                </div>
                <a href="forgot-password.html" class="text-primary ms-1 fs-6">Forgot Password?</a>
            </div>
        </div>
        <div class="col-12">
            <div class="d-flex flex-column align-items-center gap-3">
                <a href="home.html" class="btn btn-primary rounded-pill px-4 py-2 w-100">SIGN IN <i class="bi bi-arrow-right ms-3"></i></a>
                <span class="text-muted d-inline-block my-2">-------- OR --------</span>
                <a href="stape2-driving-license.html" class="btn btn-outline-primary rounded-pill px-4 py-2 w-100"><img width="24px" class="ms-2" :src="google" alt="png"><span class="ms-3">Sign in with Google</span></a>
                <a href="stape2-driving-license.html" class="btn btn-outline-primary rounded-pill px-4 py-2 w-100"><img width="24px" class="ms-4" :src="facebook" alt="png"><span class="ms-3">Sign in with Facebook</span></a>
            </div>
        </div>
        <div class="col-12">
            <p class="text-center">Don't have account?<a class="text-primary ms-2" href="sign-up.html">Sign Up</a></p>
        </div>
    </form>
</template>
<script setup>
    import facebook from '@/assets/images/facebook.png'
    import google from '@/assets/images/google.png'
</script>