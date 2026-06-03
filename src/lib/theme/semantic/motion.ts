import { motion } from "../primitives/motion";

export const motionLight = {
  duration: {
    fast: motion.duration[100],
    medium: motion.duration[250],
  },
  easing: {
    interactive: motion.easing.easeInOut,
  },
} as const;

export const motionDark = {
  ...motionLight,
} as const;
