import React, {useState} from "react";
import s from './Skill.module.scss'

type SkillType = {
    title: string,
    description: string,
    svg: string,
    done: string,
}

export const Skill: React.FC<SkillType> = ({title, description, svg, done}) => {
    const [style,setStyle] = useState({})

    setTimeout(() => {
        const newStyle = {
            opacity: 1,
            width: `${done}%`
        };

        setStyle(newStyle);
    }, 1000)

    return (
        <div className={s.skill}>
            <div className={s.iconBlock}>
                <img className={s.icon} src={svg} alt="img"/>
            </div>
            <h3>{title}</h3>
            <div className={s.progressBar}>
                <div style={style} className={s.progressBarDone}>
                    {done}%
                </div>
            </div>
            <span className={s.description}>
            {description}
        </span>
        </div>);
}