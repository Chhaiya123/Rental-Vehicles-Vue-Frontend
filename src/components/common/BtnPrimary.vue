<template>
    <RouterLink class="btn btn-square btn-primary rounded-circle" :to="to">
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