<!-- routify:options preload="proximity" -->
<script>
  import {metatags} from '@roxi/routify';

  const metaConfig = {
    siteName: 'Hashtags - Generate Random Hashtags',
    siteDescription: 'Get 10 or 30 random hashtags from your long list of hashtags!',
    siteImage: 'https://hashtag.reinaldyrafli.com/social.jpg',
    baseURL: 'https://hashtag.reinaldyrafli.com',
    themeColor: '#f9fafb',
    siteLocale: 'en_US',
    myName: 'Reinaldy Rafli',
  };

  metatags.title = metaConfig.siteName;
  metatags.description = metaConfig.description;
  metatags.author = metaConfig.myName;
  metatags.publisher = metaConfig.myName;
  metatags['mobile-web-app-capable'] = 'no';
  metatags['og:type'] = 'website';
  metatags.url = metaConfig.baseURL;
  metatags.image = metaConfig.siteImage;
  metatags['og:image:secure_url'] = metaConfig.siteImage;
  metatags['theme-color'] = metaConfig.themeColor;
  metatags['og:locale'] = metaConfig.siteLocale;
  metatags['twitter:card'] = 'summary_large_image';
  metatags['twitter:site'] = '';
  metatags['twitter:creator'] = metaConfig.myName;
  metatags['twitter:title'] = metaConfig.siteName;
  metatags['twitter:description'] = metaConfig.description;
  metatags['twitter:image'] = metaConfig.siteImage;
</script>

<div class="font-inter dark:bg-gray-900 dark:text-white">
  <slot />
</div>

<style windi:preflights:global windi:safelist:global>
</style>
