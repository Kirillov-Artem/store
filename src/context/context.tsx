import React, { createContext, useState, useContext, ReactNode } from "react";

interface CartContextType {
    cartOpen: boolean;
    setCartOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: ReactNode }) => {
    const [cartOpen, setCartOpen] = useState<boolean>(false);

    return <CartContext.Provider value={{ cartOpen, setCartOpen }}>{children}</CartContext.Provider>;
};

export const useCart = (): CartContextType => {
    const context = useContext(CartContext);
    if (!context) {
        throw new Error("useCart must be used within a CartProvider");
    }
    return context;
};
