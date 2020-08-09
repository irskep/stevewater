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
import { GuitarAmpValues, ControlGroup } from "./guitaramp/GuitarAmpValues";
import {
  ampKnobWords,
  ampKnobGroupWords,
  ampPowerColorCombos,
  ampPowerWords
} from "@/const";

@Component({ components: { GuitarAmp } })
export default class RandomGuitarPedalWithCopy extends Vue {
  @Prop() private seed!: string;

  mounted() {
    console.log(this.seed);
  }

  ampValues(): GuitarAmpValues {
    const rng = new RNG(this.seed);

    const knobLabels = rng.shuffled(ampKnobWords);
    const groupLabels = rng.shuffled(ampKnobGroupWords);

    const numGroups = rng.choice([2, 2, 2, 2, 3, 3, 3, 4, 5, 6]);
    const groups: ControlGroup[] = [];
    for (let i = 0; i < numGroups; i++) {
      const numControls = rng.choice([2, 2, 2, 2, 3, 3, 3, 4, 4, 5, 6]);
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

    return {
      bgChoice: rng.getRandom(),
      bg2Choice: rng.getRandom(),
      fontChoice: rng.getRandom(),
      knobChoice: rng.getRandom(),
      grillStyle: rng.choice(["grid", "crosshatch"]),
      knobLabelPosition: rng.choice(["top", "bottom"]),
      groupLabelPosition: rng.choice(["top", "bottom"]),
      groups: groups,
      height: rng.choice(["10em", "10em", "15em", "20em", "30em"]),
      powerSwitches: rng.choice(ampPowerColorCombos).map((style, i) => ({
        label: powerSwitchWords[i],
        style: style
      })),
      powerSwitchStyle: rng.choice(["flat", "round"])
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
