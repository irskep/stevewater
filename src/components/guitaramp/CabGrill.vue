<template>
  <div class="CabGrill" :style="{ height: values.height }">
    <div :class="{ Pattern: true, [`m-${values.grillStyle}`]: true }"></div>
    <slot></slot>
  </div>
</template>

<script>
export default {
  components: {},
  props: ["values"]
};
</script>

<style lang="scss">
.CabGrill {
  // these will be configurable later
  --grillA: #111;
  --grillB: #666;

  --grillSpacing: 4px;
  --grillLineWidth: 1px;
  min-width: 16em;
  border: 1px solid var(--grillB);

  background-color: var(--grillA);
  border-bottom-left-radius: 0.2em;
  border-bottom-right-radius: 0.2em;

  position: relative;

  .Pattern {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;

    &::after {
      content: " ";
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
    }
  }

  .Pattern.m-grid {
    background: repeating-linear-gradient(
      0deg,
      transparent,
      transparent var(--grillSpacing),
      var(--grillB) var(--grillLineWidth),
      var(--grillB) calc(var(--grillSpacing) + var(--grillLineWidth))
    );

    &::after {
      background: repeating-linear-gradient(
        90deg,
        transparent,
        transparent var(--grillSpacing),
        var(--grillB) var(--grillLineWidth),
        var(--grillB) calc(var(--grillSpacing) + var(--grillLineWidth))
      );
    }
  }

  .Pattern.m-crosshatch {
    background: repeating-linear-gradient(
      45deg,
      transparent,
      transparent var(--grillSpacing),
      var(--grillB) var(--grillLineWidth),
      var(--grillB) calc(var(--grillSpacing) + var(--grillLineWidth))
    );

    &::after {
      background: repeating-linear-gradient(
        -45deg,
        transparent,
        transparent var(--grillSpacing),
        var(--grillB) var(--grillLineWidth),
        var(--grillB) calc(var(--grillSpacing) + var(--grillLineWidth))
      );
    }
  }
}
</style>
