import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./index.css";
import React from "react";
import ReactDOM from "react-dom/client";
import {
  BrowserRouter as Router,
  Navigate,
  Routes,
  Route,
} from "react-router-dom";
import reportWebVitals from "./reportWebVitals";
import App from "./App";
import PkeBack from "./components/search/pokeback";
import Aboutme from "./components/about/about";
import Login from "./components/about/user";
import { GlobalProvider } from "./context/context-global";
import { I18nextProvider } from "react-i18next";
import i18n from "./config/localization/i18n";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <GlobalProvider>
    <I18nextProvider i18n={i18n}>
      <Router>
        <Routes>
          <Route path="pokemons" element={<App />} />
          <Route path="search" element={<PkeBack />} />
          <Route path="matricula" element={<Aboutme />} />
          <Route path="/login" element={<Login/>}/>
          <Route path="*" element={<Navigate replace to="/login" />} />
          <Route path="/" element={<Navigate replace to="/login" />} />
        </Routes>
      </Router>
    </I18nextProvider>
  </GlobalProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
