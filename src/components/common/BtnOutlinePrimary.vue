<template>
    <RouterLink :to="to" class="btn btn-square btn-outline-primary rounded-circle position-absolute bottom-0 end-0 m-5">
        <img width="12px" :src="icon" :alt="label">
    </RouterLink>
</template>

<script setup>
    const props = defineProps({
        to: {type: String ,required: true}, 
        icon: {type: String ,required: true}, 
        label: {type: String ,default: 'Button'}, 
    })
    console.log('BtnIcon props:', props.to)
</script>