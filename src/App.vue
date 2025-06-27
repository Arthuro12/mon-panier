<script setup lang="ts">
import BookForm from "./components/forms/BookForm.vue";
import AllBooks from "./components/AllBooks.vue";

import { useLoadBooks } from "./composables/useLoadBooks.js";

const { isLoading, error, loadedBooks } = useLoadBooks();
</script>

<template>
  <main>
    <div v-show="error">Une erreur s´est produite lors du chargements de vos livres: {{ error }}</div>
    <div>
        <AllBooks class="book-list" v-if="!isLoading" :books="loadedBooks" />
        <BookForm  />
    </div>
  </main>
</template>

<style scoped>
main {
  margin: auto;
  width: 80%;
}

.book-list {
  margin-bottom: 15px;
}
</style>
