import React from "react";
import s from "./Project.module.scss";

type MyWorkProps = {
    title: string,
    description: string,
    style: {
        backgroundImage: string
    },
}

export const Project: React.FC<MyWorkProps> = ({title, description, style}) => {
    return <div className={s.project}>
        <div style={style} className={s.img}>
            <a href={"/#"} className={s.btn}><i className="fa-solid fa-link fa-2x"></i></a>
            <div className={s.projectInfo}>
                <h3 className={s.workTitle}>{title}</h3>
                <span className={s.description}>{description}</span>
            </div>
        </div>
    </div>
}