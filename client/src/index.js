import React from "react";
import ReactDOM from "react-dom";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import "./assets/css/global.css";

import App from "./components/App";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
