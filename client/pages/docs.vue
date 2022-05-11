<script setup lang="ts">
import { ExclamationIcon } from '@heroicons/vue/solid'
const { $directus } = useNuxtApp()
const { data: users } = await $directus('/users')
</script>

<template>
  <div class="w-full h-screen bg-gray-100">
  <div class="p-4">
    <h1>Directus/Nuxt Boilerplate</h1>
    <h2>Directus Admin</h2>
    <p>You can access the Directus admin via <a target="_blank" href="http://localhost:8055">http://localhost:8055</a>.</p>
    <div class="max-w-md py-4 px-8 bg-white shadow-lg rounded-lg my-4 border border-gray-200">
      <div>
        <h4 class="text-gray-800 text-lg font-semibold">Default credentials</h4>
        <p class="mt-1 text-gray-600">Email: admin@test.com</p>
        <p class="mt-1 text-gray-600">Password: password</p>
      </div>
    </div>
    <div class="rounded-md bg-yellow-50 p-4">
    <div class="flex">
      <div class="flex-shrink-0">
        <ExclamationIcon class="h-5 w-5 text-yellow-400" aria-hidden="true" />
      </div>
      <div class="ml-3">
        <h4 class="text-sm font-medium text-yellow-800">Admin user</h4>
        <div class="mt-2 text-sm text-yellow-700">
          <p>Once you are done with set up you should delete this user and replace with one of your own. Be aware it also contains an auth token to demonstrate the data retrieval.</p>
        </div>
      </div>
    </div>
  </div>
    <h2>Content</h2>
    <p>Add your content in <span class="code">clients/pages/index.vue</span>.</p>
    <h3>Authentication</h3>
    <p>Directus/Nuxt uses a <a href="https://docs.directus.io/reference/authentication/" target="_blank">long lived access token</a> to authenticate with Directus. This is fine for static websites and demonstration purposes but if your application requires secure login and/or role based authentication then you will need to update this. The simplest solution is to create a login procedure and then overwrite the <a href="https://v3.nuxtjs.org/guide/features/runtime-config" target="_blank">runtime configuration value</a> <span class="code">config.public.directusToken</span> with the value you receive on login.</p>
    <h3>Retrieving data via Directus API</h3>
    <p class="my-4">Although Directus provides a <a href="https://docs.directus.io/reference/sdk/" target="_blank">JS-SDK</a> for retrieving data Directus/Nuxt uses a custom plugin that allows better integration with Nuxt's <a href="https://v3.nuxtjs.org/api/composables/use-fetch" target="_blank">data retrieval composables</a>. Use the <a href="https://docs.directus.io/reference/introduction/" target="_blank">Directus API reference</a> to fetch data.</p>
    <p class="my-4">Below is an example fetch request from Directus:</p>
    <div>
      <pre class="code mb-4">const { $directus } = useNuxtApp()
const { data: users } = await $directus('/users', {}) # The second parameter is a useFecth options object</pre>
    </div>
    <pre class="code">{{ users }}</pre>
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

h3 {
  @apply my-4 text-lg font-semibold;
}
</style>