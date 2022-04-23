import React from "react";
import s from './Title.module.css'

type TitleType = {
    title: string
}

export const Title: React.FC<TitleType> = ({title}) => {
    return(
        <div className={s.title}>
            <h2>{title}</h2>
        </div>
    )
}