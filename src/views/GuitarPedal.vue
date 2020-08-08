<template>
  <div class="guitarpedal">
    <RandomGuitarPedalWithCopy :seed="seed" />
  </div>
</template>

<script>
import RandomGuitarPedalWithCopy from "@/components/RandomGuitarPedalWithCopy.vue";

export default {
  name: "GuitarPedal",
  components: {
    RandomGuitarPedalWithCopy
  },
  props: ["seed"]
};
</script>
