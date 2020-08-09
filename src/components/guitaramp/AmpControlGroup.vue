<template>
  <div :class="{ AmpControlGroup: true, 'm-hidden': hidden }">
    <div
      v-if="values.groupLabelPosition === 'top'"
      class="AmpControlGroup_Label m-top"
    >
      <div class="SpacerLeft"><div class="SpacerLeft_Inner"></div></div>
      <div class="Text">{{ label }}</div>
      <div class="SpacerRight"><div class="SpacerRight_Inner"></div></div>
    </div>

    <div class="AmpControlGroup_Controls">
      <slot></slot>
    </div>

    <div
      v-if="values.groupLabelPosition === 'bottom'"
      class="AmpControlGroup_Label m-bottom"
    >
      <div class="SpacerLeft"><div class="SpacerLeft_Inner"></div></div>
      <div class="Text">{{ label }}</div>
      <div class="SpacerRight"><div class="SpacerRight_Inner"></div></div>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  props: ["values", "label", "hidden"]
};
</script>

<style lang="scss" scoped>
.AmpControlGroup {
  display: flex;
  flex-direction: column;
  align-items: stretch;
}

.AmpControlGroup_Label {
  .m-hidden & {
    visibility: hidden;
  }

  font-size: 0.5em;

  display: flex;
  flex-direction: row;
  justify-content: space-around;

  &.m-top {
    .SpacerLeft,
    .SpacerRight {
      flex-direction: column-reverse;
    }
  }
  &.m-bottom {
    align-items: flex-end;

    .SpacerLeft,
    .SpacerRight {
      flex-direction: column;
    }
  }

  .Text {
    flex-grow: 0;
    margin: 0 0.5em;
    white-space: pre;
    line-height: 1em;
  }

  .SpacerLeft,
  .SpacerRight {
    flex-grow: 1;
    position: relative;
    height: 100%;

    display: flex;
    align-items: stretch;
  }

  &.m-top {
    .SpacerLeft_Inner,
    .SpacerRight_Inner {
      border-top: 1px solid var(--textOnBg2);
      margin-bottom: 0.1rem;
    }
  }

  &.m-bottom {
    .SpacerLeft_Inner,
    .SpacerRight_Inner {
      margin-top: 0.1rem;
      border-bottom: 1px solid var(--textOnBg2);
    }
  }

  .SpacerLeft_Inner {
    min-width: 0.2em;
    height: 0.3em;
    margin-left: 1em;
    border-left: 1px solid var(--textOnBg2);
  }

  .SpacerRight_Inner {
    min-width: 0.2em;
    height: 0.3em;
    margin-right: 1em;
    border-right: 1px solid var(--textOnBg2);
  }
}

.AmpControlGroup_Controls {
  display: flex;
  justify-content: space-evenly;
}
</style>
