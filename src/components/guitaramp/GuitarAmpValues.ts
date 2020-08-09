export interface Control {
  kind: "knob" | "switch1" | "switch2";
  label: string;
}

export interface ControlGroup {
  label: string;
  controls: Control[];
}

export interface AmpPowerSwitch {
  label: string;
  style: string;
}

export interface GuitarAmpValues {
  bgChoice: number;
  bg2Choice: number;
  fontChoice: number;
  knobChoice: number;
  grillStyle: "grid" | "crosshatch"; // | "crosshatch2" | "grid2";
  knobLabelPosition: "top" | "bottom";
  groupLabelPosition: "top" | "bottom";
  groups: ControlGroup[];
  height: string;
  powerSwitches: AmpPowerSwitch[];
  powerSwitchStyle: "flat" | "round";
}
