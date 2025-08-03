<template>
    <AuthLayout>
        <template v-slot:form>
            <RegisterForm/>
        </template>
    </AuthLayout>
</template>
<script setup>
    import AuthLayout from '@/components/layouts/AuthLayout.vue';
    import RegisterForm from '@/components/forms/RegisterForm.vue';
</script>