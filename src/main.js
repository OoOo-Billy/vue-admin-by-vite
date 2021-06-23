import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

const app = createApp(App);

(async () => {
  app.use(router);
  await router.isReady();
  app.mount('#app');
})();
