<script setup lang="ts">
import { ExclamationIcon } from '@heroicons/vue/solid'
const { $directus } = useNuxtApp()
const { data: users } = await $directus('/users?filter[first_name][_eq]=Admin')
</script>

<template>
  <div class="w-full h-screen bg-gray-100">
    <div class="p-4">
      <h1>Directus/Nuxt Boilerplate</h1>
      <h2>Directus Admin</h2>
      <p>You can access the Directus admin via <a target="_blank" href="http://localhost:8055">http://localhost:8055</a>.</p>
      <div class="max-w-md py-4 px-8 bg-white shadow-lg rounded-lg my-4 border border-gray-200">
        <div>
          <h4 class="text-gray-800">Default credentials</h4>
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
      <p class="my-4">Although Directus provides a <a href="https://docs.directus.io/reference/sdk/" target="_blank">JS-SDK</a> for retrieving data Directus/Nuxt uses a custom plugin that allows better integration with Nuxt's <a href="https://v3.nuxtjs.org/api/composables/use-fetch" target="_blank">data retrieval composables</a>. Use the <a href="https://docs.directus.io/reference/introduction/" target="_blank">Directus API reference</a> to modify request. The example below shows a filter applied.</p>
      <p class="my-4">Below is an example fetch request from Directus:</p>
      <div>
        <pre class="code mb-4">const { $directus } = useNuxtApp()
const { data: users } = await $directus('/users?filter[first_name][_eq]=Admin', {}) # The second parameter is a useFetch options object</pre>
      </div>
      <pre class="code">{{ users }}</pre>

      <h2>Deployment</h2>
      <p>You can update the location of the directus server by editing the clients/.env file.</p>
      <h3>Static builds</h3>
      <p>Deploying a completely static build is the cheapest and simplest as all the server side features (ie. Directus and API retrieval) are done locally and compiled at build time. This may be a great workflow for apps where only developers are updating a website but if you want a fully dynamic website, you will need to also deploy Directus on a server too (instructions below). To deploy a website to a static web host (such as Netlify) you can locally build the site (make sure the local Directus server is running!):</p>
      <pre class="code">$ cd client && npx nuxi generate</pre>
      <p>This will create a /dist folder in the client directory which can be uploaded/deployed to your static web host.</p>
      <h4>Testing a build</h4>
      <p>If you wish to test a build before deploying you can by entering the /client/dist folder and:</p>
      <pre class="code">$ npx http-server</pre>
      <h3>Dynamic CMS Builds</h3>
      <p>This allows changes made via Directus to trigger new builds of your Nuxt app, or realtime retrieval of your data.</p>
      <p><strong>INSTRUCTIONS COMING SOON</strong></p>
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
  @apply mb-8 text-5xl font-semibold;
}

a {
  @apply underline text-indigo-500;
}

a:hover {
  @apply no-underline;
}

h2 {
  @apply my-4 text-2xl font-semibold;
}

h3 {
  @apply my-4 text-xl font-semibold;
}

h4 {
  @apply text-lg font-semibold;
}
</style>