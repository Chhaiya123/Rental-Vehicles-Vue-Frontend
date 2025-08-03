<template>
    <!-- Modal Log Out -->
    <div class="modal" name="fade" style="display: block; opacity: 1; background-color: #00000036;" v-if="modelValue" @click.self="close">
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content p-4">
          <div class="modal-body text-center">
            <i class="bi bi-question-octagon-fill display-4 text-danger"></i>
            <p class="fs-5 mt-4 text-muted">Are you sure you want to Logout?</p>
          </div>
          <div class="modal-footer text-center border-0 d-flex gap-3 justify-content-center">
            <button type="button" class="btn btn-outline-dark py-2 px-5 rounded-pill" data-bs-dismiss="modal">NO</button>
            <button type="button" @click="Logout" class="btn btn-primary py-2 px-5 rounded-pill">YES</button>
          </div>
        </div>
      </div>
    </div>
</template>
<script setup>

    const props = defineProps({
        modelValue : Boolean
    })

    const emit = defineEmits(['update:modelValue'])

    function close(){
        emit('update:modelValue', false)
    }
    
    import Cookies from 'js-cookie'
    import router from '@/router'

    function Logout(){
      // localStorage.removeItem('form')
      // localStorage.removeItem(user.email)
      // localStorage.removeItem(user.password)
      Cookies.remove('UserName')
      Cookies.remove('Password')
      router.push('/signin')
    }

</script>

<style scoped>
    /* Transition classes */
  .fade-enter-active, .fade-leave-active {
    transition: opacity 0.3s ease;
  }
  .fade-enter-from, .fade-leave-to {
    opacity: 0;
  }
  .fade-enter-to, .fade-leave-from {
    opacity: 1;
  }
</style>