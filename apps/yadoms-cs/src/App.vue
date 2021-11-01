<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <server-configuration></server-configuration>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import {ServerConfiguration} from '@yadoms-ui2/vuejs-infrastructure/configurations/server-configuration';

export default defineComponent({
  name: 'App',
  components: {
    ServerConfiguration,
  },
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
