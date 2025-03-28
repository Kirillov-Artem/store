import React, { useEffect, useState } from "react";
import { ItemProps } from "./types";
import { ItemType } from "./types";
import "./cartitem.css";

const CartItem = ({ item, removeFromLocalStorage }: ItemProps) => {
    const [items, setItems] = useState<ItemType[]>([]);

    useEffect(() => {
        const storedItems = localStorage.getItem("items");
        const itemsArray: ItemType[] = storedItems ? JSON.parse(storedItems) : [];
        setItems(itemsArray);
    }, []);

    return (
        <div className="item">
            <img src={"./img/" + item.img} alt="" />
            <h1>{item.title}</h1>
            <p>{item.desc}</p>
            <div className="item__footer">
                <p className="item_price">{item.price}</p>
                <div onClick={() => removeFromLocalStorage(item)} className="remove-from-cart">
                    -
                </div>
                <div>Количество: {item.count}</div>
            </div>
        </div>
    );
};

export default CartItem;
