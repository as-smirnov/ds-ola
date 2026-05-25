import 'styled-components';
import { createGlobalStyle } from "styled-components";

// Расширяем типы styled-components, чтобы TypeScript увидел свойство colors
declare module 'styled-components' {
  export interface DefaultTheme {
    colors: any;
  }
}

export const GlobalStyle = createGlobalStyle`
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

            font-family: sans-serif;
            background: ${({ theme }) => theme.colors.bg.calm.global};
	}
`;
