import React from "react";
import s from "./Button.module.scss";

type ButtonType = {
    link?: string,
    description?: string,
    type?: string,
}

export const Button: React.FC<ButtonType> = ({link, description, type}) => {
    return(
        <a type={type} href={link} className={s.defaultBtn}>{description}</a>
    )
}