<template>
  <RouterView />
</template>

<script setup>

  import { onMounted, onUnmounted , ref} from 'vue';
  import { RouterLink, RouterView } from 'vue-router'
  import router from './router';

</script>
