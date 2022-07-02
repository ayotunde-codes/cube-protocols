import { Dumbbell, Hash } from "components/icons";
import { ReactNode } from "react";
interface SvgObject {
  svg: ReactNode;
  name: string;
}

export const EffectArray: SvgObject[] = [
  { svg: <Dumbbell />, name: "Dumbbell" },
  { svg: <Hash />, name: "Hash" },
];
