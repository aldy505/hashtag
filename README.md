# Nuxt.js vs Routify

Right, so.. let's get to the point.

I created this repo (initially, a separate one just on my local computer) just to learn Svelte. By copying all the stuff I did with Nuxt and changing some stuff along the way to make it work. But, it turns out, I think it's a pretty good comparison on basic things you can do with any other framework. You can see the actual app (with the proper hashtags) [here](https://hashtag.reinaldyrafli.com/)

* [Nuxt](https://nuxtjs.org/) is a SSR/SSG Vue-based framework
* [Routify](https://routify.dev/) is a SSR/SSG Svelte-based framework
* [Solid JS](https://www.solidjs.com/) is pure fast reactive library (having React-like syntax)

The stack:
* The framework (Nuxt/Routify)
* [WindiCSS](http://windicss.org/) - CSS Utility Library
* Yarn

## Setup Guide

All frameworks (should) have the same commands, so everything would be easy.

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
