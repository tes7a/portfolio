import React from "react";
import s from './Title.module.scss'

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