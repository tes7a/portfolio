import React from "react";
import s from "./Skills.module.scss";
import sContainer from "../common/Styles/Container.module.scss";
import {Skill} from "./Skill/Skill";
import {Title} from "../common/components/title/Title";
import {arraySkills} from "./arraySkills";

export const Skills = () => {
    return (
        <div className={s.skills_block}>
            <div className={`${sContainer.container} ${s.skills_container}`}>
                <Title title={"Skills"}/>
                <p>I always try my best to make good user interface
                    with the best user experience.
                </p>
                <div className={s.skills}>
                    {arraySkills.map((s) => {
                           return <Skill title={s.title} description={s.description} svg={s.svg} done={s.done}/>
                    })}
                </div>
            </div>
        </div>
    );
}