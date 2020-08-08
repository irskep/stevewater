<template>
  <div class="amp">
    <RandomGuitarAmpWithCopy :seed="seed" />
  </div>
</template>

<script>
import RandomGuitarAmpWithCopy from "@/components/RandomGuitarAmpWithCopy.vue";

export default {
  name: "Amp",
  components: {
    RandomGuitarAmpWithCopy
  },
  props: ["seed"]
};
</script>
