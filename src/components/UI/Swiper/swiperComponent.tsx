import React from "react";
import Item from "../../Item/item";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./swiper.css";
import { Elem } from "./types";

interface SwiperComponentProps {
    items: Elem[]; // Пропс "items" должен быть массивом объектов типа Elem
}

const SwiperComponent = ({ items }: SwiperComponentProps) => {
    return (
        <div>
            <Swiper
                modules={[Navigation, Pagination]}
                spaceBetween={20}
                slidesPerView={3}
                pagination={{ clickable: true }}
            >
                {items.map((item) => (
                    <SwiperSlide key={item.id}>
                        <Item key={item.id} showCount={false} item={item} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default SwiperComponent;
