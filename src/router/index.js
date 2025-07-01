import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import ContactUsView from '@/views/ContactUsView.vue'
import CarDetail from '@/views/CarDetail.vue'
import AboutView from '@/views/AboutView.vue'
import CarsListView from '@/views/CarsListView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomeView,
      meta: { title: 'Home | Rental Vehicles' }
    },
     {
      path: '/contact',
      name: 'Contact Us',
      component: ContactUsView,
      meta: { title: 'Contact Us | Rental Vehicles' }
    },
     {
      path: '/about',
      name: 'About Us',
      component: AboutView,
      meta: { title: 'About Us | Rental Vehicles' }
    },
     {
      path: '/car/detail',
      name: 'Detail',
      component: CarDetail,
      meta: { title: 'Detail | Rental Vehicles' }
    },
     {
      path: '/categories',
      name: 'Categories',
      component: CarDetail,
      meta: { title: 'Categories | Rental Vehicles' }
    },
     {
      path: '/carslist',
      name: 'Cars List',
      component: CarsListView,
      meta: { title: 'Cars List | Rental Vehicles' }
    },

  ],
})


let intervalId = null
router.afterEach((to) => {
  const baseTitle = to.meta.title ||  'Rental Vehicles'
  let scrollingTitle = baseTitle + ' • '

  if(intervalId){
    clearInterval(intervalId)
  }

  intervalId = setInterval(()=>{
    scrollingTitle = scrollingTitle.slice(1) + scrollingTitle.charAt(0)
    document.title = scrollingTitle
  }, 300)

  // onUnmounted(() => {
  //   clearInterval(intervalId)
  // })

})
export default router
