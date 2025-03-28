import React from "react";
import { categoriesType } from "./types";
import { CategoriesPropsType } from "./types";
import "./categories.css";

const Categories = ({ filter }: CategoriesPropsType) => {
    const categories: categoriesType[] = [
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
    return (
        <div className="categories">
            {categories.map((el) => (
                <div className="categories_elem" key={el.key} onClick={() => filter(el.key)}>
                    {el.name}
                </div>
            ))}
        </div>

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

export default Categories;
