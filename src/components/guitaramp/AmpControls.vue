<template>
  <div class="AmpControls">
    <AmpControlGroup :numControls="1" :hidden="true" :values="values" label=" ">
      <InputJack :values="values" appearance="hex" label="INPUT"></InputJack>
    </AmpControlGroup>

    <ModelName
      :position="values.modelNamePosition"
      :hasbackground="false"
      :values="values"
      v-if="values.modelNamePosition === 'inlineControlsLeft'"
    ></ModelName>

    <AmpControlGroup
      v-for="group in values.groups"
      :hidden="false"
      :numControls="group.controls.length"
      :values="values"
      :key="group.label"
      :label="group.label"
    >
      <AmpKnob
        v-for="c in group.controls"
        :key="c.label"
        :label="c.label"
        :values="values"
      ></AmpKnob>
    </AmpControlGroup>

    <ModelName
      :position="values.modelNamePosition"
      :hasbackground="false"
      :values="values"
      v-if="values.modelNamePosition === 'inlineControlsRight'"
    ></ModelName>

    <AmpControlGroup :numControls="1" :hidden="true" :values="values" label=" ">
      <PowerSwitch
        v-for="s in values.powerSwitches"
        :s="s"
        :values="values"
        :key="s.label"
      >
      </PowerSwitch>
    </AmpControlGroup>
  </div>
</template>

<script>
import AmpControlGroup from "./AmpControlGroup.vue";
import AmpKnob from "./AmpKnob.vue";
import InputJack from "./InputJack.vue";
import PowerSwitch from "./PowerSwitch.vue";
import ModelName from "./ModelName.vue";

export default {
  components: { AmpControlGroup, AmpKnob, InputJack, PowerSwitch, ModelName },
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
