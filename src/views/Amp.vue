<template>
  <div class="home">
    <RandomGuitarPedalWithCopy :seed="seed" />
  </div>
</template>

<script>
import RandomGuitarPedalWithCopy from "@/components/RandomGuitarPedalWithCopy.vue";

export default {
  name: "Amp",
  components: {
    RandomGuitarPedalWithCopy
  },
  props: ["seed"]
};
</script>
