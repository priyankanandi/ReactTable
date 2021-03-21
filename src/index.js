import React from "react";
import ReactDOM from "react-dom";
import { Route, BrowserRouter } from "react-router-dom";
import Layout from "./modules/Layout/Layout";
import "./styles.scss";

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Route exact path="/" component={Layout} />
      </BrowserRouter>
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
