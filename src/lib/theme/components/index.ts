import { createButtonTokens } from "./button-tokens";
import { createLoaderTokens } from "./loader-tokens";

// Главный сборщик компонентных токенов
export const createComponentTokens = (semantic: any) => {
  return {
    button: createButtonTokens(semantic),
    loader: createLoaderTokens(semantic),
  } as const;
};
