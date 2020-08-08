<template>
  <div class="RandomGuitarPedalWithCopy">
    <RandomGuitarPedal :seed="seed"></RandomGuitarPedal>
  </div>
</template>

<script lang="ts">
import { Prop, Component, Vue } from "vue-property-decorator";
import RandomGuitarPedal from "@/components/guitarpedal/RandomGuitarPedal.vue";

@Component({ components: { RandomGuitarPedal } })
export default class RandomGuitarPedalWithCopy extends Vue {
  @Prop() private seed!: string;

  mounted() {
    console.log(this.seed);
  }
}
</script>

<style lang="scss">
.RandomGuitarPedalWithCopy {
  display: flex;
  justify-content: flex-start;
}
</style>
