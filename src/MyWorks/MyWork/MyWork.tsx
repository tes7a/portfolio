import React from "react";
import s from './myWork.module.css'

type MyWorkProps = {
    title: string,
    description: string,
}

export const MyWork: React.FC<MyWorkProps> = ({title, description}) => {
    return <div className={s.myWork}>
           <div className={s.icon}>
               img
               <a href={'/#'}>look</a>
           </div>
        <span className={s.description}>
            <h3>{title}</h3>
            {description}
        </span>
    </div>
}