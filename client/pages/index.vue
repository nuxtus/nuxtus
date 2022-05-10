<template>
  <div class="p-4">
    <h1>Directus/Nuxt Boilerplate</h1>
    <h2>Directus Admin</h2>
    <p>You can access the Directus admin via <a target="_blank" href="http://localhost:8055">http://localhost:8055</a>.</p>
    Default credentials:
    Email: admin@test.com
    Password: password
    <h2>Content</h2>
    <p>Add your content in <span class="code">clients/pages/index.vue</span>.</p>
  </div>
</template>

<script lang="ts">

</script>

<style scoped>
.code {
  @apply bg-gray-800 text-gray-200 font-mono p-1;
}

h1 {
  @apply mb-4 text-xl font-semibold;
}

a {
  @apply underline;
}

h2 {
  @apply my-2 text-lg font-semibold;
}
</style>