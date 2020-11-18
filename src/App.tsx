// Packages
import React from "react";
import Router from "./routes";
import { CssBaseline, ThemeProvider } from "@material-ui/core";
import customTheme from "./utils/customTheme";

// App
const App: React.FC = () => {
	return (
		<ThemeProvider theme={customTheme}>
			<CssBaseline />
			<Router/>
		</ThemeProvider>
	);
}

// Export
export default App;