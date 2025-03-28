"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
require("./cartitem.css");
const CartItem = ({ item, removeFromLocalStorage }) => {
    const [items, setItems] = (0, react_1.useState)([]);
    (0, react_1.useEffect)(() => {
        const storedItems = localStorage.getItem("items");
        const itemsArray = storedItems ? JSON.parse(storedItems) : [];
        setItems(itemsArray);
    }, []);
    return ((0, jsx_runtime_1.jsxs)("div", { className: "item", children: [(0, jsx_runtime_1.jsx)("img", { src: "./img/" + item.img, alt: "" }), (0, jsx_runtime_1.jsx)("h1", { children: item.title }), (0, jsx_runtime_1.jsx)("p", { children: item.desc }), (0, jsx_runtime_1.jsxs)("div", { className: "item__footer", children: [(0, jsx_runtime_1.jsx)("p", { className: "item_price", children: item.price }), (0, jsx_runtime_1.jsx)("div", { onClick: () => removeFromLocalStorage(item), className: "remove-from-cart", children: "-" }), (0, jsx_runtime_1.jsxs)("div", { children: ["\u041A\u043E\u043B\u0438\u0447\u0435\u0441\u0442\u0432\u043E: ", item.count] })] })] }));
};
exports.default = CartItem;
