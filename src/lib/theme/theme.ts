import { primitives } from "./primitives";
import { semanticLight, semanticDark } from "./semantic";
import { createBadgeTokens } from "./components/badge-tokens";
import { createButtonTokens } from "./components/button-tokens";
import { createButtonIconTokens } from "./components/button-icon-tokens";
import { createLoaderTokens } from "./components/loader-tokens";

// 🧠 1. Структура типа нашей темы
export type AppTheme = {
  primitives: typeof primitives;
  semantic: any;
  components: {
    badge: ReturnType<typeof createBadgeTokens>;
    button: ReturnType<typeof createButtonTokens>;
    buttonIcon: ReturnType<typeof createButtonIconTokens>;
    loader: any;
  };
  transitionFast: (properties: string[]) => string;
};

// 🟦 2. Базовая функция плавности (Исправлен путь: убран несуществующий узел .motion)
const createTransitionFast = (semanticSrc: any) => {
  return (properties: string[]): string => {
    const duration = semanticSrc.duration.fast;
    const easing = semanticSrc.easing.interactive;
    return properties.map((prop) => `${prop} ${duration} ${easing}`).join(", ");
  };
};

// 🏭 3. ФАБРИКА СВЕТЛОЙ ТЕМЫ
const makeLightTheme = (): AppTheme => {
  return {
    primitives,
    semantic: semanticLight,
    components: {
      badge: createBadgeTokens(semanticLight as any),
      button: createButtonTokens(semanticLight as any),
      buttonIcon: createButtonIconTokens(semanticLight as any),
      loader: createLoaderTokens(semanticLight as any),
    },
    transitionFast: createTransitionFast(semanticLight),
  };
};

// 🏭 4. ФАБРИКА ТЕМНОЙ ТЕМЫ
const makeDarkTheme = (): AppTheme => {
  return {
    primitives,
    semantic: semanticDark,
    components: {
      badge: createBadgeTokens(semanticDark as any),
      button: createButtonTokens(semanticDark as any),
      buttonIcon: createButtonIconTokens(semanticDark as any),
      loader: createLoaderTokens(semanticDark as any),
    },
    transitionFast: createTransitionFast(semanticDark),
  };
};

// 🧼 Экспортируем чистые готовые объекты тем
export const lightTheme: AppTheme = makeLightTheme();
export const darkTheme: AppTheme = makeDarkTheme();
