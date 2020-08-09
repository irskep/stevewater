<template>
  <div class="AmpFeet">
    <div class="AmpFeet_Left"></div>
    <div class="AmpFeet_Right"></div>
  </div>
</template>

<script>
export default {
  components: {},
  props: ["values"]
};
</script>

<style lang="scss">
.AmpFeet {
  padding: 0 10%;
  display: flex;
  justify-content: space-between;
  z-index: -1;

  .AmpFeet_Left,
  .AmpFeet_Right {
    background-color: #111;
    width: 1em;
    height: 0.3em;
    transform: perspective(10px) rotateX(-10deg);
  }
}
</style>
