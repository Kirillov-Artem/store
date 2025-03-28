"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const header_1 = __importDefault(require("../components/Header/header"));
const footer_1 = __importDefault(require("../components/Footer/footer"));
const Goods_1 = __importDefault(require("../components/Goods/Goods"));
const MainPage = () => {
    return ((0, jsx_runtime_1.jsxs)("div", { className: "wrapper", children: [(0, jsx_runtime_1.jsx)(header_1.default, {}), (0, jsx_runtime_1.jsx)(Goods_1.default, {}), (0, jsx_runtime_1.jsx)(footer_1.default, {})] }));
};
exports.default = MainPage;
