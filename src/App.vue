<template>
  <router-view />
</template>

<script setup>
import { onMounted } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

onMounted(() => {
  if (window.Ya && window.Ya.Metrika2) {
    const metrika = new window.Ya.Metrika2({
      id: 99475151, // Replace with your Counter ID
    })

    // Track initial page load
    metrika.hit(window.location.href)

    // Track route changes
    router.afterEach((to) => {
      metrika.hit(to.fullPath)
    })
  }
})
</script>
