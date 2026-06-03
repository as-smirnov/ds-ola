import { pixels } from "../primitives/pixels";

export const spacesLight = {
  spaces: {
    0: pixels[0],
    12: pixels[12],
    25: pixels[25],
    37: pixels[37],
    50: pixels[50],
    62: pixels[62],
    75: pixels[75],
    87: pixels[87],
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

export const spacesDark = {
  ...spacesLight,
} as const;
