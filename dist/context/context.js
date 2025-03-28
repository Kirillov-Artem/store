"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useCart = exports.CartProvider = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const CartContext = (0, react_1.createContext)(undefined);
const CartProvider = ({ children }) => {
    const [cartOpen, setCartOpen] = (0, react_1.useState)(false);
    return (0, jsx_runtime_1.jsx)(CartContext.Provider, { value: { cartOpen, setCartOpen }, children: children });
};
exports.CartProvider = CartProvider;
const useCart = () => {
    const context = (0, react_1.useContext)(CartContext);
    if (!context) {
        throw new Error("useCart must be used within a CartProvider");
    }
    return context;
};
exports.useCart = useCart;
