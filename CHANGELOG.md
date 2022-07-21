Changelog

# [1.2.0](https://github.com/nuxtus/nuxtus/compare/v1.1.1...v1.2.0) (2022-07-21)


### Features

* :zap: directus and nuxt server and port are now configurable ([96bda8b](https://github.com/nuxtus/nuxtus/commit/96bda8bfdd03f2cdca5994b5814070480121e904))

## [1.1.1](https://github.com/nuxtus/nuxtus/compare/v1.1.0...v1.1.1) (2022-07-11)


### Bug Fixes

* :bug: update @nuxtus/generator to 1.1.2 ([fa02fba](https://github.com/nuxtus/nuxtus/commit/fa02fbae0e00b4dc6c59f3336cb321b43e0d7227))


## 1.1.0

- Automatically generate types from collections
- Tidy up server end point
- Automatically open browser window on Nuxt start

## 1.0.6

- Add server api endpoint to be used as Directus webhook
- Update to Directus 9.13.0
- Update readme with details on using Collections hook

## 1.0.5

- Update nuxtus-cli to v1.0.3

## 1.0.4

- Hard delete the data.db file
- Update @nuxtus-cli to 1.0.2
- Update Nuxt to 3.0.0-rc.4
- Add client, server and start npm scripts

## 1.0.3

- Add Directus CLI to package.json so `npm run cli` works
- Update getting started instructions to include database migrations
- Do not upload the sqlite database, create a new one
- Add default user/password to Directus .env
- Add @nuxtus/cli to dev dependencies
- Update `pages/docs.vue` with details on using @nuxtus/cli

## 1.0.2

- Separate create-nuxt command

## 1.0.1

- Correct create command in readme
- Add details on using Nuxtus CLI
- Update feedback when installing dependencies

## 1.0.0

- Add `npx nuxtus-create` command

## 0.0.2

- Move to using [nuxt-directus package](https://nuxt-directus.netlify.app/)
- Add @nuxtus/cli
- Add .DS_Store to gitignore

## 0.0.1

Initial alpha release.
