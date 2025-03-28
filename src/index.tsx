import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/index.css";
import App from "./App/App";
import { CartProvider } from "./context/context";

const rootElement = document.getElementById("root");

if (rootElement) {
    const root = ReactDOM.createRoot(rootElement as HTMLElement);
    root.render(
        <CartProvider>
            <App />
        </CartProvider>
    );
}
