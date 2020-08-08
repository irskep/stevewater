export interface Control {
  kind: "knob" | "switch1" | "switch2";
  label: string;
}

export interface ControlGroup {
  label: string;
  controls: Control[];
}

export interface GuitarAmpValues {
  bgChoice: number;
  bg2Choice: number;
  fontChoice: number;
  knobChoice: number;
  grillStyle: "grid" | "crosshatch";
  knobLabelPosition: "top" | "bottom";
  groupLabelPosition: "top" | "bottom";
  groups: ControlGroup[];
  height: string;
}
