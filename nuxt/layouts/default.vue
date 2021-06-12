<template>
  <div class="font-inter dark:bg-gray-900 dark:text-white">
    <Nuxt />
  </div>
</template>

<script>
export default {
  head() {
    return {
      meta: [
        // Global
        {name: 'author', content: this.$config.myName},
        {name: 'publisher', content: this.$config.baseURL},
        {name: 'apple-mobile-web-app-title', content: this.$config.siteName},
        {name: 'mobile-web-app-capable', content: 'no'},
        {name: 'theme-color', content: this.$config.themeColor},

        // Facebook & LinkedIn
        {property: 'og:title', content: this.$config.siteName},
        {property: 'og:description', content: this.$config.siteDescription},
        {property: 'og:type', content: 'website'},
        {property: 'og:url', content: this.$config.baseURL},
        {property: 'og:image', content: this.$config.siteImage},
        {property: 'og:image:secure_url', content: this.$config.siteImage},
        {property: 'og:image:alt', content: this.$config.siteName},
        {property: 'og:locale', content: this.$config.siteLocale},
        {property: 'og:site_name', content: this.$config.siteName},

        // Twitter
        {name: 'twitter:card', content: 'summary_large_image'},
        {name: 'twitter:site', content: ''},
        {name: 'twitter:creator', content: this.$config.myName},
        {name: 'twitter:title', content: this.$config.siteName},
        {name: 'twitter:description', content: this.$config.siteDescription},
        {name: 'twitter:image', content: this.$config.siteImage}
      ]
    };
  }
};
</script>

<style>

*,
*:before,
*:after {
    box-sizing: border-box;
    margin: 0;
}

html {
  scroll-behavior: smooth;
}
</style>
