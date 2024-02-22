# Nuxtus
<img src="https://www.nuxtus.com/imgs/logo.svg" alt="Nuxtus Logo" width="300px"/>

A boilerplate and set of utilities for using [Directus](https://directus.io) for backend CMS and [Nuxt](https://nuxtjs.org) (w/ [Tailwind CSS](https://tailwindcss.com)) for frontend. It's core feature is to **automagically** create *typed* pages the instant you create a Directus collection.

> Can be used as a boilerplate or individually as a suite of utilities.

## Quick start

```bash
npx create-nuxtus app-name
```

For more details visit [nuxtus.com](https://www.nuxtus.com) or [read the documentation](https://docs.nuxtus.com)

https://user-images.githubusercontent.com/324026/175020548-57ee94b3-dee4-4b12-a8c8-6c0f1a94fab4.mov

The purpose of this template is to be a quick-start for developing a website with Nuxt.js using Directus as the backend. The end result can be a static website or dynamically pull data from Directus depending on your preference.

It also includes [nuxtus/cli]("https://github.com/nuxtus/cli") which provides a command line interface for quickly creating multiple index/detail pages from any Directus collections.

### Dependency graph

The below shows the Nuxtus projects in order based on packages that depend on each other with generator having no Nuxtus dependencies and create-nuxtus requiring all packages. This assists in development and deployment of new versions.

- generator :: creates nuxt pages from Directus collections
- nuxt-module :: a Nuxt module that includes generator for creating nuxt pages in a nuxt project during development
- nuxt-cli :: a CLI tool to manually generate Nuxt pages rather than using autogeneration, used within a Nuxt project
- localtunnel :: a Nuxt module that allows external access to a local Nuxt development project using Local Tunnel
- hook :: a Directus webhook extension that handles the automatic creation of Nuxt pages and types when a new collection is created in Directus
- nuxtus :: the boilerplate project used by create-nuxtus to generate the Directus server and Nuxtus client
- create-nuxtus :: npx package to quickly and easily create a new Nuxtus project
