import React from "react";
import ReactDOM from "react-dom";
import RootRouter from "./components/RootRouter";
import { Provider } from "react-redux";
import createStore from "./store";
import { reducer } from "./modules";
import "./index.css";

const store = createStore(reducer);

ReactDOM.render(
  <Provider store={store}>
    <RootRouter />
  </Provider>,
  document.getElementById("root")
);
