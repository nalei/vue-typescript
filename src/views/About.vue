<template lang="pug">
  .md-layout-item.about
    hello-world(msg='Welcome to Your Vue.js + TypeScript App')
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import HelloWorld from '@/components/HelloWorld.vue';

@Component({
  components: {
    HelloWorld
  },
})
export default class About extends Vue {}
</script>
