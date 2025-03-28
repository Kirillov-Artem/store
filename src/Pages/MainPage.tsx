import React from "react";
import Header from "../components/Header/header";
import Footer from "../components/Footer/footer";
import Goods from "../components/Goods/Goods";

const MainPage = () => {
    return (
        <div className="wrapper">
            <Header />
            <Goods />
            <Footer />
        </div>
    );
};

export default MainPage;
