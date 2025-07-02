<template>
    <main>
        <h1>Bienvenu au Labo</h1>
        <section class="buttons">
            <header>
                <h2>Les boutons</h2>
            </header>
            <AppButton class="action" action="primary" />
            <AppButton action="secondary" />
            <AppButton action="tertiary" />
        </section>
    </main>
</template>

<script setup lang="ts">
import AppButton from '@/components/shared/AppButton.vue';
</script>

<style scoped>
header {
    margin-bottom: 10px;
}

.actions {
    margin-top: 15px;
}

.action {
    margin-right: 15px;
}
</style>