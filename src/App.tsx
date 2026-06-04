import React from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyle, lightTheme, darkTheme } from "./lib/theme";
import { Loader } from "./lib/ui/loader/loader";
import { Button } from "./lib/ui/button/button";

function App() {
	// true — светлая тема, false — темная тема
	const switcher = true; 

	return (
		<ThemeProvider theme={switcher ? lightTheme : darkTheme}>
			<GlobalStyle/>
			<main style={{ 
				padding: "40px", 
				display: "flex", 
				flexDirection: "column", 
				alignItems: "center",
				justifyContent: "center",
				gap: "16px",
				minHeight: "100vh"
			}}>
				{/* <Loader
					size="16.Base"
					variant="secondary"
					tone="brand"
				/> */}
				<Button
					size="400"
					variant="primary"
					tone="brand"
					// startIcon="🔥"
					label="Button"
					// endIcon="🚀"
				/>
				<Button
					size="400"
					variant="primary"
					tone="brand"
					disabled
					// startIcon="🔥"
					label="Button"
					// endIcon="🚀"
				/>
				<Button
					size="400"
					variant="primary"
					tone="brand"
					loading
					// startIcon="🔥"
					label="Button"
					// endIcon="🚀"
				/>
			</main>
		</ThemeProvider>
	);
}

export default App;
