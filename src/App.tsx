import React from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyle, lightTheme, darkTheme } from "./lib/theme";
import { Loader } from "./lib/ui/loader/loader";
import { Button } from "./lib/ui/button/button";
import { Badge } from "./lib/ui/badge/badge";
import { ButtonIcon } from "./lib/ui/button-icon/button-icon";

function App() {
  const [theme, setTheme] = React.useState<"light" | "dark">("light");

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <GlobalStyle />
      <button
        onClick={() =>
          setTheme((prev) => (prev === "light" ? "dark" : "light"))
        }
      >
        toggle theme
      </button>
      <main
        style={{
          padding: "40px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: "16px",
          minHeight: "100vh",
        }}
      >
        {/* <Loader
					size="16.Base"
					variant="secondary"
					tone="brand"
				/> */}
        {/* <Button
          size="400"
          variant="primary"
          tone="brand"
          startIcon="check"
          label="Button"
          // endIcon="check"
        />
        <Button
          size="400"
          variant="primary"
          tone="brand"
          disabled
          // startIcon="check"
          label="Button"
          // endIcon="check"
        />
        <Button
          size="400"
          variant="primary"
          tone="brand"
          loading
          // startIcon="check"
          label="Button"
          // endIcon="check"
        /> */}
        {/* <ButtonIcon
          size="400"
          variant="primary"
          tone="brand"
          // loading
          // disabled
          icon="check"
        /> */}
        <Badge
          size="200"
          variant="primary"
          tone="brand"
          // loading
          // disabled
          startIcon="check"
          label="Button"
          endIcon="check"
        />
      </main>
    </ThemeProvider>
  );
}

export default App;
