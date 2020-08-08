<template>
  <div class="RandomGuitarAmpWithCopy">
    <GuitarAmp
      name="Test Amp"
      brand="Steve’s Amps"
      :seed="seed"
      :values="ampValues"
    ></GuitarAmp>
  </div>
</template>

<script lang="ts">
import { Prop, Component, Vue } from "vue-property-decorator";
import { RNG } from "@/RNG";
import GuitarAmp from "@/components/guitaramp/GuitarAmp.vue";
import GuitarAmpValues from "./guitaramp/GuitarAmpValues";

@Component({ components: { GuitarAmp } })
export default class RandomGuitarPedalWithCopy extends Vue {
  @Prop() private seed!: string;

  mounted() {
    console.log(this.seed);
  }

  ampValues(): GuitarAmpValues {
    const rng = new RNG(this.seed);
    return {
      bgChoice: rng.getRandom(),
      bg2Choice: rng.getRandom(),
      fontChoice: rng.getRandom(),
      knobChoice: rng.getRandom()
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
