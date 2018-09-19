<template lang="pug">
  .file-work
    form#UPLOAD
      file-upload
    form#DELETE.file-work-form
      md-field
        label Filename
        md-input(v-model='filenameForDelete')
        span.md-helper-text filename.ext
      md-button.file-work-form__button.md-dense.md-raised.md-primary Удалить
    
    Select(
    name='monacoThemes'
    label='Choose a theme'
    :options='editorThemes'
    :onChange='consoleOptions'
    )
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import FileUpload from '@/components/FileUpload.vue'
import Select from '@/components/Select.vue'

@Component({
  components: {
    FileUpload,
    Select
  }
})
export default class FileWork extends Vue {
  filenameForDelete: string = ''

  editorThemes = [
    {label: 'Log light', value: 'log-light'},
    {label: 'Log dark', value: 'log-dark'},
    {label: 'VS light', value: 'vs'},
    {label: 'VS dark', value: 'vs-dark'}
  ]

  private consoleOptions(value: any, option: any) {
    // eslint-disable-next-line
    console.log(`${option}:  ${value}`);
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
}
</style>