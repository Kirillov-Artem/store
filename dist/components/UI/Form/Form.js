"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const Input_1 = __importDefault(require("../Input/Input"));
require("./form.css");
require("./../Input/input.css");
const Form = () => {
    const formRef = (0, react_1.useRef)(null);
    const [inputValue, setInputValue] = (0, react_1.useState)(true);
    const [isConfirmed, setIsConfirmed] = (0, react_1.useState)(false);
    function checkInputsValue(event) {
        var _a;
        event.preventDefault();
        const inputs = (_a = formRef.current) === null || _a === void 0 ? void 0 : _a.querySelectorAll("input");
        let allFieldsFilled = true;
        inputs === null || inputs === void 0 ? void 0 : inputs.forEach((input) => {
            if (!input.value.trim()) {
                allFieldsFilled = false;
            }
        });
        setInputValue(allFieldsFilled);
        if (allFieldsFilled) {
            setIsConfirmed(true);
        }
        else {
            setIsConfirmed(false);
        }
    }
    return ((0, jsx_runtime_1.jsxs)("form", { ref: formRef, className: "form", children: [(0, jsx_runtime_1.jsx)(Input_1.default, { className: "myInput", type: "text", placeholder: "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0418\u043C\u044F" }), (0, jsx_runtime_1.jsx)(Input_1.default, { className: "myInput", type: "text", placeholder: "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0424\u0430\u043C\u0438\u043B\u0438\u044E" }), (0, jsx_runtime_1.jsx)(Input_1.default, { className: "myInput", type: "number", placeholder: "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043D\u043E\u043C\u0435\u0440 \u0442\u0435\u043B\u0435\u0444\u043E\u043D\u0430" }), (0, jsx_runtime_1.jsx)(Input_1.default, { className: "myInput", type: "email", placeholder: "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043F\u043E\u0447\u0442\u0443" }), (0, jsx_runtime_1.jsx)(Input_1.default, { className: "myInput", type: "text", placeholder: "\u0413\u043E\u0440\u043E\u0434" }), (0, jsx_runtime_1.jsx)(Input_1.default, { className: "myInput", type: "text", placeholder: "\u041E\u0442\u0434\u0435\u043B\u0435\u043D\u0438\u0435 \u043F\u043E\u0447\u0442\u044B" }), (0, jsx_runtime_1.jsx)("button", { onClick: checkInputsValue, className: "form_btn", children: "\u041E\u0444\u043E\u0440\u043C\u0438\u0442\u044C" }), (0, jsx_runtime_1.jsx)("div", { className: `confirmation ${isConfirmed ? "visible" : ""}`, children: "\u0416\u0434\u0438\u0442\u0435 \u043F\u043E\u0434\u0442\u0432\u0435\u0440\u0436\u0434\u0435\u043D\u0438\u0435 \u0437\u0430\u043A\u0430\u0437\u0430" }), !inputValue && (0, jsx_runtime_1.jsx)("div", { className: "alert", children: "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0432\u0441\u0435 \u043F\u043E\u043B\u044F" })] }));
};
exports.default = Form;
