import React, { FC, ReactElement } from "react";
import { render, RenderOptions } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import { BrowserRouter as Router } from "react-router-dom";
import { defaultTheme } from "./theme";
import { Provider } from "react-redux";
import { store } from "../app/store";

const AllTheProviders: FC = ({ children }) => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={defaultTheme}>
        <Router>{children}</Router>
      </ThemeProvider>
    </Provider>
  );
};

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, "wrapper">
) => render(ui, { wrapper: AllTheProviders, ...options });

export * from "@testing-library/react";
export { customRender as render };
