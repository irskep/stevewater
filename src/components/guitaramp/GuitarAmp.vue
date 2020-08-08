<template>
  <div class="GuitarAmp" v-bind:id="ampID">
    <div v-html="rawStyle"></div>
    <AmpBody>
      <AmpControls :values="values">
        <AmpControlGroup :hidden="true" :values="values" label=" ">
          <InputJack
            :values="values"
            appearance="hex"
            label="INPUT"
          ></InputJack>
        </AmpControlGroup>
        <AmpControlGroup
          v-for="group in values.groups"
          :hidden="false"
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
      </AmpControls>
      <CabGrill :values="values"></CabGrill>
    </AmpBody>
  </div>
</template>

<script>
/*
Possible layouts:
- Full row of controls over cab
- Partial row of controls over cab

Logo positions:
- Between controls and cab
- On cab (corner, center)

*/

import { choiceItem } from "@/util";
import makeImprovGenerators from "@/improvgrammar/makeImprovGenerators";
import {
  colorMap,
  textColorMap,
  bg2Colors,
  bg2TextColors,
  fontSizes,
  knobColors,
  knobColors2,
  knobColorsTick,
  fontFamilies,
  colorKeys,
  ampPanelColors,
  ampPanelTextColors,
  ampKnobColors,
  ampKnobColorsTick
} from "@/const";
import AmpBody from "./AmpBody.vue";
import AmpControls from "./AmpControls.vue";
import AmpControlGroup from "./AmpControlGroup.vue";
import CabGrill from "./CabGrill.vue";
import AmpKnob from "./AmpKnob.vue";
import InputJack from "./InputJack.vue";

export default {
  components: {
    AmpBody,
    AmpControls,
    CabGrill,
    AmpKnob,
    AmpControlGroup,
    InputJack
  },

  props: [
    "name",
    "brand",
    "seed", // really just a unique ID
    "values"
  ],

  computed: {
    ampID: function() {
      return "i" + this.$props.seed;
    },

    rawStyle: function() {
      const color = choiceItem(this.values.bgChoice, colorKeys);

      const font = choiceItem(this.values.fontChoice, fontFamilies);
      const fontSize = choiceItem(this.values.fontChoice, fontSizes);

      const knobColor = choiceItem(this.values.knobChoice, ampKnobColors);
      const knobColor2 = choiceItem(this.values.knobChoice, ampKnobColorsTick);

      const bg2 = choiceItem(this.values.bg2Choice, ampPanelColors);
      const textOnBg2 = choiceItem(this.values.bg2Choice, ampPanelTextColors);
      return `
        <style>
          .GuitarAmp#${this.ampID} {
            --bg: ${colorMap[color]};
            --textOnBg: ${textColorMap[color]};
            --knob: ${knobColor};
            --knobTick: ${knobColor2};
            --bg2: ${bg2};
            --textOnBg2: ${textOnBg2};

            --name-font: ${font};
            --name-font-size: ${fontSize};
          }
        </style>
      `;
    }
  }
};
</script>

<style lang="scss"></style>
