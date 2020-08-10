<template>
  <div class="bio">
    <RandomBio :seed="seed" />
  </div>
</template>

<script>
import RandomBio from "@/components/RandomBio.vue";

export default {
  name: "Bio",
  components: {
    RandomBio
  },
  props: ["seed"]
};
</script>
