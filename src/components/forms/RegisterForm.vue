<template>
    <form @submit.prevent="handleSubmit" :key="form.id" class="row g-4 pt-2 needs-validation" novalidate action="#" method="#">
        
        <div class="col-6">
            <div class="input-group position-relative">
                <input type="text" class="form-control px-3 py-3 rounded-2 border-secondary border-opacity-75 shadow-none" :class="!error.firstName ? '': 'border-danger'" placeholder="First Name" name="f-name" id="f-name" v-model="form.firstName" required>
                <span toggle="#f-name-field" class="bi bi-person-rolodex position-absolute z-3 end-0 top-50 translate-middle-y me-3"></span>
            </div>
            <span class="text-danger" v-if="error.firstName">{{ error.firstName }}</span>
        </div>
        <div class="col-6">
            <div class="input-group position-relative">
                <input type="text" class="form-control px-3 py-3 rounded-2 border-secondary border-opacity-75 shadow-none" :class="!error.firstName ? '': 'border-danger'" placeholder="Last Name" name="l-name" id="l-name" v-model="form.lastName" required>
                <span toggle="#l-name-field" class="bi bi-person-rolodex position-absolute z-3 end-0 top-50 translate-middle-y me-3"></span>
            </div>
            <span class="text-danger" v-if="error.lastName">{{ error.lastName }}</span>
        </div>
        <div class="col-12">
            <div class="input-group position-relative">
                <input type="email" class="form-control px-3 py-3 rounded-2 border-secondary border-opacity-75 shadow-none" :class="!error.firstName ? '': 'border-danger'" placeholder="Your Email" id="email" autocomplete="email" v-model="form.email" required>
                <span toggle="#email-field" class="bi bi-envelope position-absolute z-3 end-0 top-50 translate-middle-y me-3"></span>
            </div>
            <span class="text-danger" v-if="error.email">{{ error.email }}</span>
        </div>
        <div class="col-12">
            <InputGroup id="passwordfield2" :validate="error.password ? 'border-danger' : ''" placeholder="Password" name="password" v-model="form.password" required></InputGroup>
            <div class="d-flex gap-3 mt-3 w-75">
                <span class="w-25 p-1 bg-secondary d-inline-block rounded-pill"></span>
                <span class="w-25 p-1 bg-secondary d-inline-block rounded-pill"></span>
                <span class="w-25 p-1 bg-secondary d-inline-block rounded-pill"></span>
                <span class="w-25 p-1 bg-secondary d-inline-block rounded-pill"></span>
            </div>
            <span class="text-danger" v-if="error.password">{{ error.password }}</span>
        </div>
        <div class="col-12">
            <!-- <InputGroup id="comfirmpassword" :validate="error.password ? 'border-danger' : ''" placeholder="Comfirm Password" name="comfirmpassword" v-model="form.password" required></InputGroup> -->
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
            <p class="text-center">Already have an account?<RouterLink to="signin" class="text-primary ms-2">Sign In</RouterLink></p>
        </div>
    </form>
</template>
<script setup>
    import facebook from '@/assets/images/facebook.png'
    import google from '@/assets/images/google.png'
    import InputGroup from '../common/InputGroupPassword.vue';

    import { RouterLink } from 'vue-router';
    import { reactive } from 'vue';
    import router from '@/router';
    
    function setItemWithExpiry(key, value , ttl){
        const now = new Date()
        const item = reactive({
            value: value,
            expiry: now.getTime() + ttl
        })
        localStorage.setItem(key, JSON.stringify(item))
    }

    function getItemWithExpiry(key){
        const itemStr = localStorage.getItem(key)
        if(!itemStr) return null
        const item = JSON.parse(itemStr)
        const now = new Date()
        const ex = item.expiry
        const exn = now.getTime()
        if(now.getTime() > item.expiry){
            localStorage.removeItem(key)
            localStorage.clear(key)
            return 'sssssssss'+ null
        }
        return {item, exn, ex}
    }
    const form = reactive({
        firstName: '',
        lastName: '',
        email: '',
        password : ''
    })
    const error = reactive({
        firstName: '',
        lastName: '',
        email: '',
        password : '',
        message: '',
        status: false
    })
    function handleSubmit() {
        error.firstName = ''
        error.lastName = ''
        error.email = ''
        error.password = ''
        error.password = ''
        error.message = ''

        if(!form.firstName){
            error.firstName = 'First name required.'
        }
        if(!form.lastName){
            error.lastName = 'Last name required.'
        }

        if(!form.email){
            error.email = 'Email required.'
        }else if(!form.email.includes('@')){
            error.email = 'Invalid email format.'
        }

        if(!form.password){
            error.password = 'Password required.'
        }else if(form.password.length < 6 ){
            email.password =  'Password must be at least 6 characters.'
        }

        if(!error.firstName && !error.lastName && !error.email && !error.password){
            setItemWithExpiry( 'email', form.email , 60000)
            setItemWithExpiry( 'password', form.password , 60000)
            setItemWithExpiry( 'firstName', form.firstName , 60000)
            setItemWithExpiry( 'lastName', form.lastName , 60000)

            let email =  getItemWithExpiry('email')
            let password = getItemWithExpiry('password')
            let firstName = getItemWithExpiry('firstName')
            let lastName = getItemWithExpiry('lastName')

            console.log('Get immediately:', email, password ,firstName ,lastName) 

            setTimeout(() => {
                const emailExpiry = getItemWithExpiry('email')
                const passwordExpiry = getItemWithExpiry('password')
                const firstNameExpiry = getItemWithExpiry('firstName')
                const lastNameExpiry = getItemWithExpiry('lastName')

                // console.log('After 1mn : ', emailExpiry , passwordExpiry , firstNameExpiry , lastNameExpiry)
                // console.log('Remove Successfully.')
            }, 10000)
            // localStorage.setItem('form', JSON.stringify(form))
            // console.log('Successfully.')
            router.push('/signin')
        }
    }
   
</script>