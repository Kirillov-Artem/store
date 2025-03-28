"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const react_router_dom_1 = require("react-router-dom");
const Form_1 = __importDefault(require("../UI/Form/Form"));
const NavBar_1 = __importDefault(require("../UI/Navbar/NavBar"));
const CartItem_1 = __importDefault(require("../CartItem/CartItem"));
const MyModal_1 = __importDefault(require("../UI/MyModal/MyModal"));
const Cart = ({ setCartOpen, cartOpen }) => {
    const [items, setItems] = (0, react_1.useState)([]);
    const [visible, setVisible] = (0, react_1.useState)(false);
    (0, react_1.useEffect)(() => {
        const storedItems = localStorage.getItem("items");
        const itemsArray = storedItems ? JSON.parse(storedItems) : [];
        setItems(itemsArray);
    }, []);
    const removeFromLocalStorage = (itemToRemove) => {
        const updatedItems = items
            .map((item) => {
            if (item.id === itemToRemove.id) {
                if (item.count > 1) {
                    return Object.assign(Object.assign({}, item), { count: item.count - 1 });
                }
                return null;
            }
            return item;
        })
            .filter((item) => item !== null);
        localStorage.setItem("items", JSON.stringify(updatedItems));
        setItems(updatedItems);
    };
    return ((0, jsx_runtime_1.jsxs)("div", { className: "cart_wrapper", children: [(0, jsx_runtime_1.jsxs)("div", { className: "cart_header", children: [(0, jsx_runtime_1.jsx)(react_router_dom_1.NavLink, { className: "link_to-main", onClick: () => setCartOpen(!cartOpen), to: "/main", children: "\u0412\u0435\u0440\u043D\u0443\u0442\u044C\u0441\u044F \u043D\u0430 \u0433\u043B\u0430\u0432\u043D\u0443\u044E \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0443" }), (0, jsx_runtime_1.jsx)(NavBar_1.default, {})] }), (0, jsx_runtime_1.jsx)("div", { className: "btn_order", onClick: () => setVisible(true), children: "\u041E\u0444\u043E\u0440\u043C\u0438\u0442\u044C \u0437\u0430\u043A\u0430\u0437" }), (0, jsx_runtime_1.jsx)(MyModal_1.default, { visible: visible, setVisible: setVisible, children: (0, jsx_runtime_1.jsx)(Form_1.default, {}) }), (0, jsx_runtime_1.jsx)("div", { className: "cart_items", children: items.map((item) => ((0, jsx_runtime_1.jsx)(CartItem_1.default, { item: item, removeFromLocalStorage: removeFromLocalStorage }, item.id))) })] }));
};
exports.default = Cart;
