// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },

  tailwindcss: {
    cssPath: ['~/assets/css/tailwind.css', {injectPosition: "first"}],
    configPath: 'tailwind.config',
  },

  modules: ['@nuxtjs/tailwindcss', '@nuxt/content', '@nuxt/image'],

  // ssr: true,

  // https://juejin.cn/post/7352797634556395535
  target: 'static', // 静态化部署
  app: {
    baseUrl: '/', // /仓库名/
  },
})