Changelog

## [2.0.1](https://github.com/nuxtus/nuxtus/compare/v2.0.0...v2.0.1) (2022-11-18)


### Bug Fixes

* :bug: Move Directus credentials to public configuration variables ([fb85d82](https://github.com/nuxtus/nuxtus/commit/fb85d8216c9d2949e927606e6bdf3fbb5e2b14d2))

# [2.0.0](https://github.com/nuxtus/nuxtus/compare/v1.9.1...v2.0.0) (2022-11-18)


### Bug Fixes

* :bug: Update to Nuxt 3.0.0 runtime config ([73b0f2e](https://github.com/nuxtus/nuxtus/commit/73b0f2e087eef704a766910b583d02f465a8ceb5))


### chore

* :memo: Update TODO ([4d4135b](https://github.com/nuxtus/nuxtus/commit/4d4135b37dee893ccec47db64b6b259bf27b16b8))


### BREAKING CHANGES

* Directus credentials are now stored in different variable names in nuxt.config.ts and .env

## [1.9.1](https://github.com/nuxtus/nuxtus/compare/v1.9.0...v1.9.1) (2022-11-17)


### Bug Fixes

* :bug: Fix nuxt.config declaration ([a305d5d](https://github.com/nuxtus/nuxtus/commit/a305d5dcae45fe3cc3904900184ffb47cf8da07d))

# [1.9.0](https://github.com/nuxtus/nuxtus/compare/v1.8.1...v1.9.0) (2022-11-17)


### Features

* :sparkles: Update all dependencies to Nuxt 3.0.0 compatible ([d46d787](https://github.com/nuxtus/nuxtus/commit/d46d787b482e7d296bdbfb90433d37b1d44f06bb))

## [1.8.1](https://github.com/nuxtus/nuxtus/compare/v1.8.0...v1.8.1) (2022-11-10)


### Bug Fixes

* :bug: Update google fonts and remove build step ([e65c732](https://github.com/nuxtus/nuxtus/commit/e65c732fc43926d5d8d3ca7a6f0523bd53a16c2b))

# [1.8.0](https://github.com/nuxtus/nuxtus/compare/v1.7.1...v1.8.0) (2022-11-10)


### Bug Fixes

* :bug: Update to Nuxtus 3.0.0-rc.13 ([dbc1ef1](https://github.com/nuxtus/nuxtus/commit/dbc1ef1b5a8a52485b0542a77f775ae222a4d455))
* :zap: Start server before client ([b6807b5](https://github.com/nuxtus/nuxtus/commit/b6807b54af4f2cf9d101a42de9008cb0a1cd91f3))


### Features

* :sparkles: store version number in .version ([b9546b9](https://github.com/nuxtus/nuxtus/commit/b9546b9846f008093407548bd628f1608ef32f62))


### Reverts

* :rewind: google-fonts v2.0.0 does not work, reverting ([035c41b](https://github.com/nuxtus/nuxtus/commit/035c41b6e389ab44a88c823e71ceb9e48d223ca6))

## [1.7.1](https://github.com/nuxtus/nuxtus/compare/v1.7.0...v1.7.1) (2022-11-10)


### Bug Fixes

* **deps:** update dependency nuxt-directus to v3.2.1 ([04c11d7](https://github.com/nuxtus/nuxtus/commit/04c11d73bb054885f51ebaf8c1c42c26052cc911))

# [1.7.0](https://github.com/nuxtus/nuxtus/compare/v1.6.0...v1.7.0) (2022-09-08)


### Features

* :sparkles: Nuxt pages are deleted when Directus collections are removed ([d060049](https://github.com/nuxtus/nuxtus/commit/d0600496a7ff4936aaf29c982bc97950dc99315a))

# [1.6.0](https://github.com/nuxtus/nuxtus/compare/v1.5.2...v1.6.0) (2022-09-06)


### Features

* :sparkles: allow for custom Directus URL ([af115b8](https://github.com/nuxtus/nuxtus/commit/af115b8ab128ae68437ebf79bb73301a96758914))
* :zap: allow for dynamic default directus credentials ([a4ef43e](https://github.com/nuxtus/nuxtus/commit/a4ef43e21c6d63db99a1597643ddb3abb95f2a61))

## [1.5.2](https://github.com/nuxtus/nuxtus/compare/v1.5.1...v1.5.2) (2022-08-30)


### Bug Fixes

* :bug: update @nuxtus/cli to fix token generation issues ([57eed3b](https://github.com/nuxtus/nuxtus/commit/57eed3b9f9d38add0c1a017218b2df36db0152f1))

## [1.5.1](https://github.com/nuxtus/nuxtus/compare/v1.5.0...v1.5.1) (2022-08-29)


### Bug Fixes

* :bug: update to @nuxtus/cli 1.3.0 to be able to use static tokens ([88a304c](https://github.com/nuxtus/nuxtus/commit/88a304c1d357b13a92e4a7167050da1f60a9a641))

# [1.5.0](https://github.com/nuxtus/nuxtus/compare/v1.4.0...v1.5.0) (2022-08-27)


### Features

* :sparkles: update @nuxtus/cli to allow static token auth ([a3996e7](https://github.com/nuxtus/nuxtus/commit/a3996e715858ea544935d7cf1c4ebd4ffbea8029))


### Performance Improvements

* :zap: remove unrequired entries in .env ([064d829](https://github.com/nuxtus/nuxtus/commit/064d8293d06769b6aa96698feba29d032c41778a))

# [1.4.0](https://github.com/nuxtus/nuxtus/compare/v1.3.1...v1.4.0) (2022-08-24)


### Features

* :sparkles: add liquid templates ([4564a69](https://github.com/nuxtus/nuxtus/commit/4564a6983b420353e16147d39b68d909734e8113))
* :sparkles: docs removed in favor of website ([59611ef](https://github.com/nuxtus/nuxtus/commit/59611efdfff2595fefcb7da3f80cfea53678b282))
* :sparkles: new default starting page ([07e8dee](https://github.com/nuxtus/nuxtus/commit/07e8dee1475248cc329571c2f32eb9ab5382c579))

## [1.3.1](https://github.com/nuxtus/nuxtus/compare/v1.3.0...v1.3.1) (2022-08-17)


### Bug Fixes

* :bug: Transpile heroicons for Nuxt 3rc8 compatibility ([3f56efa](https://github.com/nuxtus/nuxtus/commit/3f56efaacfdb5537907acd80b38fa3fe6e1ce12d))

# [1.3.0](https://github.com/nuxtus/nuxtus/compare/v1.2.0...v1.3.0) (2022-07-28)


### Features

* :sparkles: use @nuxtus/nuxt-module instead of hard-coded plugins and api endpoints ([c34a601](https://github.com/nuxtus/nuxtus/commit/c34a601e107be87649ead02ab99072c40b1a9922))

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
