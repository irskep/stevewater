<template>
  <div
    :class="{
      BigSwitchContainer: true,
      [`m-${values.knobLabelPosition}`]: true
    }"
  >
    <div v-if="label !== '&nbsp;'" class="Label">{{ label }}</div>
    <div class="BigSwitch">
      <div :class="{ BigSwitch_Switch: true, [`m-${color}`]: true }"></div>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  props: { values: {}, label: {}, color: { default: "red" } }
};
</script>

<style lang="scss">
.BigSwitchContainer {
  display: flex;
  align-items: center;
  --knobSize: 1.2em;

  &.m-top {
    margin-bottom: 0.5em;
    flex-direction: column;

    .BigSwitch {
      margin-top: -0.2em;
    }
  }

  &.m-bottom {
    margin-top: 0.5em;
    flex-direction: column-reverse;

    .BigSwitch {
      margin-bottom: -0.2em;
    }
  }

  .Label {
    font-size: 0.5em;
    margin: 0 0.2em;
    white-space: pre;
  }

  .BigSwitch {
    position: relative;
    width: var(--knobSize);
    height: var(--knobSize);
    margin: 0 0.3em;
    padding: 0.15em;

    background-color: #000;

    display: flex;
    justify-content: center;
    align-items: center;

    .BigSwitch_Switch {
      width: 100%;
      height: 100%;

      background: linear-gradient(
        0deg,
        rgba(12, 15, 14, 1) 0%,
        rgba(60, 60, 60, 1) 7%,
        rgba(32, 33, 30, 1) 50%,
        rgba(28, 26, 25, 1) 100%
      );

      &.m-red {
        background: linear-gradient(
          0deg,
          rgba(81, 1, 3, 1) 0%,
          rgba(155, 18, 19, 1) 7%,
          rgba(177, 40, 43, 1) 50%,
          rgba(153, 7, 9, 1) 100%
        );
      }
    }
  }
}
</style>
