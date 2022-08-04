import React from "react";
import ReactDOM from "react-dom/client";
import "../src/assets/css/index.css";
import App from "./routes/App";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter } from "react-router-dom";
import store from "./store/store";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  // </React.StrictMode>
);

reportWebVitals();
