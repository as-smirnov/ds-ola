import "styled-components";
import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    /* РЕГИСТРИРУЕМ ВАРИАТИВНЫЙ ШРИФТ НАПРЯМУЮ ЧЕРЕЗ СТИЛИ */
    @font-face {
      font-family: 'Inter Variable';
      /* 👈 Пишем путь к файлу от корня проекта как обычную строку */
      src: url('/assets/fonts/Inter-Variable.woff2') format('woff2-variations'),
           url('/assets/fonts/Inter-Variable.woff2') format('woff2');
      font-weight: 100 900; 
      font-style: normal;
      font-display: swap;
    }

    *, *::before, *::after {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    }

    body {
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
      -webkit-tap-highlight-color: transparent;
      -webkit-overflow-scrolling: touch;

      font-family: 'Inter', sans-serif;
      background: ${(props) => props.theme.semantic.colors.bg.layer1};
    }
`;
