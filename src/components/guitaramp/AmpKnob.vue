<template>
  <div
    :class="{ AmpKnobContainer: true, [`m-${values.knobLabelPosition}`]: true }"
  >
    <div v-if="label !== '&nbsp;'" class="Label">{{ label }}</div>
    <div class="AmpKnob">
      <div class="AmpKnob_Tick"></div>
      <div class="AmpKnob_Markers">
        <div class="n-1"></div>
        <div class="n-2"></div>
        <div class="n-3"></div>
        <div class="n-4"></div>
        <div class="n-5"></div>
        <div class="n-6"></div>
        <div class="n-7"></div>
        <div class="n-8"></div>
        <div class="n-9"></div>
        <div class="n-10"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  props: ["values", "label"]
};
</script>

<style lang="scss">
.AmpKnobContainer {
  display: flex;
  align-items: center;
  --knobSize: 1em;

  &.m-top {
    flex-direction: column;
  }

  &.m-bottom {
    flex-direction: column-reverse;
  }

  .Label {
    font-size: 0.5em;
    margin: 0 0.2em;
  }

  .AmpKnob {
    position: relative;
    width: var(--knobSize);
    height: var(--knobSize);
    margin: 0 0.3em;

    background-color: var(--knob);
    border-radius: calc(var(--knobSize) / 2);
  }

  --tickStart: -112deg;
  --tickSpacing: 25deg;

  .AmpKnob_Tick {
    position: relative;
    width: 100%;
    height: 100%;
    transform: rotate(calc(var(--tickStart) + var(--tickSpacing) * 9));

    &::after {
      content: " ";
      position: absolute;
      display: block;
      left: calc(50% - 0.5px);
      top: 0;
      width: 2px;
      height: 27%;
      background-color: var(--knobTick);
      z-index: 3;
    }
  }

  .AmpKnob_Markers {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;

    & > * {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;

      &::after {
        content: " ";
        position: absolute;
        display: block;
        left: calc(50% - 0.5px);
        top: -20%;
        width: 1px;
        height: 10%;
        background-color: var(--textOnBg2);
        z-index: 3;
      }

      &.n-1 {
        transform: rotate(calc(var(--tickStart) + var(--tickSpacing) * 0));
      }
      &.n-2 {
        transform: rotate(calc(var(--tickStart) + var(--tickSpacing) * 1));
      }
      &.n-3 {
        transform: rotate(calc(var(--tickStart) + var(--tickSpacing) * 2));
      }
      &.n-4 {
        transform: rotate(calc(var(--tickStart) + var(--tickSpacing) * 3));
      }
      &.n-5 {
        transform: rotate(calc(var(--tickStart) + var(--tickSpacing) * 4));
      }
      &.n-6 {
        transform: rotate(calc(var(--tickStart) + var(--tickSpacing) * 5));
      }
      &.n-7 {
        transform: rotate(calc(var(--tickStart) + var(--tickSpacing) * 6));
      }
      &.n-8 {
        transform: rotate(calc(var(--tickStart) + var(--tickSpacing) * 7));
      }
      &.n-9 {
        transform: rotate(calc(var(--tickStart) + var(--tickSpacing) * 8));
      }
      &.n-10 {
        transform: rotate(calc(var(--tickStart) + var(--tickSpacing) * 9));
      }
    }
  }
}
</style>
