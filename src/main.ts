import './style.css';
import { createApp } from 'vue';
import App from './App.vue';
import componens from '../lib/main';

createApp(App).use(componens).mount('#app');
