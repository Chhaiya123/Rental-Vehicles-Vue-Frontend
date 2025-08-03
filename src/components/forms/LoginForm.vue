<template>
    <form @submit.prevent="handleSubmit" class="row g-4 pt-2  needs-validation" novalidate action="" method="get">
        <span class="text-danger" v-if="error.email">{{ error.email }}</span>
        <span class="text-danger" v-else-if="error.password">{{ error.password }}</span>
        <span class="text-danger" v-else>{{ error.message }}</span>
        <div class="col-12">
            <div class="input-group position-relative">
                <input type="email" :class="['form-control px-3 py-3 rounded-2 border-secondary border-opacity-75 shadow-none', error.email ? 'border-danger' : '']" placeholder="Your Email" v-model="form.email" name="email" id="email" autocomplete="email" required>
                <span toggle="#email-field" class="bi bi-envelope position-absolute z-3 end-0 top-50 translate-middle-y me-3"></span>
            </div>
        </div>
        <div class="col-12">
            <InputGroup id="passwordfield" :validate="error.password ? 'border-danger' : ''" placeholder="Password" name="password" v-model="form.password"  required></InputGroup>
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
                <button type="submit" class="btn btn-primary rounded-pill px-4 py-2 w-100">SIGN IN <i class="bi bi-arrow-right ms-3"></i></button>
                <span class="text-muted d-inline-block my-2">-------- OR --------</span>
                <a href="stape2-driving-license.html" class="btn btn-outline-primary rounded-pill px-4 py-2 w-100"><img width="24px" class="ms-2" :src="google" alt="png"><span class="ms-3">Sign in with Google</span></a>
                <a href="stape2-driving-license.html" class="btn btn-outline-primary rounded-pill px-4 py-2 w-100"><img width="24px" class="ms-4" :src="facebook" alt="png"><span class="ms-3">Sign in with Facebook</span></a>
            </div>
        </div>
        <div class="col-12">
            <p class="text-center">Don't have account?<RouterLink to="/signup" class="text-primary ms-2">Sign Up</RouterLink></p>
        </div>
    </form>
</template>
<script setup>
    import facebook from '@/assets/images/facebook.png'
    import google from '@/assets/images/google.png'

    import InputGroup from '../common/InputGroupPassword.vue'
    import Cookies from 'js-cookie'
    import { reactive } from 'vue'
    import router from '@/router'
   
    // var message = ''
    const form = reactive({
        email: '',
        password: ''
    })
    
    const error = reactive({
        email : '',
        password : '',
        message: '',
        status: false,
    })
   
    const rawUserEmail = localStorage.getItem('email')
    const rawUserPass = localStorage.getItem('password')

    console.log('U Name', rawUserEmail)
    console.log('U Pass', rawUserPass)

    function handleSubmit() {
        error.email = ''
        error.password = ''
        
        if(!form.email){
            error.email = 'Email required.'
        }else if(!form.email.includes('@')){            
            error.email = 'Invalid email format.'
        }

        if(!form.password){
            error.password = 'Password required.'
        }else if(form.password.length < 6){
            error.password = 'Password must be at least 6 characters.'
        }

        if(rawUserEmail && rawUserPass){
            
            const userName = JSON.parse(rawUserEmail)
            const userPass = JSON.parse(rawUserPass)
            console.log(userName.value ,'= ', form.email)
            console.log(userPass.value , '= ', form.password)
            if(form.email == userName.value && form.password == userPass.value){
                if(!error.email && !error.password){
                    if(rawUserEmail && rawUserEmail){
                        Cookies.set('UserName', userName.value , {expires: 7, path: ''})
                        Cookies.set('Password', userPass.value , {expires: 7, path: ''})
                    }else{
                        Cookies.remove('UserName')
                        Cookies.remove('Password')
                    }
                    const user = Cookies.get('UserName')
                    const pass = Cookies.get('Password')
                    if(user && pass){
                        // setTimeout(() => {
                        //     Cookies.remove('UserName')
                        //     Cookies.remove('Password')
                        // }, 10000);
                        router.push('/')
                    }
                }
            }else{
                error.message = 'Email or Password Incorrect.'
            }
        }else{
            error.message = 'No registered user found.'
        }
    }

</script>