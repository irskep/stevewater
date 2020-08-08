<template>
  <div class="GuitarAmp" v-bind:id="ampID">
    <div v-html="rawStyle"></div>
  </div>
</template>

<script>
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
  colorKeys
} from "@/const";

export default {
  components: {},

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
      const fontChoiceNumber = this.values.fontChoice;
      const knobChoiceNumber = this.values.knobChoice;
      const bg2ChoiceNumber = this.values.bg2Choice;
      return `
        <style>
          .GuitarAmp#${this.ampID} {
            --bg: ${colorMap[color]};
            --textOnBg: ${textColorMap[color]};
            --knob: ${choiceItem(knobChoiceNumber, knobColors)};
            --knob2: ${choiceItem(knobChoiceNumber, knobColors2)};
            --knobTick: ${choiceItem(knobChoiceNumber, knobColorsTick)};
            --bg2: ${choiceItem(bg2ChoiceNumber, bg2Colors)};
            --textOnBg2: ${choiceItem(bg2ChoiceNumber, bg2TextColors)};

            --name-font: ${choiceItem(fontChoiceNumber, fontFamilies)};
            --name-font-size: ${choiceItem(fontChoiceNumber, fontSizes)};
          }
        </style>
      `;
    }
  }
};
</script>

<style lang="scss"></style>
