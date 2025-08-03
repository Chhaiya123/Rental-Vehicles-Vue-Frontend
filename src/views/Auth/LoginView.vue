<template>
    <AuthLayout>
        <template v-slot:form>
            <LoginForm/>
        </template>
    </AuthLayout>
</template>
<script setup>
    import AuthLayout from '@/components/layouts/AuthLayout.vue';
    import LoginForm from '@/components/forms/LoginForm.vue';
</script>