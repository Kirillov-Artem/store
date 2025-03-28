"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
require("./categories.css");
const Categories = ({ filter }) => {
    const categories = [
        {
            key: "all",
            name: "Всё",
        },
        {
            key: "chairs",
            name: "Стулья",
        },
        {
            key: "tables",
            name: "Столы",
        },
        {
            key: "sofa",
            name: "Диваны",
        },
        {
            key: "lamp",
            name: "Лампы",
        },
    ];
    return ((0, jsx_runtime_1.jsx)("div", { className: "categories", children: categories.map((el) => ((0, jsx_runtime_1.jsx)("div", { className: "categories_elem", onClick: () => filter(el.key), children: el.name }, el.key))) })
    // <div className="custom-select">
    //     <div className="selected">{selected}</div>
    //     <div className="options">
    //         {categories.map((option, index) => (
    //             <div key={index} className="option" onClick={() => handleSelect(option)}>
    //                 {option}
    //             </div>
    //         ))}
    //     </div>
    // </div>
    );
};
exports.default = Categories;
