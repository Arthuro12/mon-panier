<template>
    <div>
        <header>
            <button type="button">+ Aujouter les auteurs</button>
        </header>
        <ul>
            <li v-for="name in names" :key="name">
                <div>
                    <p>{{ name }}</p>
                    <button type="button">Supprimer de la liste</button>
                </div>
            </li>
        </ul>
        <div class="control-group">
            <label>Nom</label>
            <input type="text" placeholder="Nom de l'auteur" v-model.lazy="enteredName" />
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, watch } from "vue";

const enteredName = defineModel<string>("enteredName");
const names = ref<string[]>([]);

watch(
    enteredName,
    (newName) => {
        if (newName != "") {
            names.value.push(newName);
        }
    }
);
</script>