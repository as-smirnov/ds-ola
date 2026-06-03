import { primitives } from "./primitives";
import { semanticLight, semanticDark } from "./semantic";
import { createButtonTokens } from "./components/button-tokens";
import { createLoaderTokens } from "./components/loader-tokens";

export type AppTheme = {
  primitives: typeof primitives;
  semantic: any;
  components: {
    button: any;
    loader: any;
  };
  transitionFast: (properties: string[]) => string;
};

export const lightTheme: AppTheme = {
  primitives,
  semantic: semanticLight,
  get components() {
    return {
      button: createButtonTokens(semanticLight as any), // 👈 Добавили as any сюда
      loader: createLoaderTokens(semanticLight as any),
    };
  },
  transitionFast: (properties: string[]): string => {
    const duration = semanticLight.duration.fast;
    const easing = semanticLight.easing.interactive;
    return properties.map((prop) => `${prop} ${duration} ${easing}`).join(", ");
  },
};

export const darkTheme: AppTheme = {
  primitives,
  semantic: semanticDark,
  get components() {
    return {
      button: createButtonTokens(semanticDark as any), // 👈 И as any сюда
      loader: createLoaderTokens(semanticDark as any),
    };
  },
  transitionFast: (properties: string[]): string => {
    const duration = semanticDark.duration.fast;
    const easing = semanticDark.easing.interactive;
    return properties.map((prop) => `${prop} ${duration} ${easing}`).join(", ");
  },
};
