<template>
    <div class="input-group position-relative">
        <input :id="id" :type="!show ? 'text' : 'password'" :class="['form-control px-3 py-3 rounded-2 border-secondary border-opacity-75 shadow-none', validate]" :name="name" @input="$emit('update:modelValue', $event.target.value)" :placeholder="placeholder" required>
        <span :class="['bi toggle-password position-absolute z-3 end-0 top-50 translate-middle-y me-3', !show ? 'bi-eye' : 'bi-eye-slash']" @click="toggle"></span>
    </div>
</template>
<script setup>

    const data = defineProps({
        id: {type: String , required: true},
        name: {type: String, required: true},
        modelValue: {type: String, required: true},
        placeholder: {type: String, required: true},
        validate: {type: String, required: true}
    })

    import { ref } from 'vue'

    const show = ref(true)
    function toggle() {
        show.value = !show.value
    }
</script>