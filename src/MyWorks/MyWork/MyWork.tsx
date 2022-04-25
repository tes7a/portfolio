import React from "react";
import s from './myWork.module.scss'

type MyWorkProps = {
    title: string,
    description: string,
    style: {
        backgroundImage: string
    },
}

export const MyWork: React.FC<MyWorkProps> = ({title, description, style}) => {
    return <div className={s.myWork}>
        <div style={style} className={s.icon}>
            <a className={s.viewBtn} href={'/#'}>look</a>
        </div>
        <div className={s.projectInfo}>
            <h3 className={s.workTitle}>{title}</h3>
            <span className={s.description}>{description}</span>
        </div>
    </div>
}