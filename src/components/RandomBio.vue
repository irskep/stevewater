<template>
  <div class="RandomBio">
    <vue-markdown :source="bio()"></vue-markdown>
  </div>
</template>

<script lang="ts">
import { Prop, Component, Vue } from "vue-property-decorator";
import { RNG } from "@/RNG";
import makeImprovGenerators from "@/improvgrammar/makeImprovGenerators";
import VueMarkdown from "vue-markdown";

@Component({ components: { VueMarkdown } })
export default class RandomGuitarPedalWithCopy extends Vue {
  @Prop() private seed!: string;

  bio() {
    const rng = new RNG(this.seed);
    const { bioGen } = makeImprovGenerators(rng.getRandom);
    return bioGen.gen("bio", {});
  }
}
</script>

<style lang="scss" scoped>
p {
  margin-bottom: 1em;
}
</style>
