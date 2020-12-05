// Packages
import React from "react";
import { Redirect, Route, RouteProps } from "react-router-dom";

// Props
export interface ProtectedRouteProps extends RouteProps {
    needAuth: boolean;
    isAuthenticated: boolean;
    redirectPath?: string;
}

// ProtectedRoute
export const ProtectedRoute: React.FC<ProtectedRouteProps> = props => {
    let redirectPath = "";
    if (props.redirectPath) {
        redirectPath = props.redirectPath;
    } else if (!props.isAuthenticated && props.needAuth) {
        redirectPath = "/login"
    } else if (props.isAuthenticated && !props.needAuth) {
        redirectPath = "/dashboard"
    }

    if (redirectPath) {
        const component = () => <Redirect to={{ pathname: redirectPath }} />
        return <Route {...props} component={component} />
    } else {
        return <Route {...props} />
    }
}
