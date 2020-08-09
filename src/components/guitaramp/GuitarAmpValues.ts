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

export type ModelNamePosition =
  | "cabCenter"
  | "cabTopLeft"
  | "cabTopRight"
  | "cabTopCenter"
  | "underControls"
  | "inlineControlsLeft"
  | "inlineControlsRight";

export interface GuitarAmpValues {
  structure: "combo" | "separate";
  bgChoice: number;
  bg2Choice: number;
  fontChoice: number;
  knobChoice: number;
  grillStyle: "grid" | "crosshatch" | "crosshatch2" | "grid2";
  knobLabelPosition: "top" | "bottom";
  groupLabelPosition: "top" | "bottom";
  groups: ControlGroup[];
  groupStyle: "brackets" | "lines";
  height: string;
  powerSwitches: AmpPowerSwitch[];
  powerSwitchStyle: "flat" | "round";
  brandName: string;
  modelName: string;
  modelNamePosition: ModelNamePosition;
  modelNamePosition2: ModelNamePosition;
}
