<template>
  <div class="w-full h-screen bg-gray-100">
  <div class="p-4">
    <h1>Directus/Nuxt Boilerplate</h1>
    <h2>Directus Admin</h2>
    <p>You can access the Directus admin via <a target="_blank" href="http://localhost:8055">http://localhost:8055</a>.</p>
    <div class="max-w-md py-4 px-8 bg-white shadow-lg rounded-lg my-4 border border-gray-200">
      <div>
        <h3 class="text-gray-800 text-lg font-semibold">Default credentials</h3>
        <p class="mt-1 text-gray-600">Email: admin@test.com</p>
        <p class="mt-1 text-gray-600">Password: password</p>
      </div>
    </div>
    <h2>Content</h2>
    <p>Add your content in <span class="code">clients/pages/index.vue</span>.</p>
  </div>
  </div>
</template>

<script lang="ts">

</script>

<style scoped>
.code {
  @apply bg-gray-800 text-gray-200 font-mono p-2 cursor-default;
}

h1 {
  @apply mb-4 text-3xl font-semibold;
}

a {
  @apply underline text-indigo-500;
}

a:hover {
  @apply no-underline;
}

h2 {
  @apply my-2 text-xl font-semibold;
}
</style>