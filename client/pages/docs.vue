<script setup lang="ts">
import { ExclamationIcon } from '@heroicons/vue/solid'
const user = useDirectusUser();
</script>

<template>
  <div class="w-full h-full bg-gray-100">
    <div class="p-12">
      <h1>Nuxtus - Directus/Nuxt Boilerplate</h1>
      <h2>Directus Admin</h2>
      <p>You can access the Directus admin via <a target="_blank" href="http://localhost:8055">http://localhost:8055</a>.</p>
      <div class="max-w-md py-4 px-8 bg-white shadow-lg rounded-lg my-4 border border-gray-200">
        <div>
          <h4 class="text-gray-800">Default credentials</h4>
          <p class="mt-1 text-gray-600">Email: admin@test.com</p>
          <p class="mt-1 text-gray-600">Password: password</p>
        </div>
      </div>
      <h3>Database setup</h3>
      <p>So Nuxtus has no external dependencies to get up and running, Directus is configured to use an SQLite database out of the box. To modify this edit the /server/.env file <a href="https://docs.directus.io/configuration/config-options/#database" target="_blank">database settings</a>. You can then delete the /server/data.db file as it is no longer required.</p>
      <div class="rounded-md bg-yellow-50 p-4 mt-4">
      <div class="flex">
        <div class="flex-shrink-0">
          <ExclamationIcon class="h-5 w-5 text-yellow-400" aria-hidden="true" />
        </div>
        <div class="ml-3">
          <h4 class="text-sm font-medium text-yellow-800 -mt-1">Admin user</h4>
          <div class="mt-2 text-sm text-yellow-700">
            <p>If you are using the SQLite setup you should delete this user and replace with one of your own. Be aware it also contains an auth token to demonstrate the data retrieval.</p>
          </div>
        </div>
      </div>
    </div>
      <h2>Content</h2>
      <p>Add your content in <span class="code">clients/pages/index.vue</span>.</p>
      <h3>Authentication</h3>
      <!-- <p>Nuxtus uses a <a href="https://docs.directus.io/reference/authentication/" target="_blank">long lived access token</a> to authenticate with Directus. This is fine for static websites and demonstration purposes but if your application requires secure login and/or role based authentication then you will need to update this. The simplest solution is to create a login procedure and then overwrite the <a href="https://v3.nuxtjs.org/guide/features/runtime-config" target="_blank">runtime configuration value</a> <span class="code">config.public.directusToken</span> with the value you receive on login.</p> -->
      <p>Nuxtus uses <a href="https://docs.directus.io/reference/authentication/" target="_blank">Directus Authentication</a> to authenticate to Directus. If you make all your collections publicly readable you can remove the <span class="code">/client/plugins/directusLogin.ts</span> file. Otherwise, update <span class="code">/client/.env</span> with the user credentials that can access the Directus data.</p>
      <h3>Retrieving data via Directus API</h3>
      <p class="my-4">Nuxtus uses the Directus recommended <a href="https://nuxt-directus.netlify.app/" target="_blank">nuxt-directus</a> package to interact with the Directus API. Visit their website for more details on accessing data.</p>
      <p class="my-4">Below is a <strong>LIVE</strong> example fetch request from Directus:</p>
      <div>
        <pre class="code code-block mb-4"><code v-pre>&lt;script setup lang="ts"&gt;
  const user = useDirectusUser();
&lt;/script&gt;</code></pre>
      </div>
      <pre class="code code-block">{{ user }}</pre>

      <p class="my-4"><i>Collection</i> data can be retrieved using <code class="code">useDirectusItems</code>. For example, if you create a collection in Directus called <strong>Articles</strong> then it would be retrieved via:</p>

      <pre class="code code-block"><code v-pre>&lt;script setup lang="ts"&gt;
const { getItems } = useDirectusItems();
const router = useRouter();

interface Article {
  id?: string | number;
  title: string;
  content: string;
  status: string;
}

const fetchArticles = async () => {
  try {
    var filters = { content: "testcontent", title: "Test1" };
    var items = await getItems&lt;Article&gt;({
      collection: "News",
      params: {
        filter: filters,
      },
    });
  } catch (e) {}
};
&lt;/script&gt;</code></pre>

<p class="mt-4">If you wish re re-use data in different pages you can load collection data into <a href="https://v3.nuxtjs.org/guide/features/state-management/" target="_blank">Nuxt's state management</a>.</p>

      <h2>Deployment</h2>
      <p>You can update the location of the directus server by editing the clients/.env file.</p>
      <h3>Static builds</h3>
      <p class="mb-2">Deploying a completely static build is the cheapest and simplest as all the server side features (ie. Directus and API retrieval) are done locally and compiled at build time. This may be a great workflow for apps where only developers are updating a website but if you want a fully dynamic website, you will need to also deploy Directus on a server too (instructions below). To deploy a website to a static web host (such as Netlify) you can locally build the site (make sure the local Directus server is running!):</p>
      <pre class="code code-block">$ cd client && npx nuxi generate</pre>
      <p>This will create a /dist folder in the client directory which can be uploaded/deployed to your static web host.</p>
      <h4 class="mt-2">Testing a build</h4>
      <p class="mb-2">If you wish to test a build before deploying you can by entering the /client/dist folder and:</p>
      <pre class="code code-block">$ npx http-server</pre>
      <h3>Dynamic CMS Builds</h3>
      <p>This allows changes made via Directus to trigger new builds of your Nuxt app, or realtime retrieval of your data.</p>
      <p>First, install Directus using one of the methods in the <a href="https://docs.directus.io/getting-started/installation/" target="_blank">Directus installation page</a>.</p>
      <p>Then install the /client folder using your <a href="https://v3.nuxtjs.org/guide/deploy/node-server" target="_blank">Nuxt method of choice</a>.</p>
    </div>
  </div>
</template>

<script lang="ts">

</script>

<style scoped>
.code {
  @apply bg-gray-800 text-gray-200 font-mono p-1 cursor-default;
}

.code-block {
  @apply p-6;
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