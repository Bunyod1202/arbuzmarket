<template>
  <router-view />
</template>

<script setup>
import { onMounted } from 'vue'

onMounted(() => {
  const scriptId = 'yandex-metrika-script'
  if (!document.getElementById(scriptId)) {
    // Create and add the Yandex Metrica script dynamically
    const script = document.createElement('script')
    script.id = scriptId
    script.type = 'text/javascript'
    script.async = true
    script.src = 'https://mc.yandex.ru/metrika/tag.js'

    script.onload = () => {
      if (window.ym) {
        window.ym(99475151, 'init', {
          clickmap: true,
          trackLinks: true,
          accurateTrackBounce: true,
          webvisor: true,
          ecommerce: 'dataLayer',
        })
      }
    }

    script.onerror = () => {
      console.error('Yandex Metrika failed to load.')
    }

    document.head.appendChild(script)
  }

  // Add <noscript> alternative
  const noscriptElement = document.createElement('noscript')
  noscriptElement.innerHTML = `
    <div><img src="https://mc.yandex.ru/watch/99475151" style="position:absolute; left:-9999px;" alt="" /></div>
  `
  document.body.appendChild(noscriptElement)
})
</script>
