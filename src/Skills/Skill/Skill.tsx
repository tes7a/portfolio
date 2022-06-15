import React, {useState} from "react";
import s from "./Skill.module.scss";

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
    }, 100)

    return (
        <div className={s.skill}>
            <div className={s.img_block}>
                <img className={s.img} src={svg} alt="img"/>
            </div>
            <h3>{title}</h3>
            <div className={s.progress_bar}>
                <div style={style} className={s.progress_bar_done}>
                    {done}%
                </div>
            </div>
            <span className={s.description}>
            {description}
        </span>
        </div>);
}