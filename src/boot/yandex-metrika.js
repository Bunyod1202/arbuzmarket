export default ({ app }) => {
  // Only run on client-side and only in production mode
  if (process.env.CLIENT && process.env.PROD) {
    // Declare ym as a global variable
    window.ym =
      window.ym ||
      function () {
        ;(window.ym.a = window.ym.a || []).push(arguments)
      }
    window.ym.l = 1 * new Date()

    // Add Yandex Metrika script
    const script = document.createElement('script')
    script.async = true
    script.src = 'https://mc.yandex.ru/metrika/tag.js'
    document.head.appendChild(script)

    // Initialize Yandex Metrika
    window.ym(99475151, 'init', {
      clickmap: true,
      trackLinks: true,
      accurateTrackBounce: true,
      webvisor: true,
    })

    // Add to Vue instance so that we can use it in our components
    app.config.globalProperties.$ym = window.ym
  }
}
