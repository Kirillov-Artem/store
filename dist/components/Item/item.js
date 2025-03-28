"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
require("./item.css");
const Item = ({ item, showCount, showAddButton = true }) => {
    function setItemsToLocalStorage(item) {
        const storedItems = localStorage.getItem("items");
        const itemsArray = storedItems ? JSON.parse(storedItems) : [];
        if (itemsArray.length === 0) {
            localStorage.setItem("items", JSON.stringify([item]));
        }
        else {
            let itemFound = false;
            itemsArray.forEach((elem) => {
                if (elem.id === item.id) {
                    elem.count++;
                    itemFound = true;
                }
                localStorage.setItem("items", JSON.stringify(itemsArray));
            });
            if (!itemFound) {
                const updatedItems = [...itemsArray, item];
                console.log("выполнение пошло дальше");
                localStorage.setItem("items", JSON.stringify(updatedItems));
            }
        }
    }
    return ((0, jsx_runtime_1.jsxs)("div", { className: "item", children: [(0, jsx_runtime_1.jsx)("img", { src: "./img/" + item.img, alt: "" }), (0, jsx_runtime_1.jsx)("h1", { children: item.title }), (0, jsx_runtime_1.jsx)("p", { children: item.desc }), (0, jsx_runtime_1.jsxs)("div", { className: "item__footer", children: [(0, jsx_runtime_1.jsx)("p", { className: "item_price", children: item.price }), (0, jsx_runtime_1.jsx)("div", { onClick: () => setItemsToLocalStorage(item), className: "add-to-cart", children: "+" })] })] }));
};
exports.default = Item;
