import React, { useEffect, useState } from "react";
import { ItemType } from "./types";
import "./item.css";
import { ItemProps } from "./types";

const Item = ({ item, showCount, showAddButton = true }: ItemProps) => {
    function setItemsToLocalStorage(item: ItemType) {
        const storedItems = localStorage.getItem("items");
        const itemsArray: ItemType[] = storedItems ? JSON.parse(storedItems) : [];

        if (itemsArray.length === 0) {
            localStorage.setItem("items", JSON.stringify([item]));
        } else {
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

    return (
        <div className="item">
            <img src={"./img/" + item.img} alt="" />
            <h1>{item.title}</h1>
            <p>{item.desc}</p>
            <div className="item__footer">
                <p className="item_price">{item.price}</p>
                <div onClick={() => setItemsToLocalStorage(item)} className="add-to-cart">
                    +
                </div>
            </div>
        </div>
    );
};

export default Item;
