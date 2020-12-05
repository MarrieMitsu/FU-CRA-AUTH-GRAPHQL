// Packages
import { CssBaseline, ThemeProvider } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import Router from "./routes";
import { accessToken } from "./utils/accessToken";
import customTheme from "./utils/customTheme";

// App
const App: React.FC = () => {
	const [loading, setLoading] = useState(true);
	useEffect(() => {
		async function refreshToken() {
			const response = await fetch("http://localhost:4000/api/auth/refresh_token", {
				method: "GET",
				credentials: "include",
			});
			const { accessToken: token } = await response.json();
			accessToken.setAccessToken(token);
			setLoading(false);
		}
		refreshToken();
	}, []);

	if (loading) {
		return(
			<div>Loading...</div>
		);
	}

	return (
		<ThemeProvider theme={customTheme}>
			<CssBaseline />
			<Router/>
		</ThemeProvider>
	);
}

// Export
export default App;