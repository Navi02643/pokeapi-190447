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
import { GlobalProvider } from "./context/context-global";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <GlobalProvider>
    <Router>
      <Routes>
        <Route path="pokemons" element={<App />} />
        <Route path="search" element={<PkeBack />} />
        <Route path="matricula" element={<Aboutme/>}/>
        <Route path="*" element={<Navigate replace to="/pokemons" />} />
        <Route path="/" element={<Navigate replace to="/pokemons" />} />
      </Routes>
    </Router>
  </GlobalProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
