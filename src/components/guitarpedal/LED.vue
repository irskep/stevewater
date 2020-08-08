<template>
  <div class="LED" v-bind:class="cssClass"></div>
</template>

<style>
@media print {
  .LEDRed,
  .LEDGreen,
  .LEDYellow,
  .LEDBlue {
    /* box-shadow: none !important */
    -webkit-print-color-adjust: exact;
    -webkit-filter: opacity(1);
  }
}

.LED {
  --ledSize: 0.6em;
}

.LEDRed {
  width: var(--ledSize);
  height: var(--ledSize);
  background-color: #f00;
  border-radius: 50%;
  box-shadow: rgba(0, 0, 0, 0.2) 0 -1px 7px 1px, inset #441313 0 -1px 9px,
    rgba(255, 0, 0, 0.5) 0 2px 12px;
}

.LEDYellow {
  width: var(--ledSize);
  height: var(--ledSize);
  background-color: #ff0;
  border-radius: 50%;
  box-shadow: rgba(0, 0, 0, 0.2) 0 -1px 7px 1px, inset #808002 0 -1px 9px,
    #ff0 0 2px 12px;
}

.LEDGreen {
  width: var(--ledSize);
  height: var(--ledSize);
  background-color: #abff00;
  border-radius: 50%;
  box-shadow: rgba(0, 0, 0, 0.2) 0 -1px 7px 1px, inset #304701 0 -1px 9px,
    #89ff00 0 2px 12px;
}

.LEDBlue {
  width: var(--ledSize);
  height: var(--ledSize);
  background-color: #24e0ff;
  border-radius: 50%;
  box-shadow: rgba(0, 0, 0, 0.2) 0 -1px 7px 1px, inset #006 0 -1px 9px,
    #3f8cff 0 2px 14px;
}
</style>

<script>
import { choiceItem } from "@/util.js";

export default {
  props: ["randomNumber"],

  computed: {
    cssClass: function() {
      return choiceItem(this.$props.randomNumber, [
        "LEDRed",
        "LEDGreen",
        "LEDYellow",
        "LEDBlue",
      ]);
    },
  },

  setup() {
    return {};
  },
};
</script>
