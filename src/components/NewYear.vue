<template>
  <div class="b-page_newyear">
    <div class="b-page__content">
      <i class="b-head-decor">
        <!-- First Layer of Balls -->
        <i class="b-head-decor__inner b-head-decor__inner_n1">
          <div v-for="n in 9" :key="'b1-' + n" :class="['b-ball', `b-ball_n${n}`, 'b-ball_bounce']">
            <div class="b-ball__right"></div>
            <div class="b-ball__i"></div>
          </div>
          <div v-for="n in 6" :key="'b1-i' + n" :class="['b-ball', `b-ball_i${n}`]">
            <div class="b-ball__right"></div>
            <div class="b-ball__i"></div>
          </div>
        </i>

        <!-- You can repeat more inner layers as necessary (b-head-decor__inner_n2, n3, n4) -->
      </i>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NewYearDecor',
  mounted() {
    // Ensure your external script runs after the component mounts
    this.loadExternalScripts()
  },
  methods: {
    loadExternalScripts() {
      // Load the "newyear.js" script dynamically
      const script = document.createElement('script')
      script.src = 'http://Ваш-домен.ru/catalog/view/javascript/newyear/newyear.js'
      script.async = true
      document.body.appendChild(script)
    },
  },
}
</script>

<style scoped>
/* Scoped or import the necessary NewYear styles */
@import url('http://Ваш-домен.ru/catalog/view/javascript/newyear/style.css');
</style>
