<template>
  <div class="SomeSwitch">
    <BigSwitch
      v-if="values.powerSwitchStyle === 'flat'"
      :values="values"
      :color="s.style"
      :label="s.label"
    ></BigSwitch>
    <FingerSwitch
      v-if="values.powerSwitchStyle === 'round'"
      :values="values"
      :labelPosition="values.knobLabelPosition"
      size="0.7em"
      :label="s.label"
    ></FingerSwitch>
  </div>
</template>

<script>
import FingerSwitch from "@/components/guitarpedal/FingerSwitch.vue";
import BigSwitch from "./BigSwitch.vue";
export default {
  components: { FingerSwitch, BigSwitch },
  props: { values: {}, s: {} }
};
</script>

<style lang="scss">
.SomeSwitch {
  margin: 0 0.2em;
}
</style>
