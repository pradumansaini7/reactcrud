import React from "react";
import ReactDOM from "react-dom/client";
import Routers from "./Routers/index.jsx";
import { BrowserRouter } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import Header from "../src/components/Header.jsx";
import Footer from "../src/components/Footer.jsx";
import "../src/assets/style.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Header name="Users" />
      <Routers />
      <Footer />
    </BrowserRouter>
  </React.StrictMode>
);
