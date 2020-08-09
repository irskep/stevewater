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
  padding: 0.2em 0.5em;

  display: flex;
  flex-direction: row;

  border: 1px solid rgba(0, 0, 0, 0.5);
}
</style>
