<template>
    <!-- banner [START] -->
    <section class="px-5">
        <div class="container-fluid" style="max-width: 1600px !important;">
            <div class="banner rounded-5 overflow-hidden" :style="{backgroundImage: `url(${backgroundImage})`}">
                <div class="overlay p-5 h-100">
                    <div class="container w-100">
                      <div class="text-center">
                        <h1 class="display-3 text-light fw-bold mb-4 hero-title">{{ title }}</h1>
                        <nav aria-label="breadcrumb">
                          <ol class="breadcrumb justify-content-center">
                            <li class="breadcrumb-item">
                                <RouterLink :to="to" class="nav-link fs-5 text-light fw-medium">Home</RouterLink>
                            </li>
                            <li class="breadcrumb-item text-primary fs-5 fw-medium active" aria-current="page">
                                {{ title }}
                            </li>
                          </ol>
                        </nav>
                      </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- banner [END] -->
</template>
<script setup>
import { RouterLink} from 'vue-router';
    defineProps({
        title: {type: String, required: true},
        to: {type: String, required: true},
        label: {type: String, required: true},
        backgroundImage: { type: String, required: true },
    })
    // const bg = props.backgroundImage
</script>