<template lang="pug">
  .md-layout.md-gutter
    .md-layout-item.md-large-size-33.md-small-size-50.md-xsmall-size-100
      md-card
        md-card-area
          md-card-header
            .md-title Загрузка и получение файлов
          md-card-content
            form#POST
              file-upload

            form#GET.file-work-form
              md-field
                label Filename
                md-input(v-model='filenameForRead')
                span.md-helper-text filename.ext
              md-button.file-work-form__button.md-dense.md-raised.md-primary Загрузить

            form#DELETE.file-work-form
              md-field
                label Filename
                md-input(v-model='filenameForDelete')
                span.md-helper-text filename.ext
              md-button.file-work-form__button.md-dense.md-raised.md-primary Удалить

    //- .md-layout-item.md-large-size-33.md-small-size-50.md-xsmall-size-100
    //-   md-card.dog-card
    //-     md-card-area
    //-       md-card-header
    //-         md-card-header-text
    //-           .md-title Primary color
    //-           .md-subhead Subtitle here
    //-       md-card-content
    //-         | Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio itaque ea, nostrum odio. Dolores, sed accusantium quasi non.
    //-     md-card-actions
    //-       md-button Action

    //- .md-layout-item.md-large-size-33.md-small-size-50.md-xsmall-size-100
    //-   md-card
    //-     md-card-area
    //-       md-card-media
    //-         img(src='../assets/card-image-1.jpg', alt='People')
    //-       md-card-header
    //-         .md-title Actions left aligned
    //-         .md-subhead Subtitle here
    //-       md-card-content
    //-         | Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio itaque ea, nostrum odio. Dolores, sed accusantium quasi non, voluptas eius illo quas, saepe voluptate pariatur in deleniti minus sint. Excepturi.
    //-     md-card-actions(md-alignment='left')
    //-       md-button Read more

</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import FileUpload from '@/components/FileUpload.vue'

@Component({
  components: {
    FileUpload
  },
})
export default class Home extends Vue {
  filenameForDelete: string = ''
  filenameForRead: string= ''
}
</script>

<style lang="scss">
@import "~vue-material/dist/theme/engine"; // Import the theme engine

.file-work-form {
  display: flex;
  align-items: flex-end;

  .md-field {
    margin-bottom: 7px;
  }
  &__button.md-primary {
    color: #fff !important;
    margin-right: 0;
  }
}
.dog-card {
  .md-card-header {
    min-height: 200px;
    background: md-get-palette-color(teal, 300);
    background-image: url(../assets/dog.png);
    background-position: 90% 100%;
    background-repeat: no-repeat;
  }
}
</style>
