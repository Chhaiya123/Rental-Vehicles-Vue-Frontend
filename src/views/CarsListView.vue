<template>
    <NavBar/>
    <MiniBanner to="/" title="Cars List" :background-image="Cover"></MiniBanner>
    <section class="section car-types py-10 px-0 px-sm-4 px-md-5">
        <div class="container">
            <div class="row g-4">
                <div class="col-12 col-lg-4 col-xl-3">
                    <FilterBar></FilterBar>
                </div>
                <div class="col-12 col-lg-8 col-xl-9">
                    <div class="row g-4">
                        <div class="col-12 col-md-6 col-xl-4" v-for="item in cars" :key="item.id">
                            <CarCard :car="item"></CarCard>
                        </div>
                    </div>
                </div>
                <!-- pagination -->
                <Paginaction/>
            </div>
        </div>
    </section>
    <Footers/>
</template>

<script setup>
    import NavBar from '@/components/NavBar.vue';
    import MiniBanner from '@/components/MiniBanner.vue';
    import Footers from '@/components/Footer.vue';
    import FilterBar from '@/components/sidebar/FilterBar.vue';
    import CarCard from '@/components/car/CarCard.vue';
    import Paginaction from '@/components/paginaction/Paginaction.vue';

    import Cover from '@/assets/images/MiniBanner.jpg'

    import iconDoor from '@/assets/images/svg/icon-door.svg'
    import iconPassengers from '@/assets/images/svg/icon-passengers.svg'

    const cars = [
            {
                id: 0,
                image: 'src/assets/images/popular/Breeze-Compact.png',
                carType: 'Coup Car',
                title: 'Herrier Wagon',
                price: '168',
                options: [
                    {
                        id: 0,
                        title: 'Doors',
                        icon: iconDoor,
                        number: 4,
                        
                    },
                    {
                        id: 1,
                        title: 'Passengers',
                        icon: iconPassengers,
                        number: 2
                    },
                ]
            },
            {
                id: 1,
                image: 'src/assets/images/popular/Eclipse-Sedan.png',
                carType: 'Coup Car',
                title: 'Herrier Wagon',
                price: '168',
                options: [
                    {
                        id: 0,
                        title: 'Doors',
                        icon: iconDoor,
                        number: 4
                    },
                    {
                        id: 1,
                        title: 'Passengers',
                        icon: iconPassengers,
                        number: 2
                    },
                ]
            },
            {
                id: 2,
                image: 'src/assets/images/popular/Harrier-Wagon.png',
                carType: 'Coup Car',
                title: 'Herrier Wagon',
                price: '168', 
                options: [
                    {
                        id: 0,
                        title: 'Doors',
                        icon: iconDoor,
                        number: 4
                    },
                    {
                        id: 1,
                        title: 'Passengers',
                        icon: iconPassengers,
                        number: 2
                    },
                ]
            },
            {
                id: 3,
                image: 'src/assets/images/popular/Sapphire-Convertible.png',
                carType: 'Coup Car',
                title: 'Herrier Wagon',
                price: '168', 
                options: [
                    {
                        id: 0,
                        title: 'Doors',
                        icon: iconDoor,
                        number: 4
                    },
                    {
                        id: 1,
                        title: 'Passengers',
                        icon: iconPassengers,
                        number: 2
                    },
                ]
            },
            {
                id: 4,
                image: 'src/assets/images/popular/Viper-SXT.png',
                carType: 'Coup Car',
                title: 'Herrier Wagon',
                price: '168', 
                options: [
                    {
                        id: 0,
                        title: 'Doors',
                        icon: iconDoor,
                        number: 4
                    },
                    {
                        id: 1,
                        title: 'Passengers',
                        icon: iconPassengers,
                        number: 2
                    },
                ]
            },
            {
                id: 5,
                image: 'src/assets/images/popular/Voyager-GT.png',
                carType: 'Coup Car',
                title: 'Herrier Wagon',
                price: '168', 
                options: [
                   {
                        id: 0,
                        title: 'Doors',
                        icon: iconDoor,
                        number: 4
                    },
                    {
                        id: 1,
                        title: 'Passengers',
                        icon: iconPassengers,
                        number: 2
                    },
                ]
            }
        ]

</script>