# Nuxtus

A website w/ CMS boilerplate using [Directus](https://directus.io) for backend CMS and [Nuxt](https://nuxtjs.org) (w/ Tailwind CSS) for frontend.

The purpose of this template is to be a quick-start for developing a website with Nuxt.js using Directus as the backend. The end result can be a static website or dynamically pull data from Directus depending on your preference.

It also includes [nuxtus/cli]("https://github.com/nuxtus/cli") which provides a command line interface for quickly creating multiple index/detail pages from any Directus collections.

- [Directus](https://directus.io)
- [Nuxt](https://nuxtjs.org)
  - [Tailwind CSS](https://tailwindcss.nuxtjs.org/)
  - [Headless UI](https://headlessui.dev/)
  - [HeroIcons](https://heroicons.com/)
  - [Google Fonts](https://github.com/nuxt-community/google-fonts-module)
  - [Nuxtus CLI]("https://github.com/nuxtus/cli")

## Quickstart (preferred)

```bash
$ npx create-nuxtus app-name
$ cd app-name
```

> Replace `app-name` with the name of your website or application.

Your project will contain 2 folders server (Directus) and client (Nuxt). Run them as normal from within each folder:

```bash
~/server $ npx directus start
~/client $ npm run dev
```

## Production deployment

By default Directus is configured to accept CORS from any origin. Nuxtus suggests modifying this for your production deployment.

## Manual setup

Clone this repo onto your local machine, remove the remote git origin and add a new one.

### Server (Directus) Setup

```bash
$ cd server
$ npm i
$ npx directus start
```

### Client (Nuxt) Setup

```bash
$ cd client
$ npm i
$ npm run dev
```

> For further instructions visit `[http://localhost:3000](http://localhost:3000)`


