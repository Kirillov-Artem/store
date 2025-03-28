import React from "react";
import "./navbar.css";

const NavBar = () => {
    return (
        <ul className="nav">
            <li>
                <a href="">Про нас</a>
            </li>
            <li>
                <a href="">Контакты</a>
            </li>
            <li>
                <a href="">Кабинет</a>
            </li>
        </ul>
    );
};

export default NavBar;
