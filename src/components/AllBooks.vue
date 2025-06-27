<template>
    <ul>
        <li v-for="book in books" :key="book.title">
            <p>
                <span class="info">Titre:</span> {{ book.title }},
                <span class="info">Auteurs:</span> {{ book.authors.join(", ") }}
            </p>
        </li>
    </ul>
</template>

<script setup lang="ts">
defineProps<{
    books: Books[];
}>();
</script>

<style scoped>
ul {
    list-style: none;
}

.info {
    font-weight: 700;
}
</style>