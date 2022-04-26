import React from "react";
import s from './Skill.module.scss'

type SkillType = {
    title: string,
    description: string,
    img: string,
}

export const Skill: React.FC<SkillType> = ({title, description, img}) => {
    return (
        <div className={s.skill}>
        <div className={s.iconBlock}>
            <img className={s.icon} src={img} alt="img"/>
        </div>
        <h3>{title}</h3>
        <span className={s.description}>
            {description}
        </span>
    </div>);
}