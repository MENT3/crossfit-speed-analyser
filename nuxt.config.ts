// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxtjs/supabase', '@nuxt/ui'],
  plugins: ['@/plugins/chartjs.ts'],
  devtools: { enabled: true },
  colorMode: {
    preference: 'light'
  }
})
