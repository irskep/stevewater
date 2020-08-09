export const colorMap = {
  red: "#e84118",
  orange: "#EE5A24",
  yellow: "#fbc531",
  green: "#44bd32",
  blue: "#273c75",
  purple: "#8c7ae6",
  pink: "#FDA7DF",
  black: "#111",
  white: "#f5f6fa"
};

export const textColorMap = {
  red: "#ffffff",
  orange: "#ffffff",
  yellow: "#000000",
  green: "#ffffff",
  blue: "#ffffff",
  purple: "#ffffff",
  pink: "#000000",
  black: "#ffffff",
  white: "#000000"
};

export const colorKeys: string[] = Object.keys(colorMap).sort();

export const ampBodyColors = [
  "#111",
  "#222",
  "#EE5A24",
  "#273c75",
  "#8c7ae6",
  "#aaa"
];
export const ampTextOnBodyColors = [
  "#fff",
  "#fff",
  "#000",
  "#fff",
  "#000",
  "#000"
];
export const ampPanelColors = ["#a59189", "#dcc39e", "#58341a", "#222"];
export const ampPanelTextColors = ["#fff", "#000", "#fff", "#fff"];
export const ampKnobColors = ["#111", "#d1d8e0"];
export const ampKnobColorsTick = ["#fff", "#111"];

export const knobColors = [
  "#e84118",
  "#ff5A24",
  "#fbc531",
  "#44bd32",
  "#273c75",
  "#8c7ae6",
  "#FDA7DF",
  "#111",
  "#ffffff"
];

export const knobColors2 = [
  "#ff6138",
  "#dE4A24",
  "#ffe551",
  "#64cd52",
  "#475c95",
  "#ac9aff",
  "#Ffc7fF",
  "#222",
  "#f5f6fa"
];

export const knobColorsTick = [
  "#d1d8e0",
  "#d1d8e0",
  "#333",
  "#d1d8e0",
  "#d1d8e0",
  "#d1d8e0",
  "#333",
  "#d1d8e0",
  "#333"
];

export const fontFamilies = [
  'Frutiger, "Frutiger Linotype", Univers, Calibri, "Gill Sans", "Gill Sans MT", "Myriad Pro", Myriad, "DejaVu Sans Condensed", "Liberation Sans", "Nimbus Sans L", Tahoma, Geneva, "Helvetica Neue", Helvetica, Arial, sans-serif',
  'Corbel, "Lucida Grande", "Lucida Sans Unicode", "Lucida Sans", "DejaVu Sans", "Bitstream Vera Sans", "Liberation Sans", Verdana, "Verdana Ref", sans-serif',
  '"Segoe UI", Candara, "Bitstream Vera Sans", "DejaVu Sans", "Bitstream Vera Sans", "Trebuchet MS", Verdana, "Verdana Ref", sans-serif',
  'Impact, Haettenschweiler, "Franklin Gothic Bold", Charcoal, "Helvetica Inserat", "Bitstream Vera Sans Bold", "Arial Black", sans-serif',
  'Consolas, "Andale Mono WT", "Andale Mono", "Menlo", "SF Mono", "Lucida Console", "Lucida Sans Typewriter", "DejaVu Sans Mono", "Bitstream Vera Sans Mono", "Liberation Mono", "Nimbus Mono L", Monaco, "Courier New", Courier, monospace',
  '"Cooper Hewitt", sans-serif',
  '"Cooper Hewitt Medium", sans-serif'
];

export const fontSizes = [
  "0.9em",
  "0.9em",
  "0.9em",
  "1.2em",
  "0.9em",
  "0.9em",
  "0.9em"
];

export const flexJustifyContent = ["center", "space-between"];

export const flexDirectionRow = ["row", "row-reverse"];

export const knobConfigs = [
  "StraightRow",
  "Pair",
  "TriangleUp",
  "TriangleDown",
  "NByTwo"
];

export const footConfigs = ["Pusher", "Pusher", "OneSwitch", "MultiSwitch"];

export const footSwitchStyles = ["hex", "circle"];

export const bg2Colors = [
  // '#353b48',
  "rgba(0, 0, 0, 0.8)",
  "rgba(255, 255, 255, 0.8)",
  // '#dadadf',
  "rgba(0, 0, 0, 0.0)"
];

export const bg2TextColors = ["#fff", "#000", "var(--textOnBg)"];

export const ampInputWords = ["INSTRUMENT", "NORMAL", "VIBRATO"];

export const ampKnobGroupWords = [
  "LEAD CHANNEL",
  "RHYTHM CHANNEL",
  "TREMOLO",
  "EQ",
  "POWER",
  "AMP",
  "FX",
  "TONE",
  "CLASSIC GAIN",
  "ULTRA GAIN",

  "MUD",
  "SLUDGE",
  "BITE",
  "GRIT",
  "DISTORTION",

  "SWEETNESS",
  "HARSHNESS",
  "MELLOWNESS",
  "WARMTH",
  "COLDNESS",
  "NOTE DEFINITION",
  "CONTROL",
  "SMOOTHNESS",
  "GRIT",
  "EDGE",
  "CRUNCHY BREAKUP",
  "SEARING SOLO POWER",
  "SWEETENING",
  "INDEFINABLE MOJO",
  "DIRT",
  "SPACE",
  "PUNCH",
  "THICKNESS",
  "MUSICALITY",
  "HARMONICS",
  "BALANCE",
  "BRILLIANCE",
  "DARKNESS",
  "DEEPNESS",
  "DETAIL",
  "DISTANCE",
  "DRYNESS",
  "DYNAMICS",
  "EVENNESS",
  "FATNESS",
  "GENTLENESS",
  "PURITY",
  "RESONANCE",
  "RICHNESS",
  "SATURATION",
  "WETNESS",
  "PURR",
  "ROAR"
];

export const ampKnobWords = [
  "VOLUME",
  "TONE",
  "MID_BITE",
  "TREBLE",
  "BASS",
  "MID",
  "MIDDLE",
  "REVERB",
  "SPEED",
  "INTENSITY",
  "DEPTH",
  "VOICING",
  "DWELL",
  "GAIN",
  "GAIN 2",
  "PRESENCE",
  "MASTER",
  "SOLO",
  "POWER",
  "TONE SHAPE",
  "VOL",
  "VERB",
  "LIMITER",
  "RATE",
  "HI CUT",
  "LO CUT",
  "EQ",
  "EQ 2",
  "DISTORTION",
  "VIB/CHORUS",

  "MUD",
  "SLUDGE",
  "MOJO",

  "SWEET",
  "HARSH",
  "MELLOW",
  "WARM",
  "COLD",
  "DEFN",
  "CTRL",
  "SMOOTH",
  "GRIT",
  "EDGE",
  "CRUNCH",
  "SEAR",
  "SUBTLE",
  "DIRT",
  "SPACE",
  "PUNCH",
  "THICK",
  "MUSIC",
  "HARMONICS",
  "BAL",
  "DARK",
  "DEEP",
  "DETAIL",
  "DIST",
  "DRY",
  "DYN",
  "EVEN",
  "FAT",
  "GENTLE",
  "PURE",
  "RICH",
  "SAT",
  "WET",
  "PURR",
  "ROAR"
];

export const ampSwitchWords: [string, string][] = [
  ["LEAD", "RHYTHM"],
  ["HOT", "COLD"],
  ["HARD", "SOFT"]
];

export const ampPowerWords = ["OUTPUT", "POWER", "STANDBY"];

export const ampPowerColorCombos: string[][] = [
  ["black"],
  ["red"],
  ["black", "black"],
  ["red", "red"]
];

export const ampBrandNames = [
  "Plateau",
  "Herschel",
  "Tender",
  "Box",
  "Blue",
  "Blackhole",
  "BOBB",
  "Rollout",
  "Knitter",
  "Supertone",
  "Dr. X",
  "Wagner",
  "harmo-electrix"
];
