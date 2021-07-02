import { createApp } from 'vue';
import App from '@/App.vue';
import router from '@/router';
import elementPlus from '@/plugins/element-plus';

import '@/styles/index.scss';

const app = createApp(App);

(async () => {
  app.use(router).use(elementPlus);

  await router.isReady();

  app.mount('#app');
})();
