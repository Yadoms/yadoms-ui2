import {createApp} from 'vue';
import App from './App.vue';
import {ServerConfiguration} from '@yadoms-ui2/vuejs-infrastructure/configurations/server-configuration';

createApp(App).mount('#app');
ServerConfiguration.use();
