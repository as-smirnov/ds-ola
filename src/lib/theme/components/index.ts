import { createBadgeTokens } from "./badge-tokens";
import { createButtonTokens } from "./button-tokens";
import { createButtonIconTokens } from "./button-icon-tokens";
import { createLoaderTokens } from "./loader-tokens";

// Главный сборщик компонентных токенов
export const createComponentTokens = (semantic: any) => {
  return {
    badge: createBadgeTokens(semantic),
    button: createButtonTokens(semantic),
    buttonIcon: createButtonIconTokens(semantic),
    loader: createLoaderTokens(semantic),
  } as const;
};
