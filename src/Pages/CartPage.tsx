import React from "react";
import { useCart } from "../context/context";
import Cart from "../components/Cart/cart";
import "./../components/Cart/cart.css";

const CartPage = () => {
    const { cartOpen, setCartOpen } = useCart();
    return (
        <div className="cart">
            <Cart setCartOpen={setCartOpen} cartOpen={cartOpen} />
        </div>
    );
};

export default CartPage;
