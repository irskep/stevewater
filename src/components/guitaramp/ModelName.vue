<template>
  <div
    class="ModelName"
    :class="{
      ModelName: true,
      [`m-${values.modelNamePosition}`]: true
    }"
  >
    <div class="ModelName_Brand">{{ values.brandName }}</div>
    <div class="ModelName_Model">{{ values.modelName }}</div>
  </div>
</template>

<script>
export default {
  props: { values: {} }
};
</script>

<style lang="scss">
.ModelName {
  background-color: #111;
  padding: 0.5em;

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
}

.ModelName_Brand {
  font-family: var(--name-font);
  font-size: calc(var(--name-font-size) * 2);
  line-height: 100%;
  color: #fff;
  -webkit-text-stroke: 1px black;
}

.ModelName_Model {
  font-family: var(--name-font);
  font-size: calc(var(--name-font-size));
  line-height: var(--name-font-size);
  color: #fff;
  -webkit-text-stroke: 1px black;
}
</style>
