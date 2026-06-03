import { pixels } from "../primitives/pixels";

export const sizesLight = {
  sizes: {
    0: pixels[0],
    50: pixels[100],
    100: pixels[100],
    125: pixels[125],
    150: pixels[150],
    200: pixels[200],
    250: pixels[250],
    300: pixels[300],
    400: pixels[400],
    500: pixels[500],
  },
} as const;

export const sizesDark = {
  ...sizesLight,
} as const;
