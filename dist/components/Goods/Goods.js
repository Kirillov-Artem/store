"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const swiperComponent_1 = __importDefault(require("../UI/Swiper/swiperComponent"));
const Categories_1 = __importDefault(require("../Categories/Categories"));
const Goods = () => {
    const [items, setItems] = (0, react_1.useState)([]);
    const [filteredItems, setfilteredItems] = (0, react_1.useState)();
    (0, react_1.useEffect)(() => {
        setItems([
            {
                id: 1,
                title: "Стул серый",
                img: "chair-gray.png",
                desc: "aboba",
                category: "chairs",
                price: 49.99,
                count: 1,
            },
            {
                id: 2,
                title: "Стол",
                img: "table.png",
                desc: "aboba",
                category: "tables",
                price: 52.99,
                count: 1,
            },
            {
                id: 3,
                title: "Стул белый",
                img: "chair-white.png",
                desc: "aboba",
                category: "chairs",
                price: 52.99,
                count: 1,
            },
            {
                id: 4,
                title: "Лампа",
                img: "lamp.png",
                desc: "aboba",
                category: "lamp",
                price: 52.99,
                count: 1,
            },
            {
                id: 5,
                title: "Диван",
                img: "sofa.png",
                desc: "aboba",
                category: "sofa",
                price: 52.99,
                count: 1,
            },
        ]);
    }, []);
    function filterItems(elem) {
        if (elem == "all") {
            setfilteredItems(items);
            return;
        }
        const filteredItems = items.filter((item) => item.category == elem);
        setfilteredItems(filteredItems);
    }
    return ((0, jsx_runtime_1.jsxs)("main", { children: [(0, jsx_runtime_1.jsx)(Categories_1.default, { filter: filterItems }), (0, jsx_runtime_1.jsx)(swiperComponent_1.default, { items: filteredItems || items })] }));
};
exports.default = Goods;
