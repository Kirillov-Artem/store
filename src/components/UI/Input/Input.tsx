import React from "react";
import MyInputProps from "./types";

const Input = (props: MyInputProps) => {
    return <input {...props}></input>;
};

export default Input;
