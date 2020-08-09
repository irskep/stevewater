<template>
  <div class="RandomGuitarAmpWithCopy">
    <GuitarAmp
      name="Test Amp"
      brand="Steve’s Amps"
      :seed="seed"
      :values="ampValues()"
    ></GuitarAmp>
  </div>
</template>

<script lang="ts">
import { Prop, Component, Vue } from "vue-property-decorator";
import { RNG } from "@/RNG";
import GuitarAmp from "@/components/guitaramp/GuitarAmp.vue";
import {
  GuitarAmpValues,
  ControlGroup,
  ModelNamePosition
} from "./guitaramp/GuitarAmpValues";
import {
  ampKnobWords,
  ampKnobGroupWords,
  ampPowerColorCombos,
  ampPowerWords,
  ampBrandNames
} from "@/const";
import makeImprovGenerators from "@/improvgrammar/makeImprovGenerators";

@Component({ components: { GuitarAmp } })
export default class RandomGuitarPedalWithCopy extends Vue {
  @Prop() private seed!: string;

  mounted() {
    console.log(this.seed);
  }

  ampValues(): GuitarAmpValues {
    const rng = new RNG(this.seed);
    const { ampGen } = makeImprovGenerators(rng.getRandom);

    const knobLabels = rng.shuffled(ampKnobWords);
    const groupLabels = rng.shuffled(ampKnobGroupWords);

    const numGroups = rng.choice([1, 1, 2, 2, 2, 2, 3, 3, 3, 4, 5, 6]);
    const groups: ControlGroup[] = [];
    let totalControls = 0;
    for (let i = 0; i < numGroups; i++) {
      const numControls = rng.choice([
        1,
        1,
        1,
        1,
        1,
        2,
        2,
        2,
        2,
        3,
        3,
        3,
        4,
        4,
        5,
        6
      ]);
      totalControls += numControls;
      const g: ControlGroup = { label: groupLabels[i], controls: [] };
      for (let j = 0; j < numControls; j++) {
        g.controls.push({
          kind: rng.choice([
            "knob",
            "knob",
            "knob",
            "knob",
            "knob",
            "knob",
            "switch1",
            "switch2"
          ]),
          label: knobLabels.pop() || ""
        });
      }
      groups.push(g);
    }

    const powerSwitchWords = rng.shuffled(ampPowerWords);

    const structure = rng.choice(["combo", "separate"]);
    const modelNamePosition =
      structure === "combo"
        ? rng.choice([
            "cabCenter",
            "cabTopLeft",
            "cabTopRight",
            "cabTopCenter",
            "underControls",
            "inlineControlsRight",
            "inlineControlsLeft"
          ])
        : rng.choice([
            "cabTopLeft",
            "cabTopRight",
            "inlineControlsRight",
            "inlineControlsLeft"
          ]);

    return {
      structure: structure as "combo" | "separate",
      bgChoice: rng.getRandom(),
      bg2Choice: rng.getRandom(),
      fontChoice: rng.getRandom(),
      knobChoice: rng.getRandom(),
      grillStyle: rng.choice(["grid", "crosshatch", "crosshatch2", "grid2"]),
      knobLabelPosition: rng.choice(["top", "bottom"]),
      groupLabelPosition: rng.choice(["top", "bottom"]),
      groups: groups,
      groupStyle: rng.choice(["brackets", "lines"]),
      height: `${Math.max(totalControls, 5) * 2}em`,
      powerSwitches: rng.choice(ampPowerColorCombos).map((style, i) => ({
        label: powerSwitchWords[i],
        style: style
      })),
      powerSwitchStyle: rng.choice(["flat", "round"]),
      brandName: rng.choice(ampBrandNames),
      modelName: ampGen.gen("ampname", {}),
      modelNamePosition: modelNamePosition as ModelNamePosition,
      // FYI not actually used right now
      modelNamePosition2: rng.choice([
        "cabCenter",
        "cabTopLeft",
        "cabTopRight",
        "cabTopCenter"
      ])
    };
  }
}
</script>

<style lang="scss">
.RandomGuitarAmpWithCopy {
  display: flex;
  justify-content: flex-start;
}
</style>
