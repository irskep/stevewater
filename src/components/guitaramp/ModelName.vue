<template>
  <div
    class="ModelName"
    :class="{
      ModelName: true,
      'm-background': hasbackground,
      [`m-${values.modelNamePosition}`]: true
    }"
  >
    <div class="ModelName_Brand">{{ values.brandName }}</div>
    <div class="ModelName_Model">{{ values.modelName }}</div>
  </div>
</template>

<script>
export default {
  props: { values: {}, hasbackground: { default: true } }
};
</script>

<style lang="scss">
.ModelName {
  padding: 0.5em;

  &.m-background {
    background-color: #111;
  }

  &.m-cabTopCenter {
    border-bottom-left-radius: 0.5em;
    border-bottom-right-radius: 0.5em;
    text-align: center;
  }

  &.m-cabTopRight {
    border-bottom-left-radius: 0.5em;
    text-align: right;
  }

  &.m-cabTopLeft {
    border-bottom-right-radius: 0.5em;
    text-align: left;
  }

  &.m-cabCenter {
    border-radius: 0.5em;
    text-align: center;
  }

  &.m-underControls {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0;

    .ModelName_Brand {
      margin-right: 1em;
      -webkit-text-stroke: unset;
    }

    .ModelName_Model {
      -webkit-text-stroke: unset;
    }
  }
}

.ModelName_Brand {
  font-family: var(--name-font);
  font-size: calc(var(--name-font-size) * 2);
  line-height: 100%;
  color: #fff;
}

.ModelName_Model {
  font-family: var(--name-font);
  font-size: calc(var(--name-font-size));
  line-height: var(--name-font-size);
  color: #fff;
}
</style>
