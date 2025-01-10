<template>
  <q-page>
    <q-btn @click="trackEvent">Track Custom Event</q-btn>
  </q-page>
</template>

<script>
export default {
  name: 'SomePage',
  methods: {
    trackEvent() {
      if (process.env.CLIENT && process.env.PROD) {
        this.$ym('reachGoal', 'button_clicked')
      }
    },
  },
}
</script>
