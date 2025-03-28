import React from "react";
import { MyModalProps } from "./types";
import "./MyModal.css";

const MyModal = ({ children, visible, setVisible }: MyModalProps) => {
    const rootClasses = ["myModal"];

    if (visible) {
        rootClasses.push("active");
    }

    return (
        <div className={rootClasses.join(" ")} onClick={() => setVisible(false)}>
            <div className={"myModalContent"} onClick={(e) => e.stopPropagation()}>
                {children}
            </div>
        </div>
    );
};

export default MyModal;
