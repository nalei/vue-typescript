<template lang="pug">
  .md-layout.md-gutter
    .md-layout-item.md-large-size-33.md-small-size-50.md-xsmall-size-100
      md-card
        md-card-area
          md-card-header
            .md-title Card without hover effect
          md-card-content
            file-work

    .md-layout-item.md-large-size-33.md-small-size-50.md-xsmall-size-100
      md-card.dog-card
        md-card-area
          md-card-header
            md-card-header-text
              .md-title Primary color
              .md-subhead Subtitle here
          md-card-content
            | Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio itaque ea, nostrum odio. Dolores, sed accusantium quasi non.
        md-card-actions
          md-button Action

    .md-layout-item.md-large-size-33.md-small-size-50.md-xsmall-size-100
      md-card
        md-card-area
          md-card-media
            img(src='../assets/card-image-1.jpg', alt='People')
          md-card-header
            .md-title Actions left aligned
            .md-subhead Subtitle here
          md-card-content
            | Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio itaque ea, nostrum odio. Dolores, sed accusantium quasi non, voluptas eius illo quas, saepe voluptate pariatur in deleniti minus sint. Excepturi.
        md-card-actions(md-alignment='left')
          md-button Read more

</template>
<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import FileWork from '@/components/FileWork.vue';

@Component({
  components: {
    FileWork
  },
})
export default class App extends Vue {}
</script>

<style lang="scss">
@import "~vue-material/dist/theme/engine"; // Import the theme engine

.dog-card 
  .md-card-header {
    min-height: 200px;
    background: md-get-palette-color(teal, 300);
    background-image: url(../assets/dog.png);
    background-position: 90% 100%;
    background-repeat: no-repeat;
  }
</style>
