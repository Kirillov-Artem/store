"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const item_1 = __importDefault(require("../Item/item"));
const modules_1 = require("swiper/modules");
const react_1 = require("swiper/react");
require("swiper/css");
require("swiper/css/navigation");
require("swiper/css/pagination");
require("./swiper.css");
const SwiperComponent = ({ items }) => {
    return ((0, jsx_runtime_1.jsx)("div", { children: (0, jsx_runtime_1.jsx)(react_1.Swiper, { modules: [modules_1.Navigation, modules_1.Pagination], spaceBetween: 20, slidesPerView: 3, pagination: { clickable: true }, children: items.map((item) => ((0, jsx_runtime_1.jsx)(react_1.SwiperSlide, { children: (0, jsx_runtime_1.jsx)(item_1.default, { showCount: false, item: item }, item.id) }, item.id))) }) }));
};
exports.default = SwiperComponent;
