import { ReactNode } from "react";

export interface MyModalProps {
    children: ReactNode;
    visible: boolean;
    setVisible: (visible: boolean) => void;
}
