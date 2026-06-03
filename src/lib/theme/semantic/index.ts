import { colorsLight, colorsDark } from "./colors";
import { motionLight, motionDark } from "./motion";
import { opacityLight, opacityDark } from "./opacity";
import { radiusLight, radiusDark } from "./radius";
import { sizesLight, sizesDark } from "./sizes";
import { spacesLight, spacesDark } from "./spaces";
import { strokesLight, strokesDark } from "./strokes";
import { typographyLight, typographyDark } from "./typography";

export const semanticLight = {
  ...colorsLight,
  ...motionLight,
  ...opacityLight,
  ...radiusLight,
  ...sizesLight,
  ...spacesLight,
  ...strokesLight,
  ...typographyLight,
} as const;

export const semanticDark = {
  ...colorsDark,
  ...motionDark,
  ...opacityDark,
  ...radiusDark,
  ...sizesDark,
  ...spacesDark,
  ...strokesDark,
  ...typographyDark,
} as const;
