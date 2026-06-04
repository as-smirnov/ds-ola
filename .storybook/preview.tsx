import type { Preview } from "@storybook/react-vite";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme, GlobalStyle } from "../src/lib";
import React from "react";

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  
  // 🎛️ Твой кастомный тулбар для переключения тем — сохраняем полностью!
  globalTypes: {
    theme: {
      description: "Global theme for components",
      defaultValue: "light",
      toolbar: {
        title: "Theme",
        icon: "circlehollow",
        items: [
          {
            value: "light",
            title: "Светлая тема",
            icon: "circlehollow",
          },
          { 
            value: "dark", 
            title: "Темная тема", 
            icon: "circle" 
          },
        ],
        dynamicTitle: true,
      },
    },
  },

  // 🧠 ДЕКОРАТОР: Переносим его ИЗВНЕ внутрь объекта preview, чтобы Storybook его увидел
    // 🧠 Умный декоратор с жестким сбросом кэша через key
  decorators: [
    (Story, context) => {
      const themeType = context.globals.theme || "light";
      const currentTheme = themeType === "dark" ? darkTheme : lightTheme;

      return (
        /* Передача key принудительно уничтожает старый CSS-кэш в памяти Сторибука */
        <ThemeProvider theme={currentTheme} key={themeType}>
          <GlobalStyle />
          <div style={{ padding: "20px" }}>
            <Story />
          </div>
        </ThemeProvider>
      );
    },
  ],
};

export default preview;
