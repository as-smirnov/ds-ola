import { pixels } from "../primitives/pixels";

export const strokesLight = {
  strokes: {
    0: pixels[0],
    12: pixels[12],
    25: pixels[25],
  },
} as const;

export const strokesDark = {
  ...strokesLight,
} as const;
