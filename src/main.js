import { createApp } from 'vue'
import App from './App.vue'
import router from './router.js'; // 引入 router.js 文件

createApp(App).use(router).mount('#app'); // 使用 router
