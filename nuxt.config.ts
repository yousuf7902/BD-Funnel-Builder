// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: false },
  ssr: false,
  modules: ['@nuxtjs/tailwindcss', "nuxt-toastify"],
  app:{
    head:{
      title: "Nuxt App",
      meta: [{
        name: "description", content: "Everything about nuxt app"
      }],
      link: [
        {rel:"stylesheet", href:"https://fonts.googleapis.com/icon?family=Material+Icons"}
      ]
    }
  }
})