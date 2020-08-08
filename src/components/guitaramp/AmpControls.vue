<template>
  <div class="AmpControls">
    <slot></slot>
  </div>
</template>

<script>
export default {
  components: {},
  props: ["values"]
};
</script>

<style lang="scss" scoped>
.AmpControls {
  background-color: var(--bg2);
  color: var(--textOnBg2);
  padding: 0.2em 1em;

  display: flex;
  flex-direction: row;

  & > * {
    margin-right: 1em;

    &:last-child {
      margin-right: 0;
    }
  }
}
</style>
