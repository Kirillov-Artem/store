export interface ItemType {
    id: number;
    title: string;
    img: string;
    desc: string;
    category: string;
    price: number;
    count: number;
}

export interface ItemProps {
    item: ItemType;
    removeFromLocalStorage: (item: ItemType) => void;
}
