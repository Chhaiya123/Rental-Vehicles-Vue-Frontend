<template>
    <nav aria-label="..." class="mt-5">
        <ul class="pagination mb-0 justify-content-center gap-3 wow animate__slideInUp" data-wow-duration="1s">
            <li class="page-item disabled">
                <a class="page-link"><i class="bi bi-arrow-left"></i></a>
            </li>
            <li class="page-item active"><a class="page-link" href="#page1">1</a></li>
            <li class="page-item">
            <a class="page-link" href="#page2" aria-current="page">2</a>
            </li>
            <li class="page-item"><a class="page-link" href="#page2">3</a></li>
            <li class="page-item">
                <a class="page-link" href="#nextPage">
                    <i class="bi bi-arrow-right"></i>
                </a>
            </li>
        </ul>
    </nav>
</template>

<script setup>

</script>