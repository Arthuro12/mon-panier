<template>
    <button 
        :class="actionClasses" 
        type="submit"
    >Connectez-vous</button>
</template>

<script setup lang="ts">
const props = defineProps<{
    action: "primary" | "secondary" | "tertiary";
}>();

const actionClasses = { 
    'primary': props.action == 'primary',
    'secondary': props.action == 'secondary',
    'tertiary': props.action == 'tertiary'
}
</script>

<style scoped>
button {
    font-size: 17px;
    color: black;
    background-color: rgb(93, 93, 193);
    padding: 0.5rem 2rem;
    border-radius: 500px;
}

.primary {
    color: black;
    background-color: rgb(93, 93, 193);
}

.secondary {
    color: black;
    background: none;
    border: 1px solid rgb(93, 93, 193);
}

.tertiary {
    color: black;
    background: none;
    border: none;
}
</style>