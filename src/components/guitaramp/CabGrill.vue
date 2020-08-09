<template>
  <div class="CabGrill" :style="{ height: values.height }">
    <div :class="{ Pattern: true, [`m-${values.grillStyle}`]: true }">
      <div></div>
    </div>
    <div
      :class="{
        CabGrill_Contents: true,
        [`m-${
          values.structure === 'combo'
            ? values.modelNamePosition
            : values.modelNamePosition2
        }`]: true
      }"
    >
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
.CabGrill {
  // these will be configurable later
  --grillA: #111;
  --grillB: #333;

  --grillSpacing: 4px;
  --grillLineWidth: 1px;
  min-width: 16em;
  border: 1px solid var(--grillB);

  background-color: var(--grillA);
  border-bottom-left-radius: 0.2em;
  border-bottom-right-radius: 0.2em;

  position: relative;

  .CabGrill_Contents {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;

    display: flex;

    &.m-cabCenter {
      align-items: center;
      justify-content: center;
    }

    &.m-cabTopLeft {
      align-items: flex-start;
      justify-content: flex-start;
    }

    &.m-cabTopRight {
      align-items: flex-start;
      justify-content: flex-end;
    }

    &.m-cabTopCenter {
      align-items: flex-start;
      justify-content: center;
    }
  }

  .Pattern {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;

    &::after,
    & > div {
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

  .Pattern.m-grid2 {
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
        transparent calc(var(--grillSpacing) * 2),
        var(--grillB) var(--grillLineWidth),
        var(--grillB) calc(var(--grillSpacing) * 2 + var(--grillLineWidth))
      );
    }
  }

  .Pattern.m-crosshatch,
  .Pattern.m-crosshatch2 {
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

  .Pattern.m-crosshatch2 > div {
    background: repeating-linear-gradient(
      0deg,
      transparent,
      transparent var(--grillSpacing),
      var(--grillB) var(--grillLineWidth),
      var(--grillB) calc(var(--grillSpacing) + var(--grillLineWidth))
    );
  }
}
</style>
