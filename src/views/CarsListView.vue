<template>
    <NavBar></NavBar>
    <MiniBanner title="Cars List" :background-image="Cover"></MiniBanner>
    
    <Footers></Footers>

</template>

<script setup>
    import NavBar from '@/components/NavBar.vue';
    import MiniBanner from '@/components/MiniBanner.vue';
    import Footers from '@/components/Footer.vue';

    import Cover from '@/assets/images/MiniBanner.jpg'

</script>