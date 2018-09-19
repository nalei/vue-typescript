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
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import FileUpload from '@/components/FileUpload.vue'

@Component({
  components: {
    FileUpload
  }
})
export default class FileWork extends Vue {
  filenameForDelete: string = ''
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