// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: [
        '@nuxtjs/google-fonts',
        'nuxt-icons',
    ],
    css: [
        '~/assets/main.scss',
    ],
    googleFonts: {
        families: {
            Inter: true,
        }
    },
    vite: {
        css: {
            preprocessorOptions: {
                scss: {
                    additionalData: '@import "@/assets/_colors.scss";',
                }
            }
        }
    },
})
