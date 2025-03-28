"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.routes = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const MainPage_1 = __importDefault(require("../../Pages/MainPage"));
const CartPage_1 = __importDefault(require("../../Pages/CartPage"));
exports.routes = [
    { path: "/main", element: (0, jsx_runtime_1.jsx)(MainPage_1.default, {}) },
    { path: "/cart", element: (0, jsx_runtime_1.jsx)(CartPage_1.default, {}) },
    { path: "*", element: (0, jsx_runtime_1.jsx)(MainPage_1.default, {}) },
];
