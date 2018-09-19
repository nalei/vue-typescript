<template lang="pug">
  span.select
    label(:for='name') {{label}}:
    select(
    :id='name'
    :value='selectedOption'
    @change='select'
    )
      option(
      v-for='option in options'
      :key='option.value'
      :value='option.value'
      ) {{option.label}}
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

interface SelectOption<T> {
  label: string,
  value: T,
  selected?: boolean
}

@Component
export default class Select extends Vue {
  @Prop({default: ''}) name!: string;
  @Prop({default: ''}) label!: string;
  @Prop({default: false}) options!: SelectOption<string | number>[];
  @Prop() onChange!: (selected: boolean, name?: string) => void;

  private get selectedOption() {
    return (this.$props.options.find(({selected}: SelectOption<string | number>) => selected) || {}).value;
  }

  private select(e: Event) {
    this.$props.onChange((<HTMLSelectElement>e.target).value, this.$props.name);
  }
}
</script>

<style lang="scss">
  .select {
    padding: 0 1em;

    label {
      padding-right: .5em;
    }

    select {
      height: 2em;
    }
  }
</style>
