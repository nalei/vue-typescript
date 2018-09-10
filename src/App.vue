<template>
  <div id="app">
    <md-toolbar class="main-header">
      <md-button class="md-icon-button" @click="showNavigation = true">
        <md-icon>menu</md-icon>
      </md-button>
      <h3 class="md-title">Default</h3>
    </md-toolbar>
    <md-drawer class="main-drawer" :md-active.sync="showNavigation">
      <md-toolbar class="main-drawer__header" md-elevation="0">
        <span class="md-title">Default</span>
      </md-toolbar>
      <nav id="nav">
        <md-list  class="md-navigation">
          <md-list-item class="md-navigation__item">
            <router-link class="md-navigation__link" to="/">
              <md-icon>home</md-icon>
              Home
            </router-link> 
          </md-list-item>
          <md-list-item  class="md-navigation__item">
            <router-link class="md-navigation__link" to="/about">About</router-link>
          </md-list-item>
        </md-list>
      </nav>
    </md-drawer>
    <div class="md-layout md-alignment-top-center">
      <router-view/>
    </div>
  </div>
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
  // font-family: 'Avenir', Helvetica, Arial, sans-serif;
  // -webkit-font-smoothing: antialiased;
  // -moz-osx-font-smoothing: grayscale;
  .main-drawer {
    background: md-get-palette-color(bluegrey, 800);
    &__header {
      background: md-get-palette-color(bluegrey, 900);
    }
  }
  .md-layout {
    margin: 0 auto;
    max-width: 840px;
  }
}
#nav {
  background: md-get-palette-color(bluegrey, 800);
  .md-navigation {
    background: md-get-palette-color(bluegrey, 800);
    &__link {
      color :md-get-palette-color(grey, 400); 
      text-decoration: none;
      font-weight: 400;
      letter-spacing: 0;
      opacity: .87;

      padding: 16px 40px;
    }
  }
}
</style>
