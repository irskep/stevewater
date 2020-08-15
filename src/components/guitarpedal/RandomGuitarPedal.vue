<template>
  <GuitarPedal
    v-bind:seed="seed"
    v-bind:aleaSavedState="aleaSavedState"
    v-bind:name="pedal.name"
    v-bind:brand="pedal.brand"
    v-bind:purpose="pedal.purpose"
    v-bind:color="pedal.color"
  ></GuitarPedal>
</template>

<script>
import Alea from "alea";
import GuitarPedal from "./GuitarPedal.vue";

import makeImprovGenerators from "@/improvgrammar/makeImprovGenerators";

export default {
  components: {
    GuitarPedal
  },

  props: ["seed", "bindings", "tags"],

  computed: {
    alea: function() {
      return new Alea(this.$props.seed);
    },
    context: function() {
      const alea = new Alea(this.$props.seed);
      const { descGen, subGen } = makeImprovGenerators(alea);
      const model = {
        bindings: this.$props.bindings || [],
        tags: this.$props.tags || []
      };
      const name = descGen.gen("name", model);
      const subtitle = subGen.gen("subtitle", model);
      const desc = descGen.gen("desc", model);
      const brand = descGen.gen("brand", model);
      const aleaSavedState = alea.exportState();
      console.log(model);
      const pedal = {
        name,
        subtitle,
        brand,
        purpose: subGen.gen("purpose", model),
        color: descGen.gen("color", model).toLowerCase(),
        texts: desc.split("\n\n").filter(s => s),
        price: descGen.gen("price", model)
      };
      return { aleaSavedState, pedal };
    },
    pedal: function() {
      return this.context.pedal;
    },
    aleaSavedState: function() {
      return this.context.aleaSavedState;
    }
  }
};
</script>
