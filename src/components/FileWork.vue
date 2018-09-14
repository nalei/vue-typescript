<template lang="pug">
  .file-work
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
  filename: string = '';
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
}
</style>