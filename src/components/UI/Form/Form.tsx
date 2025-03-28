import React, { useRef, useState } from "react";
import Input from "../Input/Input";
import "./form.css";
import "./../Input/input.css";

const Form = () => {
    const formRef = useRef<HTMLFormElement | null>(null);
    const [inputValue, setInputValue] = useState(true);
    const [isConfirmed, setIsConfirmed] = useState(false);

    function checkInputsValue(event: React.MouseEvent<HTMLButtonElement>) {
        event.preventDefault();

        const inputs = formRef.current?.querySelectorAll("input");
        let allFieldsFilled = true;

        inputs?.forEach((input) => {
            if (!input.value.trim()) {
                allFieldsFilled = false;
            }
        });
        setInputValue(allFieldsFilled);

        if (allFieldsFilled) {
            setIsConfirmed(true);
        } else {
            setIsConfirmed(false);
        }
    }
    return (
        <form ref={formRef} className="form">
            <Input className="myInput" type="text" placeholder="Введите Имя" />
            <Input className="myInput" type="text" placeholder="Введите Фамилию" />
            <Input className="myInput" type="number" placeholder="Введите номер телефона" />
            <Input className="myInput" type="email" placeholder="Введите почту" />
            <Input className="myInput" type="text" placeholder="Город" />
            <Input className="myInput" type="text" placeholder="Отделение почты" />
            <button onClick={checkInputsValue} className="form_btn">
                Оформить
            </button>
            <div className={`confirmation ${isConfirmed ? "visible" : ""}`}>Ждите подтверждение заказа</div>
            {!inputValue && <div className="alert">Введите все поля</div>}
        </form>
    );
};

export default Form;
