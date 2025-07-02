<script setup lang="ts">
</script>

<template>
  <nav>
      <RouterLink class="action" to="/">Page principale</RouterLink>
      <RouterLink class="action" to="/lab">Allez au labo</RouterLink>
      <RouterView />
  </nav>
</template>

<style scoped>
.action {
  margin-right: 15px;
}

nav {
  margin-top: 20px;
} 
</style>
