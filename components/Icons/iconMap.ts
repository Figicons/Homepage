import phosphorFill from "./fixtures/Phosphor-Fill.json";
import phosphorDuotone from "./fixtures/Phosphor-Duotone.json";
import phosphorBold from "./fixtures/Phosphor-Bold.json";
import phosphorRegular from "./fixtures/Phosphor-Regular.json";
import phosphorLight from "./fixtures/Phosphor-Light.json";
import phosphorThin from "./fixtures/Phosphor-Thin.json";
import figicons from "./fixtures/Figicons.json";

const iconMap = {
  figicons: figicons,
  "phosphor-fill": phosphorFill,
  "phosphor-duotone": phosphorDuotone,
  "phosphor-bold": phosphorBold,
  "phosphor-regular": phosphorRegular,
  "phosphor-light": phosphorLight,
  "phosphor-thin": phosphorThin,
};

const iconMapDict: Record<IconSet, string> = {
  figicons: "Figicons",
  "phosphor-fill": "Phosphor: Fill",
  "phosphor-duotone": "Phosphor: Duotone",
  "phosphor-bold": "Phosphor: Bold",
  "phosphor-regular": "Phosphor: Regular",
  "phosphor-light": "Phosphor: Light",
  "phosphor-thin": "Phosphor: Thin",
};

export type IconSet = keyof typeof iconMap;
export default iconMap;
export { iconMapDict };
