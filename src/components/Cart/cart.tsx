import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import Form from "../UI/Form/Form";
import NavBar from "../UI/Navbar/NavBar";
import CartItem from "../CartItem/CartItem";
import { ItemType } from "./types";
import { CartProps } from "./types";
import MyModal from "../UI/MyModal/MyModal";

const Cart = ({ setCartOpen, cartOpen }: CartProps) => {
    const [items, setItems] = useState<ItemType[]>([]);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const storedItems = localStorage.getItem("items");
        const itemsArray: ItemType[] = storedItems ? JSON.parse(storedItems) : [];
        setItems(itemsArray);
    }, []);

    const removeFromLocalStorage = (itemToRemove: ItemType) => {
        const updatedItems = items
            .map((item) => {
                if (item.id === itemToRemove.id) {
                    if (item.count > 1) {
                        return { ...item, count: item.count - 1 };
                    }
                    return null;
                }
                return item;
            })
            .filter((item): item is ItemType => item !== null);
        localStorage.setItem("items", JSON.stringify(updatedItems));
        setItems(updatedItems);
    };
    return (
        <div className="cart_wrapper">
            <div className="cart_header">
                <NavLink className={"link_to-main"} onClick={() => setCartOpen(!cartOpen)} to="/main">
                    Вернуться на главную страницу
                </NavLink>
                <NavBar />
            </div>
            <div className="btn_order" onClick={() => setVisible(true)}>
                Оформить заказ
            </div>
            <MyModal visible={visible} setVisible={setVisible}>
                <Form />
            </MyModal>
            <div className="cart_items">
                {items.map((item: ItemType) => (
                    <CartItem key={item.id} item={item} removeFromLocalStorage={removeFromLocalStorage} />
                ))}
            </div>
        </div>
    );
};

export default Cart;
