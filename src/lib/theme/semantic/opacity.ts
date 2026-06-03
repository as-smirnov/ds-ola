import { percents } from "../primitives/percents";

export const opacityLight = {
  opacity: {
    hidden: percents[0],
    visible: percents[100],
  },
} as const;

export const opacityDark = {
  ...opacityLight,
} as const;
