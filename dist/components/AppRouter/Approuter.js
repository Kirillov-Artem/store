"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const context_1 = require("../../context/context");
const react_router_dom_1 = require("react-router-dom");
const CartPage_1 = __importDefault(require("../../Pages/CartPage"));
const MainPage_1 = __importDefault(require("../../Pages/MainPage"));
const AppRouter = () => {
    const { cartOpen } = (0, context_1.useCart)();
    const routes = [
        {
            path: "/",
            element: (0, jsx_runtime_1.jsx)(MainPage_1.default, {}),
            errorElement: (0, jsx_runtime_1.jsx)(MainPage_1.default, {}),
        },
        {
            path: "/cart",
            element: cartOpen ? (0, jsx_runtime_1.jsx)(CartPage_1.default, {}) : (0, jsx_runtime_1.jsx)(react_router_dom_1.Navigate, { to: "/", replace: true }),
            errorElement: (0, jsx_runtime_1.jsx)(MainPage_1.default, {}),
        },
        {
            path: "*",
            element: (0, jsx_runtime_1.jsx)(MainPage_1.default, {}),
        },
    ];
    const router = (0, react_router_dom_1.createBrowserRouter)(routes);
    return (0, jsx_runtime_1.jsx)(react_router_dom_1.RouterProvider, { router: router });
};
exports.default = AppRouter;
