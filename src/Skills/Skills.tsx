import React from "react";
import s from './Skills.module.scss'
import sContainer from '../common/Styles/Container.module.scss'
import {Skill} from "./Skill/Skill";
import {Title} from "../common/components/title/Title";
import reactSvg from '../assets/image/react.svg'
import reduxSvg from '../assets/image/redux.svg'

export const Skills = () => {
    return (
        <div className={s.skillsBlock}>
            <div className={`${sContainer.container} ${s.skillsContainer}`}>
                <Title title={"Skills"}/>
                <p>I always try my best to make good user interface
                    with the best user experience.
                </p>
                <div className={s.skills}>
                    <Skill img={''}
                           title={"JS"}
                           description={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, remaining i versions of Lorem Ipsum."}/>
                    <Skill img={reactSvg}
                           title={"React"}
                           description={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, remaining i versions of Lorem Ipsum."}/>
                    <Skill img={''}
                           title={"CSS"}
                           description={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, remaining i versions of Lorem Ipsum."}
                    />
                    <Skill title={"React"}
                           description={'"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, remaining i versions of Lorem Ipsum."'}
                           img={reduxSvg}
                    />
                </div>
            </div>
        </div>
    );
}