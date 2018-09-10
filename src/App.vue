<template lang="pug">
  #app
    md-toolbar.main-header
      md-button.md-icon-button(@click='showNavigation = true')
        md-icon menu
      h3.md-title Default
    md-drawer.main-drawer(:md-active.sync='showNavigation')
      md-toolbar.main-drawer__header(md-elevation='0')
        span.md-title
      nav.md-navigation(@click='showNavigation = false')
        router-link.md-navigation__link(to='/')
          md-icon home
          | Home
        router-link.md-navigation__link(to='/about')
          md-icon forum
          | About
    .md-layout.md-gutter.md-alignment-top-center
      router-view
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class App extends Vue {
  showNavigation: boolean = false;
}
</script>

<style lang="scss">
@import "~vue-material/dist/theme/engine"; // Import the theme engine

@include md-register-theme("default", (
  primary: md-get-palette-color(Cyan, 500), // The primary color of your application
  accent: md-get-palette-color(Lightblue, 500) // The accent or secondary color
));

@import "~vue-material/dist/theme/all"; // Apply the theme

#app {
  .main-drawer {
    background: md-get-palette-color(bluegrey, 800);

    &__header {
      background: md-get-palette-color(bluegrey, 900);
      height: 151px;
    }
  }
  .md-navigation {
    flex-grow: 1;
    background: md-get-palette-color(bluegrey, 800);

    &__link {
      display: flex;
      flex-direction: row;
      align-items: center;
      font-weight: 500;
      color: rgba(255, 255, 255, 0.56);
      // color :md-get-palette-color(grey, 400); 
      text-decoration: none;
      padding: 16px 40px;
      letter-spacing: 0;
      opacity: .87;

      .md-icon {
        font-size: 24px;
        color: #78909c;
        margin-left: 0;
        margin-right: 32px;
      }
    }
    &__link:hover {
      background-color: #00BCD4;
    color: #37474F;
    }
  }
  .md-layout {
    margin: 0 auto;
    max-width: 840px;
  }
}
</style>
