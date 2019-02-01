<template lang="pug">
  .md-layout.md-gutter.md-alignment-top-center
    .md-layout-item.md-size-50.md-small-size-100.md-xsmall-size-100
      md-card.files-card
        md-card-area
          md-card-header
            .md-title Files
            p  ЗАДАЧА - научиться работать с потоками 
              a(href="https://nodejs.org/api/stream.html") streams
              |.
              br
              | Написать HTTP-сервер для загрузки и получения файлов
              br
              | - Все файлы находятся в директории files
              br
              | - Структура файлов НЕ вложенная.
          md-card-content
            strong Открыть:
            form#GET.file-work-form
              md-field
                label Filename
                md-input(v-model='readFileName')
                span.md-helper-text - выдаёт файл file.ext из директории files
              md-button(@click="getFile").file-work-form__button.md-dense.md-raised.md-accent Открыть

            strong Удалить:
            form#DELETE.file-work-form
              md-field
                label Filename
                md-input(v-model='deleteFileName')
                span.md-helper-text - удаляет файл, выводит 200 OK
              md-button.file-work-form__button.md-dense.md-raised.md-accent Удалить

            h3 Загрузить:
            form#POST.file-upload-form
              file-upload
              .file-upload-form__helper-text - пишет всё тело запроса в файл files/file.ext и выдаёт ОК
                br
                | - при превышении файлом размера 1MB выдаёт ошибку 413
                br
                | - если файл уже есть, то выдаёт ошибку 409
              md-button.file-upload-form__button.md-raised.md-accent(type="submit") Загрузить
                md-icon cloud_upload

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
  readFileName: string= ''
  deleteFileName: string = ''

  private get readFileUrl() {
    // eslint-disable-next-line
    return  '/' + this.readFileName.replace(/.*[\\\/]/, '')
  }

  private get deleteFileUrl() {
    // eslint-disable-next-line
    return  '/' + this.deleteFileName.replace(/.*[\\\/]/, '')
  }

  private getFile() {
    this.$axios.get('/files' + this.readFileUrl)
    .then(response => {
      // eslint-disable-next-line
      console.log(`${response.status}: ${response.statusText}`)
    })
  }
}
</script>

<style lang="scss">
@import "~vue-material/dist/theme/engine"; // Import the theme engine

.file-work-form {
  display: flex;
  align-items: flex-end;
  margin-bottom: 58px;

  .md-field {
    margin-bottom: 7px;
  }
  &__button.md-accent {
    color: #fff !important;
    margin-right: 0;
  }
}
.file-upload-form {
  &__button.md-accent {
    padding: 0 8px;
    color: #fff !important;
    margin-left: 0;
  }
  &__helper-text {
    font-size: 12px;
    margin-bottom: 15px;
    color: rgba(0, 0, 0, 0.54);
  }
  .md-icon {
    color: #fff !important;
    margin-left: 10px;
  }
}
.files-card {
  max-width: 420px;
  margin: 0 auto;
  border-top: 5px solid #62efff;
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
