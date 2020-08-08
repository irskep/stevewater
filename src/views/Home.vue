<template>
  <div class="home">
    <RandomGuitarPedalWithCopy />
  </div>
</template>

<script>
// @ is an alias to /src
import RandomGuitarPedalWithCopy from "@/components/RandomGuitarPedalWithCopy.vue";

export default {
  name: "Home",
  components: {
    RandomGuitarPedalWithCopy
  }
};
</script>
