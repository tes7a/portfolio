import React from "react";
import s from './Skills.module.css'
import sContainer from '../common/Styles/Container.module.css'
import {Skill} from "./Skill/Skill";
import {Title} from "../common/components/title/Title";

export const Skills = () => {
    return (
      <div className={s.skillsBlock}>
          <div className={`${sContainer.container} ${s.skillsContainer}`}>
              <Title title={"Skills"}/>
              <div className={s.skills}>
                  <Skill title={"JS"} description={"Learn JS"}/>
                  <Skill title={"React"} description={'Learn React'}/>
                  <Skill title={"CSS"} description={'Learn CSS'}/>
              </div>
          </div>
      </div>
    );
}