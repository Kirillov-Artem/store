"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
require("./header.css");
const NavBar_1 = __importDefault(require("../UI/Navbar/NavBar"));
const fa_1 = require("react-icons/fa");
const react_router_dom_1 = require("react-router-dom");
const context_1 = require("../../context/context");
const Header = () => {
    const { cartOpen, setCartOpen } = (0, context_1.useCart)();
    return ((0, jsx_runtime_1.jsxs)("header", { children: [(0, jsx_runtime_1.jsxs)("div", { className: "header-container", children: [(0, jsx_runtime_1.jsx)("span", { className: "logo", children: "House Staff" }), (0, jsx_runtime_1.jsx)(NavBar_1.default, {}), (0, jsx_runtime_1.jsx)(react_router_dom_1.Link, { className: `shop-cart ${cartOpen && "active"}`, to: "/cart", children: (0, jsx_runtime_1.jsx)(fa_1.FaShoppingCart, { onClick: () => {
                                setCartOpen(!cartOpen);
                            } }) })] }), (0, jsx_runtime_1.jsx)("div", { className: "presentation" })] }));
};
exports.default = Header;
