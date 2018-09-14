<template lang="pug">
  .file-work
    form#UPLOAD.file-upload
      md-button.file-upload__button.md-dense.md-raised.md-primary Browse
        input.file-upload__upload-input(v-on:change="browseFile", type='file', name='FileAttachment')
      input.file-upload__upload-url(type='text', readonly='', placeholder='Maximum file size is 1GB')

    form#DELETE.file-work-form
      md-field
        label Filename
        md-input(v-model='filename')
        span.md-helper-text filename.ext
      md-button.file-work-form__button.md-dense.md-raised.md-primary Удалить
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class FileWork extends Vue {
  single: any = null;
  filename: string = '';
  browseFile() {
    // eslint-disable-next-line
    console.log('Browse');
  }
}
</script>

<style lang="scss">
.file-work {
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
  .file-upload {
    display: flex;
    align-items: center;
    .md-button-content {
      position: static;
    }
    &__button.md-primary {
      position: relative;
      color: #fff !important;
      margin-left: 0;
    }
    &__upload-input {
      position: absolute;
      top: 0;
      right: 0;
      margin: 0;
      padding: 0;
      z-index: 10;
      font-size: 20px;
      cursor: pointer;
      height: 33px;
      opacity: 0;
      filter: alpha(opacity=0);
    }
    &__upload-url {
      border: none;
      font-size: 12px;
      padding-left: 0;
      width: 250px;
    }
  }
}
</style>