"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
require("./MyModal.css");
const MyModal = ({ children, visible, setVisible }) => {
    const rootClasses = ["myModal"];
    if (visible) {
        rootClasses.push("active");
    }
    return ((0, jsx_runtime_1.jsx)("div", { className: rootClasses.join(" "), onClick: () => setVisible(false), children: (0, jsx_runtime_1.jsx)("div", { className: "myModalContent", onClick: (e) => e.stopPropagation(), children: children }) }));
};
exports.default = MyModal;
