<template lang="pug">
  .file-work
    form#UPLOAD.file-upload
      md-button.file-upload__button.md-dense.md-raised.md-primary Browse
        input.file-upload__upload-input(v-on:change="uploadFile", type='file', name='FileAttachment')
      input.file-upload__upload-url(v-model="files" type='text', readonly='', placeholder='Maximum file size is 1GB')

    form#DELETE.file-work-form
      md-field
        label Filename
        md-input(v-model='filenameForDelete')
        span.md-helper-text filename.ext
      md-button.file-work-form__button.md-dense.md-raised.md-primary Удалить
</template>

<script>
export default {
  data () {
    return {
      filenameForDelete: '',
    }
  },
  props: {
    value: {
      default: () => []
    }
  },
  computed: {
    files: {
      get () {
        return this.value;
      },
      set (files) {
        this.$emit('input', files);
      }
    }
  },
  methods: {
    uploadFile (e) {
      let files = e.target.files || e.dataTransfer.files;
      this.files.push(...files);
    },
    removeFile (index) {
      this.files.splice(index, 1);
    },
    removeSingleFile () {
      this.files = [];
    },
    convertFile (file) {
      return {
        name: file.name,
        size: this.formatSize(file.size),
        date: this.formatDate(file.lastModifiedDate),
        image: file
      }
    },
    formatSize (bytes) {
      if (bytes === 0) return '0 Bytes'
      const k = 1024
      const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB']
      const i = Math.floor(Math.log(bytes) / Math.log(k))
      return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i]
    },
    formatDate (date) {
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
      border: none;
      font-size: 12px;
      width: 250px;
    }
  }
}
</style>