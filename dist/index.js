"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const client_1 = __importDefault(require("react-dom/client"));
require("./styles/index.css");
const App_1 = __importDefault(require("./App/App"));
const context_1 = require("./context/context");
const rootElement = document.getElementById("root");
if (rootElement) {
    const root = client_1.default.createRoot(rootElement);
    root.render((0, jsx_runtime_1.jsx)(context_1.CartProvider, { children: (0, jsx_runtime_1.jsx)(App_1.default, {}) }));
}
