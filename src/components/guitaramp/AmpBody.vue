<template>
  <div class="AmpBody">
    <div class="AmpBody__Inner">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  props: ["values"]
};
</script>

<style lang="scss">
.AmpBody {
  border-radius: 0.5em;
  background-color: var(--bg);
  color: var(--textOnBg);
  padding: 0.5em;
}

.AmpBody__Inner {
  border-radius: 0.3em;
}
</style>
