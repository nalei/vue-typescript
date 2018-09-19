<template lang="pug">
  .file-upload
    md-button.file-upload__button.md-dense.md-raised.md-primary Browse
      input.file-upload__upload-input(@change="uploadFile", type='file', name='FileAttachment')
    span.file-upload__upload-url(v-if="!filesList.length") Maximum file size is 1GB
    span.file-upload__filename(v-else) {{ filesList[filesList.length - 1].name }}
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

interface File {
  name: string
  size: string
  date: Date
  file: any
}

@Component
export default class FileUpload extends Vue {
  files: object[] = []

  get filesList() {
    return this.files.map(this.convertFile)
  }

  uploadFile (e: any) {
    let files = e.target.files || e.dataTransfer.files
    this.files = [...files]
  }
  removeFile () {
    this.files = []
  }
  convertFile (file: any): File {
    return {
      name: file.name,
      size: this.formatSize(file.size),
      date: this.formatDate(file.lastModifiedDate),
      file: file
    }
  }
  formatSize (bytes: any) {
    if (bytes === 0) return '0 Bytes'
    const k = 1024
    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB']
    const i = Math.floor(Math.log(bytes) / Math.log(k))
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i]
  }
  formatDate (date: any) {
    if (!date) return ''
    return date.toLocaleDateString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    })
  }
}
</script>

<style lang="scss">
@import "~vue-material/dist/theme/engine"; // Import the theme engine

.file-upload {
  display: flex;
  align-items: center;
  .md-button-content {
    position: static;
    font-size: 14px;
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
    font-size: 13px;
    color: md-get-palette-color(grey, 600);
  }
  &__filename {
    font-size: 13px;
    color: #000;
    text-overflow: ellipsis;
  }
}
</style>
