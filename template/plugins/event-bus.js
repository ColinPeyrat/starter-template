import Vue from 'vue';

const bus = new Vue();

const eventBus = {
  // The install method is all that needs to exist on the plugin object.
  // It takes the global Vue object as well as user-defined options.
  install(Vue, options) {
    Object.defineProperty(Vue.prototype, '$bus', {
      get() {
        return bus;
      }
    });
  }
};

Vue.use(eventBus);
