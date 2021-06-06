import React from "react";
import ReactDOM from "react-dom";
import "react-toastify/dist/ReactToastify.min.css";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import { store } from "./redux/rootReducer";
import { ToastContainer } from "react-toastify";

// I decided to remove reac strict mode due to warnings from react about unsafe use of
// possible side effects
ReactDOM.render(
  <Provider store={store}>
    <ToastContainer />
    <App />
  </Provider>,
  document.getElementById("root")
);
