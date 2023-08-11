import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "../src/assets/sass/style.scss";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "react-toastify/dist/ReactToastify.css";
import "./I18next/I18.tsx";
import { Provider } from "react-redux";
import { store } from "./Redux/Store.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
    <App />
    </Provider>
  </React.StrictMode>
);
