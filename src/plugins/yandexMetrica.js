export default ({ router }) => {
  if (typeof window !== 'undefined' && window.Ya && window.Ya.Metrika2) {
    const metrika = new window.Ya.Metrika2({
      id: 99475151, // Replace with your Yandex Metrica Counter ID
    })

    router.afterEach((to) => {
      metrika.hit(to.fullPath)
    })
  }
}
