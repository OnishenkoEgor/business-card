// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    compatibilityDate: '2024-11-01',
    devtools: {enabled: true},
    runtimeConfig: {
        public: {
            githubAccessToken: process.env.GITHUB_ACCESS_TOKEN,
            githubUserName: process.env.GITHUB_USER_NAME
        },
    },
})
