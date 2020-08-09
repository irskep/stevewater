<template>
  <div class="GuitarAmp" v-bind:id="ampID">
    <div v-html="rawStyle"></div>
    <AmpBody v-if="values.structure === 'separate'">
      <AmpControls :values="values"> </AmpControls>
      <ModelName
        v-if="values.modelNamePosition.slice(0, 6) !== 'inline'"
        :hasbackground="false"
        :values="values"
        :position="values.modelNamePosition"
      ></ModelName>
    </AmpBody>

    <AmpBody>
      <AmpControls :values="values" v-if="values.structure === 'combo'">
      </AmpControls>

      <div class="ControlCabSpacer" v-if="values.structure === 'combo'"></div>

      <div
        v-if="
          values.modelNamePosition === 'underControls' &&
            values.structure === 'combo'
        "
        class="ModelNameContainer"
      >
        <ModelName
          :hasbackground="false"
          :values="values"
          :position="values.modelNamePosition"
        ></ModelName>
      </div>

      <CabGrill :values="values">
        <ModelName
          v-if="
            values.structure === 'combo' &&
              values.modelNamePosition.slice(0, 3) === 'cab'
          "
          :position="
            values.structure === 'separate'
              ? values.modelNamePosition2
              : values.modelNamePosition
          "
          :values="values"
        ></ModelName>
      </CabGrill>
    </AmpBody>
    <AmpFeet></AmpFeet>
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
import {
  fontSizes,
  fontFamilies,
  ampPanelColors,
  ampPanelTextColors,
  ampKnobColors,
  ampKnobColorsTick,
  ampBodyColors,
  ampTextOnBodyColors
} from "@/const";
import AmpBody from "./AmpBody.vue";
import AmpFeet from "./AmpFeet.vue";
import AmpControls from "./AmpControls.vue";
import CabGrill from "./CabGrill.vue";
import ModelName from "./ModelName.vue";

export default {
  components: {
    AmpBody,
    AmpFeet,
    AmpControls,
    CabGrill,
    ModelName
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
      const font = choiceItem(this.values.fontChoice, fontFamilies);
      const fontSize = choiceItem(this.values.fontChoice, fontSizes);

      const knobColor = choiceItem(this.values.knobChoice, ampKnobColors);
      const knobColor2 = choiceItem(this.values.knobChoice, ampKnobColorsTick);

      const bg2 = choiceItem(this.values.bg2Choice, ampPanelColors);
      const textOnBg2 = choiceItem(this.values.bg2Choice, ampPanelTextColors);
      return `
        <style>
          .GuitarAmp#${this.ampID} {
            --bg: ${choiceItem(this.values.bgChoice, ampBodyColors)};
            --textOnBg: ${choiceItem(
              this.values.bgChoice,
              ampTextOnBodyColors
            )};
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

<style lang="scss">
.ControlCabSpacer {
  height: 0.5em;
}

.ModelNameContainer {
  padding-bottom: 0.5em;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
