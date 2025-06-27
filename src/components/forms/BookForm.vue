<template>
    <div>
        <label>Titre:</label>
        <input type="text" placeholder="Entrer le titre du livre" v-model="title" />
        <AuthorForm />
    </div>
</template>

<script setup lang="ts">
import { watch } from "vue";

import AuthorForm from "./AuthorForm.vue";

const title = defineModel<string>("book");

watch(
    title,
    () => {

    }
)
</script>

<style scoped></style>