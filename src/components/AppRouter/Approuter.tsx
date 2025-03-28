import React, { useEffect } from "react";
import { useCart } from "../../context/context";
import { createBrowserRouter, RouterProvider, Route, Navigate } from "react-router-dom";
import CartPage from "../../Pages/CartPage";
import MainPage from "../../Pages/MainPage";

const AppRouter = () => {
    const { cartOpen } = useCart();

    const routes = [
        {
            path: "/",
            element: <MainPage />,
            errorElement: <MainPage />,
        },
        {
            path: "/cart",
            element: cartOpen ? <CartPage /> : <Navigate to="/" replace />,
            errorElement: <MainPage />,
        },
        {
            path: "*",
            element: <MainPage />,
        },
    ];

    const router = createBrowserRouter(routes);

    return <RouterProvider router={router} />;
};

export default AppRouter;
