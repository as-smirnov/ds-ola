import type { Preview } from "@storybook/react";
import { ThemeProvider, createGlobalStyle } from "styled-components";
import { lightTheme, darkTheme, GlobalStyle as DesignSystemGlobalStyle } from "../src/lib";
import React from "react";

// 🎨 Чистый оверрайд-стиль: красит только области контента внутри фрейма
const StorybookBackgroundOverride = createGlobalStyle<{ isDark: boolean }>`
  .sb-show-main,
  .docs-story,
  .sb-docs-preview,
  .sb-story,
  #storybook-root:not(body #storybook-root) {
    background-color: ${props => props.isDark 
      ? darkTheme.semantic.colors.bg.layer1 
      : lightTheme.semantic.colors.bg.layer1} !important;
    transition: background-color 0.2s ease;
  }
`;


const preview: Preview = {
  initialGlobals: {
    theme: "light",
  },

  globalTypes: {
    theme: {
      description: "Глобальная тема интерфейса",
      defaultValue: "light", 
      toolbar: {
        title: "Theme",
        icon: "paintbrush", 
        items: [
          { value: "light", title: "Light Theme" },
          { value: "dark", title: "Dark Theme" },
        ],
        dynamicTitle: true, 
      },
    },
  },

  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    // Полностью отключаем дефолтные фоны, управление теперь на 100% наше
    backgrounds: {
      disable: true,
    },
  },

  decorators: [
    (Story, context) => {
      const isDark = context.globals.theme === "dark";
      const currentTheme = isDark ? darkTheme : lightTheme;

      return (
        <ThemeProvider theme={currentTheme}>
          {/* Базовый сброс стилей дизайн-системы */}
          <DesignSystemGlobalStyle />
          {/* Тотальная заливка всей площади Docs/Canvas */}
          <StorybookBackgroundOverride isDark={isDark} />
          <Story />
        </ThemeProvider>
      );
    },
  ],
};

export default preview;
