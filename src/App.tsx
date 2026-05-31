import React from 'react'
import { ThemeProvider } from 'styled-components'
import { GlobalStyle, lightTheme, darkTheme } from './lib/theme'
import { Loader } from './lib/loader/loader'
import { Button } from './lib/button/button'

function App() {
  // true — светлая тема, false — темная тема
  const switcher = false

  return (
    <ThemeProvider theme={switcher ? lightTheme : darkTheme}>
      <GlobalStyle />
      <main
        style={{
          padding: '40px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '16px',
          minHeight: '100vh',
        }}
      >
        {/* <Loader size="16.Base" variant="secondary" tone="positive" /> */}
        <Button size="400" variant="Outline" label="Button" />
      </main>
    </ThemeProvider>
  )
}

export default App

// return (
// 		<ThemeProvider theme={switcher ? lightTheme : darkTheme}>
// 			<GlobalStyle/>
// 			<main style={{
// 				padding: "40px",
// 				display: "flex",
// 				flexDirection: "column",
// 				alignItems: "center",
// 				justifyContent: "center",
// 				gap: "16px",
// 				minHeight: "100vh"
// 			}}>
// 				<Button
// 					size="400"
// 					variant="Primary"
// 					tone="Brand"
// 					// startIcon="🔥"
// 					label="Button"
// 					// endIcon="🚀"
// 				disabled />

// 				{/* loading
// 				disabled */}

// 			</main>
// 		</ThemeProvider>
// 	);
