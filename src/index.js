import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { HashRouter as Router } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <Route path="*" element={<App />}></Route>
    </Router>
  </React.StrictMode>
);
