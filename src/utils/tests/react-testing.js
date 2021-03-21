import React from "react";
import { render } from "@testing-library/react";
import { BrowserRouter, Route } from "react-router-dom";
import "@testing-library/jest-dom/extend-expect";
import jQuery from "jquery";

const reduxRender = (node, options = {}) => render(node, options);

const customRender = (node, options = {}) => reduxRender(node, options);

const renderWithRouter = (ui, { route = "/", ...renderOptions } = {}) => {
  const utils = reduxRender(
    <BrowserRouter>
      <Route path={route}>{ui}</Route>
    </BrowserRouter>,
    renderOptions
  );
  return {
    ...utils
  };
};

// re-export everything

export * from "@testing-library/react";

//widgster mock function
beforeEach(() => {
  jQuery.fn.widgster = () => {};
});

// override render method
export { customRender as render, renderWithRouter };
