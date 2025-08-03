import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import ContactUsView from '@/views/ContactUsView.vue'
import CarDetail from '@/views/CarDetail.vue'
import AboutView from '@/views/AboutView.vue'
import CarsListView from '@/views/CarsListView.vue'
import LoginView from '@/views/Auth/LoginView.vue'
import RegisterView from '@/views/Auth/RegisterView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomeView,
      meta: {requiresAuth: true ,title: 'Home | Rental Vehicles' }
    },
    {
      path: '/leading',
      name: 'Leading',
      component: HomeView,
      meta: {requiresAuth: false ,title: 'Leading | Rental Vehicles' }
    },
     {
      path: '/contact',
      name: 'Contact Us',
      component: ContactUsView,
      meta: {requiresAuth: true, title: 'Contact Us | Rental Vehicles' }
    },
     {
      path: '/about',
      name: 'About Us',
      component: AboutView,
      meta: {requiresAuth: true, title: 'About Us | Rental Vehicles' }
    },
     {
      path: '/car/detail',
      name: 'Detail',
      component: CarDetail,
      meta: {requiresAuth: true, title: 'Detail | Rental Vehicles' }
    },
     {
      path: '/categories',
      name: 'Categories',
      component: CarDetail,
      meta: {requiresAuth: true, title: 'Categories | Rental Vehicles' }
    },
     {
      path: '/carslist',
      name: 'Cars List',
      component: CarsListView,
      meta: {requiresAuth: true, title: 'Cars List | Rental Vehicles' }
    },
    {
      path: '/signin',
      name: 'Sign In',
      component: LoginView,
      meta: { title: 'Sign In | Rental Vehicles' }
    },
    {
      path: '/signup',
      name: 'Sign Up',
      component: RegisterView,
      meta: { title: 'Sign Up | Rental Vehicles' }
    },

  ],
})

let intervalId = null
router.beforeEach((to) => {
  const baseTitle = to.meta.title ||  'Rental Vehicles'
  let scrollingTitle = baseTitle
  document.title = scrollingTitle
  if(intervalId){
    clearInterval(intervalId)
  }
  const isLoggedIn = document.cookie.includes('UserName')
  console.log(isLoggedIn)
  console.log(to.meta.requiresAuth )
  if(to.meta.requiresAuth && !isLoggedIn){
     router.push('/leading')
  }
})

export default router
