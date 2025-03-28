"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const context_1 = require("../context/context");
const cart_1 = __importDefault(require("../components/Cart/cart"));
require("./../components/Cart/cart.css");
const CartPage = () => {
    const { cartOpen, setCartOpen } = (0, context_1.useCart)();
    return ((0, jsx_runtime_1.jsx)("div", { className: "cart", children: (0, jsx_runtime_1.jsx)(cart_1.default, { setCartOpen: setCartOpen, cartOpen: cartOpen }) }));
};
exports.default = CartPage;
