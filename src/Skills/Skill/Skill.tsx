import React, {FunctionComponent, SVGProps} from "react";
import s from './Skill.module.scss'

type SkillType = {
    title: string,
    description: string,
    svg: string,
}

export const Skill: React.FC<SkillType> = ({title, description, svg}) => {
    return (
        <div className={s.skill}>
        <div className={s.iconBlock}>
            <img className={s.icon} src={svg} alt="img"/>
        </div>
        <h3>{title}</h3>
        <span className={s.description}>
            {description}
        </span>
    </div>);
}