# Nuxtus

A website w/ CMS boilerplate using [Directus](https://directus.io) for backend CMS and [Nuxt](https://nuxtjs.org) (w/ Tailwind CSS) for frontend.


https://user-images.githubusercontent.com/324026/175020548-57ee94b3-dee4-4b12-a8c8-6c0f1a94fab4.mov


The purpose of this template is to be a quick-start for developing a website with Nuxt.js using Directus as the backend. The end result can be a static website or dynamically pull data from Directus depending on your preference.

It also includes [nuxtus/cli]("https://github.com/nuxtus/cli") which provides a command line interface for quickly creating multiple index/detail pages from any Directus collections.

https://user-images.githubusercontent.com/324026/175452950-46bd51a6-3fd9-441d-80fd-c6bbfaa01929.mp4

## Features

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
```

> Replace `app-name` with the name of your website or application.

Nuxtus will automatically migrate the Directus DB if you are using SQLite. Otherwise follow the directions below to manually configure your database and get started.

Your project will contain 2 folders server (Directus) and client (Nuxt).

### Directus

By default Nuxtus uses an SQLite database. If you wish to use an alternative database simply edit the `server/.env` file as suggested in the [Directus documentation](https://docs.directus.io/configuration/config-options/#database) then follow the steps below.

```bash
$ cd server

# From within the root of the project
$ npm run cli bootstrap
```

### Nuxt

No set up for Nuxt is required.

### Starting Nuxtus

From inside your project folder:

```bash
$ npm start
```

### Automatically creating pages

**Nuxtus automagically creates Nuxt pages as soon as you create a new Directus collection!**

Nuxtus includes a POST endpoint located /api/directus/collection that will run in development. If you used `npx create-nuxtus` to create your Nuxtus project and selected "yes" to automatically creating pages from Directus then this is already configured in Directus for you.

If not, create a new Flow in Directus as follows:

#### Trigger

Type: action
Scope: items.create
Collections: directus_collections

#### Webhook / Request URL

URL: http://localhost:3000/api/directus/collection
Method: POST
Request Body: `{{$last.payload}}`

### Manually creating pages

Nuxtus includes Nuxtus CLI which will automatically generate listing and view pages of any Directus collections. To use it:

1. Log in to Directus ([http://0.0.0.0:8055/admin/login](http://0.0.0.0:8055/admin/login)) and [create a collection](https://docs.directus.io/configuration/data-model/#creating-a-collection)
2. From the client folder (`cd client`) run `nuxtus create` and follow the prompts

Pages will be created for each collection you select in `clients/pages`. These are a starting point for you to customise.

For more details on [Nuxtus CLI](https://github.com/nuxtus/cli) click [here](https://github.com/nuxtus/cli).

## Production deployment

By default Directus is configured to accept CORS from any origin. Nuxtus suggests modifying this for your production deployment.

## Manual setup

Clone this repo onto your local machine, remove the remote git origin and add a new one. Then follow the [manual install instructions](#directus).

> For further instructions visit `[http://localhost:3000](http://localhost:3000)`


