import React, { useState } from "react";
import "./header.css";
import NavBar from "../UI/Navbar/NavBar";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useCart } from "../../context/context";

const Header = () => {
    const { cartOpen, setCartOpen } = useCart();

    return (
        <header>
            <div className="header-container">
                <span className="logo">House Staff</span>
                <NavBar />
                <Link className={`shop-cart ${cartOpen && "active"}`} to={"/cart"}>
                    <FaShoppingCart
                        onClick={() => {
                            setCartOpen(!cartOpen);
                        }}
                    />
                </Link>
            </div>
            <div className="presentation"></div>
        </header>
    );
};

export default Header;
