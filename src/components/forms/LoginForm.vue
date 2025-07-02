<template>
    <form>
        <section>
            <div class="control-group">
                <label for="email">E-Mail</label>
                <input id="email" type="text" placeholder="Votre Adresse Mail" />
            </div>
            <div class="control-group">
                <label for="password">Mot de passe</label>
                <input id="password" type="password" placeholder="Votre mot de passe" />
            </div>
            <div class="actions">
                <AppButton class="action" action="primary" />
            </div>
        </section>
    </form>
</template>

<script setup lang="ts">
import AppButton from '../shared/AppButton.vue';
</script>