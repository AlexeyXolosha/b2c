// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: ['@pinia/nuxt'],
  css: ['~/assets/style/main.scss', '~/assets/fonts/font-awesome/css/all.css'],

  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `
              @use "~/assets/style/_vars.scss" as *;
              @use "~/assets/style/_mixins.scss" as *;
          `
        }
      }
    }
  },

  runtimeConfig: {
    public: {
      API_URL: "https://api.b2c.itl.digital/",
    }
  },


})

