import VueYandexMetrika from 'vue-yandex-metrika'

export default ({ app }) => {
  app.use(VueYandexMetrika, {
    id: 12345678, // Replace with your Yandex Metrica ID
    router: app.router, // Pass the router instance for SPA tracking
    options: {
      accurateTrackBounce: true,
      clickmap: true,
      trackLinks: true,
    },
  })
}
