const client_manifest = {
  "node_modules/nuxt/dist/app/entry.mjs": {
    "file": "entry-ed8181f2.mjs",
    "src": "node_modules/nuxt/dist/app/entry.mjs",
    "isEntry": true,
    "dynamicImports": [
      "pages/docs.vue",
      "pages/index.vue"
    ],
    "css": [
      "entry.700d9693.css"
    ]
  },
  "pages/docs.vue": {
    "file": "docs-25ed987d.mjs",
    "src": "pages/docs.vue",
    "isDynamicEntry": true,
    "imports": [
      "node_modules/nuxt/dist/app/entry.mjs"
    ]
  },
  "pages/index.vue": {
    "file": "index-7c48cf22.mjs",
    "src": "pages/index.vue",
    "isDynamicEntry": true,
    "imports": [
      "node_modules/nuxt/dist/app/entry.mjs"
    ]
  }
};

export { client_manifest as default };
//# sourceMappingURL=client.manifest.mjs.map
