<template>
  <div class="KnobContainer">
    <div v-if="label !== '&nbsp;'" class="KnobLabel">{{ label }}</div>
    <div v-if="label === '&nbsp;'" class="KnobLabel" style="visibility: hidden">
      _
    </div>
    <div class="Knob">
      <div class="Knob__Inner"></div>
    </div>
  </div>
</template>

<style>
@media print {
  .Knob {
    /* box-shadow: none !important; */
    -webkit-print-color-adjust: exact;
    -webkit-filter: opacity(1);
  }
}

.KnobContainer {
  display: flex;
  align-items: center;
  flex-direction: column;
  --knobSize: 1.8em;
}

.KnobLabel {
  font-size: 0.5em;
}

.Knob {
  position: relative;

  width: var(--knobSize);
  height: calc(var(--knobSize) * 1.11);
  margin: 0 0.3em;

  background-color: black;
  border-radius: 1em;
  box-shadow: 0px 0px 4px 1px rgba(0, 0, 0, 0.66);
}

.Knob::before {
  content: " ";
  position: absolute;

  width: var(--knobSize);
  height: var(--knobSize);
  border-radius: 1em;
  background-color: var(--knob);
  z-index: 1;
}

.Knob::after {
  content: " ";
  position: absolute;
  display: block;
  left: calc(50% - 0.5px);
  top: 0;
  width: 2px;
  height: calc(var(--knobSize) / 3.6);
  background-color: var(--knobTick);
  z-index: 3;
}

.Knob__Inner {
  position: absolute;
  width: 1.6em;
  height: 1.6em;
  left: 0.1em;
  top: 0.1em;
  background-color: var(--knob2);
  border-radius: 100%;
  z-index: 2;
}
</style>

<script>
export default {
  props: ["label"],

  setup() {
    return {};
  }
};
</script>
