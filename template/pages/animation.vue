<template>
  <section class="container">
    <p class="animation">animation</p>
    <nuxt-link to="/">Home</nuxt-link>
  </section>
</template>

<script>
import TweenMax from 'gsap/TweenMax';

import tickable from '~/mixins/tickable';

export default {
  mixins: [tickable],
  data() {
    return {
      time: 0
    };
  },
  mounted() {
    this.$animation = this.$el.querySelectorAll('.animation');
  },
  methods: {
    onTick() {
      console.log('tick');

      const amplitude = 200;
      const x = Math.cos(this.time * 0.03) * amplitude;
      const y = Math.cos(this.time * 0.05) * amplitude;

      TweenMax.set(this.$animation, { x, y });

      this.time++;
    }
  }
};
</script>

<style scoped>
.animation {
  font-size: 40px;
}
</style>
