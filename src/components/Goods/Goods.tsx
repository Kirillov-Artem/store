import React, { useEffect, useState } from "react";
import { Elem } from "./types";
import SwiperComponent from "../UI/Swiper/swiperComponent";
import Categories from "../Categories/Categories";

const Goods = () => {
    const [items, setItems] = useState<Elem[]>([]);
    const [filteredItems, setfilteredItems] = useState<Elem[]>();
    useEffect(() => {
        setItems([
            {
                id: 1,
                title: "Стул серый",
                img: "chair-gray.png",
                desc: "aboba",
                category: "chairs",
                price: 49.99,
                count: 1,
            },
            {
                id: 2,
                title: "Стол",
                img: "table.png",
                desc: "aboba",
                category: "tables",
                price: 52.99,
                count: 1,
            },
            {
                id: 3,
                title: "Стул белый",
                img: "chair-white.png",
                desc: "aboba",
                category: "chairs",
                price: 52.99,
                count: 1,
            },
            {
                id: 4,
                title: "Лампа",
                img: "lamp.png",
                desc: "aboba",
                category: "lamp",
                price: 52.99,
                count: 1,
            },
            {
                id: 5,
                title: "Диван",
                img: "sofa.png",
                desc: "aboba",
                category: "sofa",
                price: 52.99,
                count: 1,
            },
        ]);
    }, []);

    function filterItems(elem: string): void {
        if (elem == "all") {
            setfilteredItems(items);
            return;
        }
        const filteredItems = items.filter((item) => item.category == elem);
        setfilteredItems(filteredItems);
    }

    return (
        <main>
            <Categories filter={filterItems} />
            <SwiperComponent items={filteredItems || items} />
        </main>
    );
};

export default Goods;
