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
  - [Nuxtus CLI](https://github.com/nuxtus/cli)

## Quickstart (preferred)

```bash
$ npx create-nuxtus app-name
$ cd app-name
```

> Replace `app-name` with the name of your website or application.

Your project will contain 2 folders server (Directus) and client (Nuxt). You can then finish the setup of each as normal.

### Directus

By default Nuxtus uses an SQLite database. If you wish to use an alternative database simply edit the `server/.env` file as suggested in the [Directus documentation](https://docs.directus.io/configuration/config-options/#database) then follow the steps below.

```bash
$ cd server
# From within the root of the project
$ npm run cli bootstrap

# For SQLite you need to run the command in the 'api' context (to ensure the database file is created in the right directory)
$ npm run cli bootstrap --workspace=api

$ npx directus start
```

### Nuxtus

```bash
$ cd client
$ npm run dev
```

### Creating pages

Nuxtus includes Nuxtus CLI which will automatically generate listing and view pages of any Directus collections. To use it:

1. Log in to Directus ([http://0.0.0.0:8055/admin/login](http://0.0.0.0:8055/admin/login)) and [create a collection](https://docs.directus.io/configuration/data-model/#creating-a-collection)
2. From the client folder (`cd client`) run `nuxtus create` and follow the prompts

Pages will be created for each collection you select in `clients/pages`. These are a starting point for you to customise.

For more details on [Nuxtus CLI](https://github.com/nuxtus/cli) click [here](https://github.com/nuxtus/cli).

## Production deployment

By default Directus is configured to accept CORS from any origin. Nuxtus suggests modifying this for your production deployment.

## Manual setup

Clone this repo onto your local machine, remove the remote git origin and add a new one.

### Server (Directus) Setup

```bash
$ cd server
$ npm i
$ npm run cli bootstrap
$ npx directus start
```

### Client (Nuxt) Setup

```bash
$ cd client
$ npm i
$ npm run dev
```

> For further instructions visit `[http://localhost:3000](http://localhost:3000)`


