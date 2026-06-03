import { pixels } from "./pixels";

export const typography = {
  fontFamily: {
    base: "'Inter Variable', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
  },
  fontWeight: {
    default: "400",
    medium: "450",
    strong: "550",
  },
  fontSize: {
    100: pixels[100],
    137: pixels[137],
    150: pixels[150],
    162: pixels[162],
    175: pixels[175],
    187: pixels[187],
    200: pixels[200],
    250: pixels[250],
    300: pixels[300],
    400: pixels[400],
    500: pixels[500],
  },
  lineHeight: {
    150: pixels[150],
    200: pixels[200],
    225: pixels[225],
    250: pixels[250],
    300: pixels[300],
    400: pixels[400],
  },
} as const;
