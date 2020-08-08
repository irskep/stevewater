<template>
  <div class="RandomGuitarPedalWithCopy">
    <RandomGuitarPedal :seed="Date.now()"></RandomGuitarPedal>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import RandomGuitarPedal from "@/components/guitarpedal/RandomGuitarPedal.vue";

@Component({ components: { RandomGuitarPedal } })
export default class RandomGuitarPedalWithCopy extends Vue {
  // @Prop() private msg!: string;
}
</script>

<style lang="scss">
.RandomGuitarPedalWithCopy {
  display: flex;
  justify-content: flex-start;
}
</style>
