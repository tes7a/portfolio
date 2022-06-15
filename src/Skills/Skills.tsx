import React from "react";
import s from "./Skills.module.scss";
import sContainer from "../common/Styles/Container.module.scss";
import {Skill} from "./Skill/Skill";
import {Title} from "../common/components/title/Title";
import reactSvg from "../assets/image/react.svg";
import reduxSvg from "../assets/image/redux.svg";
import cssSvg from "../assets/image/css.svg";
import javaScriptSvg from "../assets/image/java-script.svg";
import htmlSvg from "../assets/image/html.svg";

export const Skills = () => {
    return (
        <div className={s.skills_block}>
            <div className={`${sContainer.container} ${s.skills_container}`}>
                <Title title={"Skills"}/>
                <p>I always try my best to make good user interface
                    with the best user experience.
                </p>
                <div className={s.skills}>
                    <Skill svg={javaScriptSvg}
                           title={"JS"}
                           done={"60"}
                           description={"Lorem Ipsum is simply dummy text of sions of Lorem Ipsum."}/>
                    <Skill svg={reactSvg}
                           title={"React"}
                           done={"60"}
                           description={"Lorem Ipsum is simply du00s, remainin i versiof Lorem Ipsum."}/>
                    <Skill svg={cssSvg}
                           title={"CSS"}
                           done={"40"}
                           description={"Lorem Ipsum is simplyhe, remaining i versions of Lorem Ipsum."}
                    />
                    <Skill svg={reduxSvg}
                           title={"Redux"}
                           done={"40"}
                           description={'"Lorem Ipsum ithe printitd ever since the 1500s, remaininversions of Lorem Ipsum."'}
                    />
                    <Skill svg={htmlSvg}
                          title={"HTML"}
                          done={"80"}
                          description={'"Lorem Ipsum is simply dummy text  the 1500s, remaining i versions of Lorem Ipsum."'}
                />
                </div>
            </div>
        </div>
    );
}