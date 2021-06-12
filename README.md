# Nuxt.js vs Routify

Right, so.. let's get to the point.

I created this repo (initially, a separate one just on my local computer) just to learn Svelte. By copying all the stuff I did with Nuxt and changing some stuff along the way to make it work. But, it turns out, I think it's a pretty good comparison on basic things you can do with Vue vs Svelte. You can see the actual app (with the proper hashtags) [here](https://hashtag.reinaldyrafli.com/)

* [Nuxt](https://nuxtjs.org/) is a SSR/SSG Vue-based framework
* [Routify](https://routify.dev/) is a SSR/SSG Svelte-based framework

The stack:
* The framework (Nuxt/Routify)
* [WindiCSS](http://windicss.org/) - CSS Utility Library
* Yarn

## Setup Guide

### Nuxt
```bash
# install dependency
yarn

# run local dev server
yarn dev

# run eslint (with xo-config-space) if you want
yarn lint

# build into static site
yarn generate
```

### Routify
```bash
# install dependency
yarn

# run local dev server
yarn dev

# run eslint (with xo-config-space) if you want
yarn lint

# build into static site
yarn build
```

## Contribution

If you find any bugs, feel free to open up an issue. If you can make the bug dissapear, please submit a PR! Because that will be fun!

Also, I'm kinda interested on having a Next.js implementation of this one. Seems nice to have all three together.

## License

Nuxt vs Routify is a sample single page site to showcase both Nuxt and Routify
Copyright (C) 2021-present Reinaldy Rafli

This program is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with this program.  If not, see <https://www.gnu.org/licenses/>.