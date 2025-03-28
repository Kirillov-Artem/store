export interface ItemType {
    id: number;
    title: string;
    img: string;
    desc: string;
    category: string;
    price: number;
    count: number;
}

export interface CartProps {
    setCartOpen: React.Dispatch<React.SetStateAction<boolean>>;
    cartOpen: boolean;
}
