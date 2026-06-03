import { pixels } from "../primitives/pixels";

export const radiusLight = {
  radius: {
    0: pixels[0],
    50: pixels[50],
    62: pixels[62],
    75: pixels[75],
    100: pixels[100],
    150: pixels[150],
    200: pixels[200],
    300: pixels[300],
    400: pixels[400],
    round: pixels[12000],
  },
} as const;

export const radiusDark = {
  ...radiusLight,
} as const;
