require("./bootstrap");
import "../sass/app.sass";
import React from "react";
import { render } from "react-dom";
import { BrowserRouter } from "react-router-dom";
import ErrorBoundry from "./components/error-boundry";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./theme";
import Body from "./components/Body";
import { Provider } from "react-redux";
import store from "./redux/store";
import { ServiceProvider } from "./services/context";
import * as requestService from "./services/request";

type ValueTypes = any;





const { ...value }: ValueTypes = requestService;

render(
    <Provider store={store}>
        <ErrorBoundry>
            <ServiceProvider value={value}>
                <BrowserRouter>
                    <ThemeProvider theme={theme}>
                        <Body />
                    </ThemeProvider>
                </BrowserRouter>
            </ServiceProvider>
        </ErrorBoundry>
    </Provider>,
    document.getElementById("root")
);
