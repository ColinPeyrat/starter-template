import Vue from 'vue';
import TweenMax from 'gsap/TweenMax';

const ticker = {
  install(Vue) {
    TweenMax.ticker.addEventListener('tick', () => {
      Vue.prototype.$bus.$emit('tick');
    });
  }
};

Vue.use(ticker);
